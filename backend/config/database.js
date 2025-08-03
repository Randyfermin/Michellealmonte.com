/**
 * @file: database.js
 * @path: backend/config/database.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: MySQL database connection configuration
 * @author: Randolfo Fermin
 * @module: Backend - Database Configuration
 */

const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * @function createConnection
 * @description Creates MySQL database connection
 * 
 * @returns {Object} MySQL connection pool
 * 
 * @throws {Error} Database connection error
 */
const createConnection = () => {
  return mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'michellealmonte_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
};

const db = createConnection();

module.exports = db;

// End of File: database.js
