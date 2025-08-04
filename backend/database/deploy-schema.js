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
    
    // Connect using Railway environment variables
    connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT || 3306,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      multipleStatements: true
    });

    console.log('✅ Connected to database successfully');
    console.log(`📋 Database: ${process.env.MYSQLDATABASE}`);

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

// Check for required environment variables
const requiredVars = ['MYSQLHOST', 'MYSQLUSER', 'MYSQLPASSWORD', 'MYSQLDATABASE'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars);
  process.exit(1);
}

deploySchema();

// End of File: deploy-schema.js