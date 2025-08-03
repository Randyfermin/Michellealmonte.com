/**
 * @file: contactController.js
 * @path: backend/controllers/contactController.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Contact form handling controller
 * @author: Randolfo Fermin
 * @module: Backend - Controllers
 */

const Contact = require('../models/Contact');
const emailService = require('../utils/emailService');

/**
 * @function submitContact
 * @description Handles contact form submission
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * 
 * @returns {Object} JSON response with submission status
 */
const submitContact = async (req, res) => {
  try {
    const contactData = req.body;
    
    // Save to database
    const newContact = await Contact.create(contactData);
    
    // Send notification email to Michelle
    await emailService.sendContactNotification(contactData);
    
    // Send confirmation email to client
    await emailService.sendContactConfirmation(contactData.email, contactData.name);
    
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: newContact.id,
        name: newContact.name,
        email: newContact.email
      }
    });
    
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form'
    });
  }
};

/**
 * @function getContacts
 * @description Retrieves all contact submissions (admin only)
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * 
 * @returns {Object} JSON response with contacts data
 */
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.getAll();
    
    res.json({
      success: true,
      data: contacts
    });
    
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve contacts'
    });
  }
};

module.exports = {
  submitContact,
  getContacts
};

// End of File: contactController.js
