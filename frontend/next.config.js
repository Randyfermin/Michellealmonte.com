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
    outputFileTracingRoot: '/app',  // Fixed: make absolute path
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (!apiUrl) return [];
    
    const baseUrl = apiUrl.startsWith('http') 
      ? apiUrl 
      : `https://${apiUrl}`;
      
    return [
      {
        source: '/api/:path*',
        destination: `${baseUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

// End of File: next.config.js