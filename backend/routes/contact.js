/**
 * @file: contact.js
 * @path: backend/routes/contact.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Contact form API routes
 * @author: Randolfo Fermin
 * @module: Backend - Routes
 */

const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validation');
const { contactRateLimit } = require('../middleware/rateLimiter');

/**
 * @endpoint POST /api/contact
 * @description Submit contact form
 * 
 * @requestBody {Object} Contact form data
 * @requestParam {string} name - Client name
 * @requestParam {string} email - Client email
 * @requestParam {string} phone - Client phone (optional)
 * @requestParam {string} service_interest - Service of interest
 * @requestParam {string} consultation_type - Type of consultation
 * @requestParam {string} budget_range - Budget range
 * @requestParam {string} message - Client message (optional)
 * 
 * @responseBody {Object} Submission confirmation
 * @responseCode {201} Contact form submitted successfully
 * @responseCode {400} Validation error
 * @responseCode {429} Too many requests
 * @responseCode {500} Server error
 */
router.post('/', contactRateLimit, validateContact, submitContact);

/**
 * @endpoint GET /api/contact
 * @description Get all contact submissions (admin only)
 * 
 * @responseBody {Object} Array of contact submissions
 * @responseCode {200} Contacts retrieved successfully
 * @responseCode {500} Server error
 */
router.get('/', getContacts);

module.exports = router;

// End of File: contact.js
