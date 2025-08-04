/**
 * @file: server.js
 * @path: backend/server.js
 * @created: 2025-08-03
 * @modified: 2025-08-04
 * @description: Server entry point with proper route imports
 * @author: Randolfo Fermin
 * @module: Backend - Server
 */

const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 5000;

/**
 * @function startServer
 * @description Starts the Express server with all routes
 */
const startServer = async () => {
  try {
    // Test database connection
    console.log('🔍 Testing database connection...');
    const connection = await db.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();

    // Start server
    const server = app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/health`);
      console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
    });

    // Graceful shutdown handlers
    const gracefulShutdown = () => {
      console.log('🛑 Shutting down gracefully...');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    };

    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Promise Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

// Start the server
startServer();

// End of File: server.js