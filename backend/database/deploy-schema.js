/**
 * @file: deploy-schema.js
 * @path: backend/database/deploy-schema.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Deploy complete database schema to Railway MySQL
 * @author: Randolfo Fermin
 * @module: Backend - Database Deployment
 */

const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * @function deploySchema
 * @description Deploys complete database schema to Railway MySQL with proper ENUM fields
 * 
 * @returns {Promise<void>} Schema deployment result
 * 
 * @throws {Error} Database deployment error
 */
const deploySchema = async () => {
  let connection;
  
  try {
    console.log('🔍 Connecting to Railway MySQL database...');
    console.log('🔍 Available environment variables:');
    
    // Log available environment variables for debugging
    Object.keys(process.env)
      .filter(key => key.includes('MYSQL') || key.includes('DATABASE'))
      .forEach(key => console.log(`   ${key}: ${key.includes('PASSWORD') ? '***' : process.env[key]}`));
    
    // Try multiple possible variable naming conventions Railway might use
    let connectionConfig;
    
    // Option 1: DATABASE_URL (most common with Railway)
    if (process.env.DATABASE_URL) {
      console.log('📌 Using DATABASE_URL connection');
      connectionConfig = process.env.DATABASE_URL;
    }
    // Option 2: Individual MYSQL variables
    else if (process.env.MYSQLHOST) {
      console.log('📌 Using individual MYSQL variables');
      connectionConfig = {
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT || 3306,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
        multipleStatements: true
      };
    }
    // Option 3: Railway's service-prefixed variables
    else if (process.env.database_MYSQLHOST) {
      console.log('📌 Using Railway service-prefixed variables');
      connectionConfig = {
        host: process.env.database_MYSQLHOST,
        port: process.env.database_MYSQLPORT || 3306,
        user: process.env.database_MYSQLUSER,
        password: process.env.database_MYSQLPASSWORD,
        database: process.env.database_MYSQLDATABASE,
        multipleStatements: true
      };
    }
    else {
      throw new Error('No valid database connection variables found');
    }
    
    connection = await mysql.createConnection(connectionConfig);

    console.log('✅ Connected to database successfully');
    
    // Log database name if available
    const dbName = process.env.MYSQLDATABASE || process.env.database_MYSQLDATABASE || 'Unknown';
    console.log(`📋 Database: ${dbName}`);

    // Drop existing tables to avoid conflicts (if they exist)
    console.log('🗑️ Dropping existing tables (if any)...');
    await connection.execute('DROP TABLE IF EXISTS contacts');
    await connection.execute('DROP TABLE IF EXISTS newsletter_subscribers');
    await connection.execute('DROP TABLE IF EXISTS admin_users');

    // Create contacts table with all required ENUM fields
    console.log('📄 Creating contacts table...');
    const contactsQuery = `
      CREATE TABLE contacts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL,
        phone VARCHAR(20),
        service_interest ENUM(
          'personal_styling', 
          'wardrobe_audit', 
          'color_analysis', 
          'virtual_consultation', 
          'corporate_training',
          'special_events'
        ),
        consultation_type ENUM('virtual', 'in_person'),
        budget_range ENUM('under_500', '500_1000', '1000_2500', '2500_plus'),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('new', 'contacted', 'converted', 'closed') DEFAULT 'new',
        
        INDEX idx_email (email),
        INDEX idx_created_at (created_at),
        INDEX idx_status (status)
      )
    `;
    await connection.execute(contactsQuery);

    // Create newsletter subscribers table
    console.log('📧 Creating newsletter_subscribers table...');
    const newsletterQuery = `
      CREATE TABLE newsletter_subscribers (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(150) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        unsubscribed_at TIMESTAMP NULL,
        status ENUM('subscribed', 'unsubscribed') DEFAULT 'subscribed',
        
        INDEX idx_email (email),
        INDEX idx_status (status)
      )
    `;
    await connection.execute(newsletterQuery);

    // Create admin users table
    console.log('👤 Creating admin_users table...');
    const adminQuery = `
      CREATE TABLE admin_users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role ENUM('admin', 'moderator') DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP NULL,
        
        INDEX idx_username (username),
        INDEX idx_email (email)
      )
    `;
    await connection.execute(adminQuery);

    // Verify tables were created
    console.log('🔍 Verifying tables were created...');
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('📋 Created tables:', tables.map(t => Object.values(t)[0]));

    // Test contacts table structure
    console.log('🔍 Verifying contacts table structure...');
    const [columns] = await connection.execute('DESCRIBE contacts');
    console.log('📋 Contacts table columns:');
    columns.forEach(col => {
      console.log(`   - ${col.Field}: ${col.Type}`);
    });

    // Insert a test record to verify everything works
    console.log('🧪 Testing contact insertion...');
    const testContact = [
      'Test User',
      'test@example.com', 
      '+1234567890',
      'personal_styling',
      'virtual',
      '500_1000',
      'Test message from schema deployment'
    ];
    
    const insertQuery = `
      INSERT INTO contacts 
      (name, email, phone, service_interest, consultation_type, budget_range, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await connection.execute(insertQuery, testContact);
    console.log(`✅ Test contact inserted with ID: ${result.insertId}`);

    // Clean up test record
    await connection.execute('DELETE FROM contacts WHERE id = ?', [result.insertId]);
    console.log('🧹 Test record cleaned up');

    console.log('✅ Database schema deployed successfully!');
    console.log('🎉 Contact form is ready to accept submissions!');

  } catch (error) {
    console.error('❌ Schema deployment failed:', error);
    
    // Log specific error details
    if (error.code) {
      console.error(`💥 Error Code: ${error.code}`);
    }
    if (error.sqlMessage) {
      console.error(`🔍 SQL Message: ${error.sqlMessage}`);
    }
    
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Database connection closed');
    }
  }
};

// Check for database connection variables (multiple possible formats)
const hasDatabase = process.env.DATABASE_URL || 
                   (process.env.MYSQLHOST && process.env.MYSQLUSER && process.env.MYSQLPASSWORD && process.env.MYSQLDATABASE) ||
                   (process.env.database_MYSQLHOST && process.env.database_MYSQLUSER && process.env.database_MYSQLPASSWORD && process.env.database_MYSQLDATABASE);

if (!hasDatabase) {
  console.error('❌ No valid database connection variables found.');
  console.error('Expected one of:');
  console.error('  - DATABASE_URL');
  console.error('  - MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE');
  console.error('  - database_MYSQLHOST, database_MYSQLUSER, database_MYSQLPASSWORD, database_MYSQLDATABASE');
  console.error('\nRun "railway variables" to see available environment variables.');
  process.exit(1);
}

deploySchema();

// End of File: deploy-schema.js