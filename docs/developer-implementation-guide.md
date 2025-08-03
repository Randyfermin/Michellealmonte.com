# Michelle Almonte Website - Developer Implementation Guide

/**
 * @file: developer-implementation-guide.md
 * @path: docs/developer-implementation-guide.md
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Step-by-step development guide for Michelle Almonte image consulting website
 * @author: Randolfo Fermin
 * @module: Documentation - Development Guide
 */

## PREREQUISITES

### Required Software
- Node.js (v18+ recommended)
- MySQL (v8.0+)
- VS Code with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Prettier
  - ESLint
  - MySQL (by Jun Han)
- Git
- Railway CLI

### Required Accounts
- Railway.app account
- Domain registrar account
- Email service account (Mailgun/SendGrid)

---

## PHASE 1: PROJECT SETUP & BACKEND DEVELOPMENT

### Step 1: Initialize Project Structure

```bash
# Create main project directory
mkdir michellealmonte-website
cd michellealmonte-website

# Create backend and frontend directories
mkdir backend frontend

# Initialize Git repository
git init
echo "node_modules/\n.env\n.DS_Store\n*.log" > .gitignore
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express cors dotenv bcryptjs jsonwebtoken mysql2 nodemailer joi helmet rate-limiter-flexible

# Install development dependencies
npm install -D nodemon concurrently
```

**Create backend package.json scripts:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### Step 3: Database Configuration

**Create: backend/config/database.js**
```javascript
/**
 * @file: database.js
 * @path: backend/config/database.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: MySQL database connection configuration
 * @author: Randolfo Fermin
 * @module: Backend - Database Configuration
 */

const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * @function createConnection
 * @description Creates MySQL database connection
 * 
 * @returns {Object} MySQL connection pool
 * 
 * @throws {Error} Database connection error
 */
const createConnection = () => {
  return mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'michellealmonte_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
};

const db = createConnection();

module.exports = db;

// End of File: database.js
```

**Create: backend/.env**
```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=michellealmonte_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=24h

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Server Configuration
PORT=5000
NODE_ENV=development

# Railway Configuration (for production)
RAILWAY_ENVIRONMENT=development
```

### Step 4: Database Schema Implementation

**Create: backend/database/schema.sql**
```sql
/**
 * @file: schema.sql
 * @path: backend/database/schema.sql
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Database schema for Michelle Almonte website
 * @author: Randolfo Fermin
 * @module: Backend - Database Schema
 */

-- Create database
CREATE DATABASE IF NOT EXISTS michellealmonte_db;
USE michellealmonte_db;

-- Contact Form Submissions Table
CREATE TABLE contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20),
  service_interest ENUM(
    'personal_styling', 
    'wardrobe_audit', 
    'color_analysis', 
    'virtual_consultation', 
    'corporate_training',
    'special_events'
  ),
  consultation_type ENUM('virtual', 'in_person'),
  budget_range ENUM('under_500', '500_1000', '1000_2500', '2500_plus'),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('new', 'contacted', 'converted', 'closed') DEFAULT 'new',
  
  INDEX idx_email (email),
  INDEX idx_created_at (created_at),
  INDEX idx_status (status)
);

-- Newsletter Subscriptions Table
CREATE TABLE newsletter_subscribers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(150) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('active', 'unsubscribed') DEFAULT 'active',
  
  INDEX idx_email (email),
  INDEX idx_status (status)
);

-- Admin Users Table (for future admin panel)
CREATE TABLE admin_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'moderator') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL,
  
  INDEX idx_username (username),
  INDEX idx_email (email)
);

-- Insert default admin user (password: admin123 - CHANGE IN PRODUCTION)
INSERT INTO admin_users (username, email, password_hash) VALUES 
('admin', 'admin@michellealmonte.com', '$2a$10$XqKUV/K8c4/jvqWr1.Tv2.123HashHere');

-- End of File: schema.sql
```

### Step 5: Database Models

