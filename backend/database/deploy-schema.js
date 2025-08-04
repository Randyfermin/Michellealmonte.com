/**
 * @file: deploy-schema.js
 * @path: backend/database/deploy-schema.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Deploy database schema to Railway MySQL
 * @author: Randolfo Fermin
 * @module: Backend - Database Deployment
 */

const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * @function deploySchema
 * @description Deploys database schema to Railway MySQL
 * 
 * @returns {Promise<void>} Schema deployment result
 * 
 * @throws {Error} Database deployment error
 */
const deploySchema = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE
    });

    const schema = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        active BOOLEAN DEFAULT TRUE
      );
    `;

    await connection.execute(schema);
    console.log('Database schema deployed successfully!');
    await connection.end();
  } catch (error) {
    console.error('Schema deployment failed:', error);
    process.exit(1);
  }
};

deploySchema();

// End of File: deploy-schema.js