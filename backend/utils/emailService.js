/**
 * @file: emailService.js
 * @path: backend/utils/emailService.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Email sending utility functions
 * @author: Randolfo Fermin
 * @module: Backend - Utilities
 */

const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter
const transporter = nodemailer.createTransporter({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * @function sendContactNotification
 * @description Sends notification email to Michelle about new contact
 * 
 * @param {Object} contactData - Contact form data
 * 
 * @returns {Promise} Email sending promise
 */
const sendContactNotification = async (contactData) => {
  const {
    name,
    email,
    phone,
    service_interest,
    consultation_type,
    budget_range,
    message
  } = contactData;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'michelle@michellealmonte.com', // Michelle's email
    subject: `New Contact Form Submission - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5C3A2E;">New Contact Form Submission</h2>
        
        <div style="background-color: #FAF8F5; padding: 20px; border-radius: 8px;">
          <h3 style="color: #5C3A2E; margin-top: 0;">Client Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="background-color: #F9E4B7; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3 style="color: #5C3A2E; margin-top: 0;">Service Details</h3>
          <p><strong>Service Interest:</strong> ${service_interest.replace('_', ' ').toUpperCase()}</p>
          <p><strong>Consultation Type:</strong> ${consultation_type.replace('_', ' ').toUpperCase()}</p>
          <p><strong>Budget Range:</strong> $${budget_range.replace('_', ',')}</p>
        </div>
        
        ${message ? `
        <div style="background-color: #D6A77A; color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3 style="margin-top: 0;">Message</h3>
          <p>${message}</p>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="color: #5C3A2E; font-size: 14px;">
            Please respond to this inquiry within 24 hours for best conversion rates.
          </p>
        </div>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

/**
 * @function sendContactConfirmation
 * @description Sends confirmation email to client
 * 
 * @param {string} email - Client email
 * @param {string} name - Client name
 * 
 * @returns {Promise} Email sending promise
 */
const sendContactConfirmation = async (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting Michelle Almonte Image Consulting',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 30px 0;">
          <h1 style="color: #5C3A2E; margin: 0;">Michelle Almonte</h1>
          <p style="color: #D6A77A; font-size: 18px; margin: 5px 0;">Image Consulting</p>
        </div>
        
        <div style="background-color: #FAF8F5; padding: 30px; border-radius: 8px;">
          <h2 style="color: #5C3A2E;">Thank you, ${name}!</h2>
          
          <p style="color: #5C3A2E; line-height: 1.6;">
            I've received your inquiry and I'm excited about the possibility of working together 
            to transform your personal image and boost your confidence.
          </p>
          
          <p style="color: #5C3A2E; line-height: 1.6;">
            I'll review your submission and respond within 24 hours with next steps for your 
            image consulting journey.
          </p>
          
          <div style="background-color: #F9E4B7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5C3A2E; margin-top: 0;">What happens next?</h3>
            <ul style="color: #5C3A2E; line-height: 1.6;">
              <li>I'll review your specific needs and preferences</li>
              <li>Schedule a complimentary 15-minute consultation call</li>
              <li>Discuss your goals and create a customized plan</li>
              <li>Begin your transformation journey!</li>
            </ul>
          </div>
          
          <p style="color: #5C3A2E; line-height: 1.6;">
            In the meantime, feel free to follow me on social media for daily style inspiration 
            and image tips.
          </p>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #5C3A2E;">Best regards,</p>
            <p style="color: #D6A77A; font-size: 18px; margin: 5px 0;"><em>Michelle Almonte</em></p>
            <p style="color: #5C3A2E; font-size: 14px;">Certified Image Consultant</p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #C9C9C9; font-size: 12px;">
          <p>Michelle Almonte Image Consulting | www.michellealmonte.com</p>
        </div>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

/**
 * @function sendNewsletterWelcome
 * @description Sends welcome email to newsletter subscriber
 * 
 * @param {string} email - Subscriber email
 * 
 * @returns {Promise} Email sending promise
 */
const sendNewsletterWelcome = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Michelle Almonte\'s Style Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 30px 0; background-color: #F9E4B7;">
          <h1 style="color: #5C3A2E; margin: 0;">Welcome to the Style Community!</h1>
          <p style="color: #5C3A2E; font-size: 18px; margin: 10px 0;">Michelle Almonte Image Consulting</p>
        </div>
        
        <div style="padding: 30px; background-color: #FAF8F5;">
          <h2 style="color: #5C3A2E;">Thank you for subscribing!</h2>
          
          <p style="color: #5C3A2E; line-height: 1.6;">
            You're now part of an exclusive community that receives weekly style tips, 
            image advice, and confidence-building strategies directly to your inbox.
          </p>
          
          <div style="background-color: #D6A77A; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">What you'll receive:</h3>
            <ul style="line-height: 1.6;">
              <li>Weekly style tips and trends</li>
              <li>Wardrobe organization advice</li>
              <li>Color analysis insights</li>
              <li>Confidence-building strategies</li>
              <li>Exclusive offers on consultation services</li>
            </ul>
          </div>
          
          <p style="color: #5C3A2E; line-height: 1.6;">
            Follow me on social media for daily inspiration and behind-the-scenes content!
          </p>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #5C3A2E;">Looking forward to your style journey,</p>
            <p style="color: #D6A77A; font-size: 18px; margin: 5px 0;"><em>Michelle</em></p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #C9C9C9; font-size: 12px;">
          <p>You can unsubscribe at any time by replying to this email.</p>
          <p>Michelle Almonte Image Consulting | www.michellealmonte.com</p>
        </div>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactNotification,
  sendContactConfirmation,
  sendNewsletterWelcome
};

// End of File: emailService.js
