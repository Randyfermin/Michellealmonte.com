/**
 * @file: newsletterController.js
 * @path: backend/controllers/newsletterController.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Newsletter subscription controller
 * @author: Randolfo Fermin
 * @module: Backend - Controllers
 */

const Newsletter = require('../models/Newsletter');
const emailService = require('../utils/emailService');

/**
 * @function subscribe
 * @description Handles newsletter subscription
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * 
 * @returns {Object} JSON response with subscription status
 */
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Add to newsletter subscribers
    const subscription = await Newsletter.subscribe(email);
    
    // Send welcome email
    await emailService.sendNewsletterWelcome(email);
    
    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        email: subscription.email
      }
    });
    
  } catch (error) {
    if (error.message === 'Email already subscribed') {
      return res.status(409).json({
        success: false,
        message: 'Email is already subscribed to newsletter'
      });
    }
    
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter'
    });
  }
};

/**
 * @function unsubscribe
 * @description Handles newsletter unsubscription
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * 
 * @returns {Object} JSON response with unsubscription status
 */
const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    
    const success = await Newsletter.unsubscribe(email);
    
    if (success) {
      res.json({
        success: true,
        message: 'Successfully unsubscribed from newsletter'
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Email not found in subscribers list'
      });
    }
    
  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe from newsletter'
    });
  }
};

module.exports = {
  subscribe,
  unsubscribe
};

// End of File: newsletterController.js
