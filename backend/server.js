/**
 * @file: server.js
 * @path: backend/server.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Express server with custom domain CORS
 * @author: Randolfo Fermin
 * @module: Backend - Server
 */

const cors = require('cors');

app.use(cors({
  origin: [
    'https://michellealmonte.com',
    'https://www.michellealmonte.com',
    'http://localhost:3000' // For development
  ],
  credentials: true
}));