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
 * @description Deploys complete database schema to Railway MySQL
 * 
 * @returns {Promise<void>} Schema deployment result
 * 
 * @throws {Error} Database deployment error
 */
const deploySchema = async () => {
  try {
    console.log('🔍 Connecting to Railway MySQL database...');
    
    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE
    });

    console.log('✅ Connected to database successfully');

    // Drop existing tables to avoid conflicts (if they exist)
    console.log('🗑️ Dropping existing tables (if any)...');
    await connection.execute('DROP TABLE IF EXISTS contacts');
    await connection.execute('DROP TABLE IF EXISTS newsletter_subscribers');
    await connection.execute('DROP TABLE IF EXISTS admin_users');

    // Create contacts table with all required fields
    console.log('📄 Creating contacts table...');
    await connection.execute(`
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
    `);

    // Create newsletter subscribers table
    console.log('📧 Creating newsletter_subscribers table...');
    await connection.execute(`
      CREATE TABLE newsletter_subscribers (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(150) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('active', 'unsubscribed') DEFAULT 'active',
        
        INDEX idx_email (email),
        INDEX idx_status (status)
      )
    `);

    // Create admin users table
    console.log('👤 Creating admin_users table...');
    await connection.execute(`
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
    `);

    // Verify tables were created
    console.log('🔍 Verifying tables were created...');
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('📋 Created tables:', tables.map(t => Object.values(t)[0]));

    // Test contacts table structure
    console.log('🔍 Verifying contacts table structure...');
    const [columns] = await connection.execute('DESCRIBE contacts');
    console.log('📋 Contacts table columns:', columns.map(c => c.Field));

    await connection.end();
    console.log('✅ Database schema deployed successfully!');
    console.log('🎉 Ready to accept contact form submissions!');

  } catch (error) {
    console.error('❌ Schema deployment failed:', error);
    process.exit(1);
  }
};

deploySchema();

// End of File: deploy-schema.js