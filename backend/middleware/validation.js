/**
 * @file: validation.js
 * @path: backend/middleware/validation.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Input validation middleware using Joi
 * @author: Randolfo Fermin
 * @module: Backend - Middleware
 */

const Joi = require('joi');

/**
 * @function validateContact
 * @description Validates contact form data
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const validateContact = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[\d\s\-\+\(\)]+$/).min(10).max(20).optional(),
    service_interest: Joi.string().valid(
      'personal_styling',
      'wardrobe_audit',
      'color_analysis',
      'virtual_consultation',
      'corporate_training',
      'special_events'
    ).required(),
    consultation_type: Joi.string().valid('virtual', 'in_person').required(),
    budget_range: Joi.string().valid(
      'under_500',
      '500_1000',
      '1000_2500',
      '2500_plus'
    ).required(),
    message: Joi.string().max(1000).optional()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      details: error.details[0].message
    });
  }

  next();
};

/**
 * @function validateNewsletter
 * @description Validates newsletter subscription data
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const validateNewsletter = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address'
    });
  }

  next();
};

module.exports = {
  validateContact,
  validateNewsletter
};

// End of File: validation.js