**Create: backend/models/Contact.js**
```javascript
/**
 * @file: Contact.js
 * @path: backend/models/Contact.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Contact form data model
 * @author: Randolfo Fermin
 * @module: Backend - Models
 */

const db = require('../config/database');

class Contact {
  /**
   * @function create
   * @description Creates new contact form submission
   * 
   * @param {Object} contactData - Contact form data
   * @param {string} contactData.name - Client name
   * @param {string} contactData.email - Client email
   * @param {string} contactData.phone - Client phone
   * @param {string} contactData.service_interest - Service of interest
   * @param {string} contactData.consultation_type - Type of consultation
   * @param {string} contactData.budget_range - Budget range
   * @param {string} contactData.message - Client message
   * 
   * @returns {Object} Created contact record
   * 
   * @throws {Error} Database insertion error
   */
  static async create(contactData) {
    const {
      name,
      email,
      phone,
      service_interest,
      consultation_type,
      budget_range,
      message
    } = contactData;

    const query = `
      INSERT INTO contacts 
      (name, email, phone, service_interest, consultation_type, budget_range, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      name,
      email,
      phone,
      service_interest,
      consultation_type,
      budget_range,
      message
    ]);

    return { id: result.insertId, ...contactData };
  }

  /**
   * @function getAll
   * @description Retrieves all contact submissions
   * 
   * @returns {Array} Array of contact records
   */
  static async getAll() {
    const query = 'SELECT * FROM contacts ORDER BY created_at DESC';
    const [rows] = await db.execute(query);
    return rows;
  }

  /**
   * @function updateStatus
   * @description Updates contact status
   * 
   * @param {number} id - Contact ID
   * @param {string} status - New status
   * 
   * @returns {boolean} Update success
   */
  static async updateStatus(id, status) {
    const query = 'UPDATE contacts SET status = ? WHERE id = ?';
    const [result] = await db.execute(query, [status, id]);
    return result.affectedRows > 0;
  }
}

module.exports = Contact;

// End of File: Contact.js
```

**Create: backend/models/Newsletter.js**
```javascript
/**
 * @file: Newsletter.js
 * @path: backend/models/Newsletter.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Newsletter subscription model
 * @author: Randolfo Fermin
 * @module: Backend - Models
 */

const db = require('../config/database');

class Newsletter {
  /**
   * @function subscribe
   * @description Adds email to newsletter subscriptions
   * 
   * @param {string} email - Subscriber email
   * 
   * @returns {Object} Subscription result
   * 
   * @throws {Error} Database insertion error or duplicate email
   */
  static async subscribe(email) {
    // Check if email already exists
    const checkQuery = 'SELECT id FROM newsletter_subscribers WHERE email = ?';
    const [existing] = await db.execute(checkQuery, [email]);

    if (existing.length > 0) {
      throw new Error('Email already subscribed');
    }

    const insertQuery = 'INSERT INTO newsletter_subscribers (email) VALUES (?)';
    const [result] = await db.execute(insertQuery, [email]);

    return { id: result.insertId, email, status: 'active' };
  }

  /**
   * @function unsubscribe
   * @description Unsubscribes email from newsletter
   * 
   * @param {string} email - Subscriber email
   * 
   * @returns {boolean} Unsubscribe success
   */
  static async unsubscribe(email) {
    const query = 'UPDATE newsletter_subscribers SET status = ? WHERE email = ?';
    const [result] = await db.execute(query, ['unsubscribed', email]);
    return result.affectedRows > 0;
  }

  /**
   * @function getActiveSubscribers
   * @description Gets all active newsletter subscribers
   * 
   * @returns {Array} Array of active subscribers
   */
  static async getActiveSubscribers() {
    const query = 'SELECT email FROM newsletter_subscribers WHERE status = ?';
    const [rows] = await db.execute(query, ['active']);
    return rows;
  }
}

module.exports = Newsletter;

// End of File: Newsletter.js
```

### Step 6: Middleware Implementation

**Create: backend/middleware/validation.js**
```javascript
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
```

**Create: backend/middleware/rateLimiter.js**
```javascript
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
```

### Step 7: Controllers Implementation

**Create: backend/controllers/contactController.js**
```javascript
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
```

**Create: backend/controllers/newsletterController.js**
```javascript
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
```

### Step 8: Email Service Implementation

**Create: backend/utils/emailService.js**
```javascript
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
```

### Step 9: Routes Implementation

**Create: backend/routes/contact.js**
```javascript
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
```

**Create: backend/routes/newsletter.js**
```javascript
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
```

### Step 10: Main Server Setup

**Create: backend/app.js**
```javascript
/**
 * @file: app.js
 * @path: backend/app.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Express application configuration
 * @author: Randolfo Fermin
 * @module: Backend - Application
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Import routes
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');

// Create Express app
const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://www.michellealmonte.com', 'https://michellealmonte.com']
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Trust proxy (for Railway.app)
app.set('trust proxy', 1);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Michelle Almonte Image Consulting API',
    version: '1.0.0'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  
  res.status(error.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong' 
      : error.message
  });
});

module.exports = app;

// End of File: app.js
```

**Create: backend/server.js**
```javascript
/**
 * @file: server.js
 * @path: backend/server.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Server entry point
 * @author: Randolfo Fermin
 * @module: Backend - Server
 */

