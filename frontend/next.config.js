/**
 * @file: next.config.js  
 * @path: frontend/next.config.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Next.js Railway configuration
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Remove any port-related configs - let Railway handle it
  experimental: {
    outputFileTracingRoot: '/app',
  }
};

module.exports = nextConfig;

// End of File: next.config.js