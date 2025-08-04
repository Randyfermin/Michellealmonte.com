/**
 * @file: next.config.js
 * @path: frontend/next.config.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Next.js configuration for Railway deployment
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: '.',
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

// End of File: next.config.js