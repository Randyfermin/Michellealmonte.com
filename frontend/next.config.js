/**
 * @file: next.config.js
 * @path: frontend/next.config.js
 * @created: 2025-08-04
 * @modified: 2025-08-06
 * @description: Next.js configuration for Railway deployment with Server Actions fix
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: '/app',
    // IMPORTANT: Enable Server Actions if you're using them
    serverActions: true,
    // Fix for Railway deployment
    allowMiddlewareResponseBody: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  
  // Add headers configuration for Railway
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Forwarded-Proto',
            value: 'https',
          },
          {
            key: 'X-Forwarded-Host',
            value: process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost:3000',
          },
        ],
      },
    ];
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