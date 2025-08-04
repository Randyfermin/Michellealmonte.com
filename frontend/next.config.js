/**
 * @file: next.config.js
 * @path: frontend/next.config.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Next.js Railway static assets configuration
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Fix static asset serving
  experimental: {
    outputFileTracingRoot: '/app',
  },
  
  // Ensure static assets are properly handled
  trailingSlash: false,
  
  // Asset prefix for proper static file serving
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image configuration
  images: {
    unoptimized: true, // Fix for Railway deployment
  },
};

module.exports = nextConfig;

// End of File: next.config.js