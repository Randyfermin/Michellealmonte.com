/**
 * @file: next.config.js
 * @path: frontend/next.config.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Next.js Railway deployment configuration
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Ensure proper port binding for Railway
  experimental: {
    outputFileTracingRoot: '/app',
  },
  
  // Railway specific configuration
  trailingSlash: false,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// End of File: next.config.js