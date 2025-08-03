/**
 * @file: newsletter.js
 * @path: backend/routes/newsletter.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Newsletter subscription API routes
 * @author: Randolfo Fermin
 * @module: Backend - Routes
 */

const express = require('express');
const router = express.Router();
const { subscribe, unsubscribe } = require('../controllers/newsletterController');
const { validateNewsletter } = require('../middleware/validation');
const { newsletterRateLimit } = require('../middleware/rateLimiter');

/**
 * @endpoint POST /api/newsletter/subscribe
 * @description Subscribe to newsletter
 * 
 * @requestBody {Object} Subscription data
 * @requestParam {string} email - Subscriber email
 * 
 * @responseBody {Object} Subscription confirmation
 * @responseCode {201} Successfully subscribed
 * @responseCode {400} Invalid email
 * @responseCode {409} Email already subscribed
 * @responseCode {429} Too many requests
 * @responseCode {500} Server error
 */
router.post('/subscribe', newsletterRateLimit, validateNewsletter, subscribe);

/**
 * @endpoint POST /api/newsletter/unsubscribe
 * @description Unsubscribe from newsletter
 * 
 * @requestBody {Object} Unsubscription data
 * @requestParam {string} email - Subscriber email
 * 
 * @responseBody {Object} Unsubscription confirmation
 * @responseCode {200} Successfully unsubscribed
 * @responseCode {404} Email not found
 * @responseCode {500} Server error
 */
router.post('/unsubscribe', validateNewsletter, unsubscribe);

module.exports = router;

// End of File: newsletter.js
