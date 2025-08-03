/**
 * @file: server.js
 * @path: backend/server.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Server entry point
 * @author: Randolfo Fermin
 * @module: Backend - Server
 */

const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 5000;

/**
 * @function startServer
 * @description Starts the Express server
 */
const startServer = async () => {
  try {
    // Test database connection (optional for development)
    try {
      const connection = await db.getConnection();
      console.log('✅ Database connected successfully');
      connection.release();
    } catch (dbError) {
      console.log('⚠️  Database connection failed (continuing without DB for development):', dbError.message);
      console.log('📝 Note: Set up MySQL database to enable full functionality');
    }

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/health`);
      console.log(`🔗 API Base: http://localhost:${PORT}/api`);
    });

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
