/**
 * @file: middleware.js
 * @path: frontend/middleware.js
 * @created: 2025-08-06
 * @modified: 2025-08-06
 * @description: Next.js middleware to fix origin header for Railway deployment
 * @author: Randolfo Fermin
 * @module: Frontend - Middleware
 */

import { NextResponse } from 'next/server';

/**
 * @function middleware
 * @description Middleware to handle origin header for Server Actions on Railway
 * 
 * @param {Request} request - Incoming request object
 * @returns {NextResponse} Modified response with proper headers
 */
export function middleware(request) {
  const response = NextResponse.next();
  
  // Get the host from various headers (Railway specific)
  const host = request.headers.get('x-forwarded-host') || 
               request.headers.get('host') || 
               'localhost:3000';
  
  // Set the origin header if missing (fix for Server Actions)
  if (!request.headers.get('origin')) {
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    response.headers.set('origin', `${protocol}://${host}`);
  }
  
  // Ensure proper forwarding headers for Railway
  response.headers.set('x-forwarded-host', host);
  response.headers.set('x-forwarded-proto', 'https');
  
  return response;
}

/**
 * @config matcher
 * @description Configure which paths this middleware applies to
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

// End of File: middleware.js