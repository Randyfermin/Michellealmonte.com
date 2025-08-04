/**
 * @file: logger.js
 * @path: backend/utils/logger.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Error logging utility
 * @author: Randolfo Fermin
 * @module: Backend - Utilities
 */

const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

/**
 * @function formatLogMessage
 * @description Format log message with timestamp and level
 */
const formatLogMessage = (level, message, error = null) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  
  if (error) {
    return `${logMessage}\nError: ${error.message}\nStack: ${error.stack}\n---\n`;
  }
  
  return `${logMessage}\n`;
};

/**
 * @function writeToFile
 * @description Write log message to file
 */
const writeToFile = (filename, message) => {
  const filePath = path.join(logsDir, filename);
  fs.appendFileSync(filePath, message);
};

/**
 * @function logError
 * @description Log error messages
 */
const logError = (message, error = null) => {
  const logMessage = formatLogMessage('error', message, error);
  
  // Write to error log file
  writeToFile('error.log', logMessage);
  
  // Also log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.error(logMessage);
  }
};

/**
 * @function logInfo
 * @description Log info messages
 */
const logInfo = (message) => {
  const logMessage = formatLogMessage('info', message);
  
  // Write to general log file
  writeToFile('app.log', logMessage);
  
  // Also log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(logMessage);
  }
};

/**
 * @function logWarning
 * @description Log warning messages
 */
const logWarning = (message) => {
  const logMessage = formatLogMessage('warning', message);
  
  // Write to general log file
  writeToFile('app.log', logMessage);
  
  // Also log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.warn(logMessage);
  }
};

module.exports = {
  logError,
  logInfo,
  logWarning
};

// End of File: logger.js
