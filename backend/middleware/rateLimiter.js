/**
 * @file: rateLimiter.js
 * @path: backend/middleware/rateLimiter.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Rate limiting middleware for API endpoints
 * @author: Randolfo Fermin
 * @module: Backend - Middleware
 */

const { RateLimiterMemory } = require('rate-limiter-flexible');

// Contact form rate limiter (5 submissions per hour per IP)
const contactLimiter = new RateLimiterMemory({
  keyGenerateAsync: (req) => req.ip,
  points: 5, // Number of requests
  duration: 3600, // Per 3600 seconds (1 hour)
});

// Newsletter rate limiter (3 subscriptions per hour per IP)
const newsletterLimiter = new RateLimiterMemory({
  keyGenerateAsync: (req) => req.ip,
  points: 3,
  duration: 3600,
});

/**
 * @function contactRateLimit
 * @description Rate limiting middleware for contact form
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const contactRateLimit = async (req, res, next) => {
  try {
    await contactLimiter.consume(req.ip);
    next();
  } catch {
    res.status(429).json({
      success: false,
      message: 'Too many contact form submissions. Please try again later.'
    });
  }
};

/**
 * @function newsletterRateLimit
 * @description Rate limiting middleware for newsletter subscription
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const newsletterRateLimit = async (req, res, next) => {
  try {
    await newsletterLimiter.consume(req.ip);
    next();
  } catch {
    res.status(429).json({
      success: false,
      message: 'Too many subscription attempts. Please try again later.'
    });
  }
};

module.exports = {
  contactRateLimit,
  newsletterRateLimit
};

// End of File: rateLimiter.js
