/**
 * @deployment: Railway.com
 * @environment: Production
 * @description: Express server configured for Railway deployment
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors());

app.use(cors({
  origin: [
    'https://michellealmonte.com',
    'https://www.michellealmonte.com',
    'http://localhost:3000' // For development
  ],
  credentials: true
}));

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    port: PORT
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Michelle Almonte Backend API' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});

// End of File: server.js