const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 5000;

/**
 * @function startServer
 * @description Starts the Express server
 */
const startServer = async () => {
  try {
    // Test database connection
    const connection = await db.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Promise Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

// Start the server
startServer();

// End of File: server.js
```

### Step 11: Test Backend Setup

```bash
# Install MySQL and create database
mysql -u root -p
CREATE DATABASE michellealmonte_db;
USE michellealmonte_db;
# Run the schema.sql file content

# Start backend server
cd backend
npm run dev

# Test endpoints
curl http://localhost:5000/health
```

---

## PHASE 2: FRONTEND DEVELOPMENT

### Step 12: Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Create Next.js project with TypeScript
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install additional dependencies
npm install antd @ant-design/icons axios react-intersection-observer framer-motion

# Install development dependencies
npm install -D @types/node
```

### Step 13: Frontend Configuration

**Create: frontend/next.config.js**
```javascript
/**
 * @file: next.config.js
 * @path: frontend/next.config.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Next.js configuration
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  },
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// End of File: next.config.js
```

**Create: frontend/.env.local**
```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# Analytics (for production)
NEXT_PUBLIC_GA_ID=

# Environment
NODE_ENV=development
```

### Step 14: Global Styles and Theme

**Create: frontend/src/styles/globals.css**
```css
/**
 * @file: globals.css
 * @path: frontend/src/styles/globals.css
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Global styles and CSS variables
 * @author: Randolfo Fermin
 * @module: Frontend - Styles
 */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Brand Color Variables */
:root {
  --color-soft-ivory: #FAF8F5;
  --color-yellow-butter: #F9E4B7;
  --color-soft-terracotta: #D6A77A;
  --color-rose-dust: #D4A5A5;
  --color-cocoa-brown: #5C3A2E;
  --color-pearl-gray: #C9C9C9;
  --color-white: #FFFFFF;
  --color-black: #000000;
}

/* Global Styles */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--color-soft-ivory);
  color: var(--color-cocoa-brown);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-pearl-gray);
}

::-webkit-scrollbar-thumb {
  background: var(--color-soft-terracotta);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-cocoa-brown);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-cocoa-brown);
}

p {
  line-height: 1.6;
  color: var(--color-cocoa-brown);
}

/* Button Styles */
.btn-primary {
  background-color: var(--color-yellow-butter);
  color: var(--color-cocoa-brown);
  border: 2px solid var(--color-yellow-butter);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary:hover {
  background-color: var(--color-soft-terracotta);
  border-color: var(--color-soft-terracotta);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(214, 167, 122, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-cocoa-brown);
  border: 2px solid var(--color-cocoa-brown);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-secondary:hover {
  background-color: var(--color-cocoa-brown);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(92, 58, 46, 0.3);
}

/* Section Styles */
.section-padding {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Animation Classes */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Card Styles */
.card {
  background: var(--color-white);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(92, 58, 46, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(92, 58, 46, 0.15);
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-cocoa-brown);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-pearl-gray);
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background-color: var(--color-white);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-yellow-butter);
  box-shadow: 0 0 0 3px rgba(249, 228, 183, 0.2);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-padding {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-padding {
    padding: 40px 0;
  }
  
  .card {
    padding: 20px;
  }
}

/* Ant Design Customizations */
.ant-btn-primary {
  background-color: var(--color-yellow-butter);
  border-color: var(--color-yellow-butter);
  color: var(--color-cocoa-brown);
}

.ant-btn-primary:hover {
  background-color: var(--color-soft-terracotta);
  border-color: var(--color-soft-terracotta);
  color: var(--color-white);
}

.ant-input:focus,
.ant-input-focused {
  border-color: var(--color-yellow-butter);
  box-shadow: 0 0 0 2px rgba(249, 228, 183, 0.2);
}

.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
  border-color: var(--color-yellow-butter);
}

.ant-select.ant-select-focused .ant-select-selector {
  border-color: var(--color-yellow-butter);
  box-shadow: 0 0 0 2px rgba(249, 228, 183, 0.2);
}

/* Loading Animation */
.loading-spinner {
  border: 3px solid var(--color-pearl-gray);
  border-top: 3px solid var(--color-yellow-butter);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* End of File: globals.css */
```

### Step 15: Utility Functions

**Create: frontend/src/utils/api.js**
```javascript
/**
 * @file: api.js
 * @path: frontend/src/utils/api.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: API communication utilities
 * @author: Randolfo Fermin
 * @module: Frontend - Utilities
 */

import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens here if needed in the future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle different error types
    if (error.response) {
      // Server responded with error status
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      return Promise.reject({
        success: false,
        message: 'Network error. Please check your connection.',
      });
    } else {
      // Something else happened
      return Promise.reject({
        success: false,
        message: 'An unexpected error occurred.',
      });
    }
  }
);

/**
 * @function submitContactForm
 * @description Submits contact form data to API
 * 
 * @param {Object} formData - Contact form data
 * 
 * @returns {Promise} API response
 * 
 * @example
 * const response = await submitContactForm({
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   // ... other fields
 * });
 */
export const submitContactForm = async (formData) => {
  return api.post('/api/contact', formData);
};

/**
 * @function subscribeToNewsletter
 * @description Subscribes email to newsletter
 * 
 * @param {string} email - Subscriber email
 * 
 * @returns {Promise} API response
 * 
 * @example
 * const response = await subscribeToNewsletter('user@example.com');
 */
export const subscribeToNewsletter = async (email) => {
  return api.post('/api/newsletter/subscribe', { email });
};

/**
 * @function unsubscribeFromNewsletter
 * @description Unsubscribes email from newsletter
 * 
 * @param {string} email - Subscriber email
 * 
 * @returns {Promise} API response
 */
export const unsubscribeFromNewsletter = async (email) => {
  return api.post('/api/newsletter/unsubscribe', { email });
};

/**
 * @function checkServerHealth
 * @description Checks if API server is running
 * 
 * @returns {Promise} Health check response
 */
export const checkServerHealth = async () => {
  return api.get('/health');
};

export default api;

// End of File: api.js
```

**Create: frontend/src/utils/constants.js**
```javascript
/**
 * @file: constants.js
 * @path: frontend/src/utils/constants.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Application constants and configuration
 * @author: Randolfo Fermin
 * @module: Frontend - Constants
 */

// Brand Colors
export const COLORS = {
  SOFT_IVORY: '#FAF8F5',
  YELLOW_BUTTER: '#F9E4B7',
  SOFT_TERRACOTTA: '#D6A77A',
  ROSE_DUST: '#D4A5A5',
  COCOA_BROWN: '#5C3A2E',
  PEARL_GRAY: '#C9C9C9',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

// Service Options
export const SERVICE_OPTIONS = [
  { value: 'personal_styling', label: 'Personal Styling & Analysis' },
  { value: 'wardrobe_audit', label: 'Wardrobe Audit & Organization' },
  { value: 'color_analysis', label: 'Color Analysis & Consultation' },
  { value: 'virtual_consultation', label: 'Virtual Styling Session' },
  { value: 'corporate_training', label: 'Corporate Image Training' },
  { value: 'special_events', label: 'Special Event Styling' },
];

// Consultation Types
export const CONSULTATION_TYPES = [
  { value: 'virtual', label: 'Virtual Consultation (Online)' },
  { value: 'in_person', label: 'In-Person Consultation' },
];

// Budget Ranges
export const BUDGET_RANGES = [
  { value: 'under_500', label: 'Under $500' },
  { value: '500_1000', label: '$500 - $1,000' },
  { value: '1000_2500', label: '$1,000 - $2,500' },
  { value: '2500_plus', label: '$2,500+' },
];

// Social Media Links
export const SOCIAL_LINKS = {
  INSTAGRAM_MAIN: 'https://instagram.com/michellealmontemar',
  INSTAGRAM_SECONDARY: 'https://instagram.com/michelleamontem',
  LINKEDIN: 'https://www.linkedin.com/in/altagracia-almonte-michelle-326403166',
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'hello@michellealmonte.com',
  PHONE: '+1 (555) 123-4567', // Update with real number
  LOCATION: 'New York, NY',
};

// SEO Meta Data
export const SEO_DEFAULTS = {
  TITLE: 'Michelle Almonte - Professional Image Consultant & Personal Stylist',
  DESCRIPTION: 'Transform your personal image with professional styling, color analysis, and wardrobe consulting. Boost your confidence with expert image coaching services.',
  KEYWORDS: 'image consultant, personal stylist, color analysis, wardrobe consulting, professional styling, confidence coaching',
  AUTHOR: 'Michelle Almonte',
  SITE_URL: 'https://www.michellealmonte.com',
};

// Animation Settings
export const ANIMATION_SETTINGS = {
  SCROLL_OFFSET: 100,
  TRANSITION_DURATION: 0.6,
  STAGGER_DELAY: 0.1,
};

// Form Validation Rules
export const VALIDATION_RULES = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  PHONE: {
    PATTERN: /^[\d\s\-\+\(\)]+$/,
    MIN_LENGTH: 10,
    MAX_LENGTH: 20,
  },
  MESSAGE: {
    MAX_LENGTH: 1000,
  },
};

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER_SUBSCRIBE: '/api/newsletter/subscribe',
  NEWSLETTER_UNSUBSCRIBE: '/api/newsletter/unsubscribe',
  HEALTH: '/health',
};

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Executive',
    content: 'Michelle transformed not just my wardrobe, but my entire confidence. The color analysis was eye-opening, and now I know exactly what works for me.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Business Owner',
    content: 'As an entrepreneur, first impressions matter. Michelle helped me develop a professional image that truly represents my brand and values.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Attorney',
    content: 'The virtual consultation was incredibly thorough. Michelle provided practical advice that I could implement immediately. Highly recommend!',
    rating: 5,
  },
];

// Process Steps
export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'We discuss your goals, lifestyle, and style preferences to understand your unique needs.',
    icon: 'UserOutlined',
  },
  {
    id: 2,
    title: 'Style Analysis',
    description: 'Color analysis, body type assessment, and personal style profile creation.',
    icon: 'EyeOutlined',
  },
  {
    id: 3,
    title: 'Strategy Development',
    description: 'Create a personalized style roadmap and wardrobe plan tailored to your goals.',
    icon: 'BulbOutlined',
  },
  {
    id: 4,
    title: 'Implementation',
    description: 'Shopping assistance, wardrobe organizing, and styling sessions to bring your new image to life.',
    icon: 'ShoppingOutlined',
  },
  {
    id: 5,
    title: 'Ongoing Support',
    description: 'Follow-up consultations and continued guidance to maintain and evolve your style.',
    icon: 'HeartOutlined',
  },
];

// Service Features
export const SERVICE_FEATURES = [
  {
    title: 'Personal Style Analysis',
    description: 'Discover your authentic style through comprehensive analysis of your preferences, lifestyle, and goals.',
    features: ['Color Analysis', 'Body Type Assessment', 'Style Personality Quiz', 'Lifestyle Evaluation'],
  },
  {
    title: 'Wardrobe Consulting',
    description: 'Optimize your existing wardrobe and create a strategic plan for future purchases.',
    features: ['Closet Audit', 'Wardrobe Organization', 'Shopping Lists', 'Mix & Match Guidance'],
  },
  {
    title: 'Professional Image Coaching',
    description: 'Develop executive presence and professional confidence for career advancement.',
    features: ['Business Attire Planning', 'Confidence Building', 'Communication Skills', 'Personal Branding'],
  },
];

export default {
  COLORS,
  SERVICE_OPTIONS,
  CONSULTATION_TYPES,
  BUDGET_RANGES,
  SOCIAL_LINKS,
  CONTACT_INFO,
  SEO_DEFAULTS,
  ANIMATION_SETTINGS,
  VALIDATION_RULES,
  API_ENDPOINTS,
  TESTIMONIALS,
  PROCESS_STEPS,
  SERVICE_FEATURES,
};

// End of File: constants.js
```

---

## NEXT STEPS

This guide covers the complete backend setup and the foundation for frontend development. The next steps would be:

1. **Continue with Frontend Components** (Sections 16-25)
2. **Integration Testing** (Section 26)
3. **Deployment to Railway.app** (Section 27)
4. **Production Optimization** (Section 28)

**To continue this implementation:**

1. Run the backend server: `cd backend && npm run dev`
2. Test all API endpoints
3. Set up the MySQL database with the provided schema
4. Configure environment variables
5. Begin frontend component development

Would you like me to continue with the frontend component implementation, or do you need clarification on any of the backend setup steps?