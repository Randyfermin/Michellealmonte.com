/**
 * @file: app.js
 * @path: backend/app.js
 * @created: 2025-08-03
 * @modified: 2025-08-04
 * @description: Express application configuration with fixed CORS
 * @author: Randolfo Fermin
 * @module: Backend - Application
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Import routes
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');

// Create Express app
const app = express();

// Security middleware
app.use(helmet());

// CORS configuration - Updated to include Railway frontend domain
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://www.michellealmonte.com', 
        'https://michellealmonte.com',
        'https://frontend-production-cd7e.up.railway.app' // Add Railway frontend domain
      ]
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Trust proxy (for Railway.app)
app.set('trust proxy', 1);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    corsOrigins: corsOptions.origin
  });
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Michelle Almonte Image Consulting API',
    version: '1.0.0'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  
  res.status(error.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong' 
      : error.message
  });
});

module.exports = app;

// End of File: app.js