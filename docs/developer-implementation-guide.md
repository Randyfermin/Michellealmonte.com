
# Code Documentation and Standards Guide - Michelle Almonte Website Project
**Updated: 2025-08-03 | Project Status: Ready for Development Implementation**

## COMPLETED TASKS ✅

### Planning & Documentation Phase (100% Complete)
- [x] **Project Analysis & Requirements** - Target market research, service offerings identified
- [x] **Technical Architecture Design** - Backend/Frontend structure planned
- [x] **Database Schema Design** - Complete with contacts, newsletter, admin tables
- [x] **Development Plan** - 4-week timeline with daily milestones
- [x] **Implementation Guide** - Comprehensive step-by-step guide created
- [x] **Brand Identity** - Color scheme defined (Soft Ivory, Yellow Butter, Soft Terracotta, Rose Dust, Cocoa Brown)
- [x] **Tech Stack Selection** - Node.js + Express, Next.js + Ant Design, MySQL + JWT, Railway.app
- [x] **Project Structure** - Complete file/folder organization planned
- [x] **Documentation Standards** - File headers, function documentation, and standards defined

---

## FILE HEADER STANDARDS
For every source code file in the project, include the following standardized header:
```javascript
/**
 * @file: [FILENAME]
 * @path: [DIRECTORY_PATH/FILENAME]
 * @created: [YYYY-MM-DD]
 * @modified: [YYYY-MM-DD]
 * @description: Brief description of the file's purpose and functionality
 * @author: [AUTHOR_NAME] - Randolfo Fermin
 * @module: [MODULE_NAME] - Which part of the system this file belongs to
 */
```

## FUNCTION/METHOD DOCUMENTATION STANDARDS
Document each function or method using this format:
```javascript
/**
 * @function functionName
 * @description Concise explanation of what the function does
 * 
 * @param {DataType} paramName - Description of parameter
 * @param {DataType} paramName - Description of parameter
 * 
 * @returns {ReturnType} Description of what's returned
 * 
 * @example
 * // Example usage of the function
 * const result = functionName(param1, param2);
 * 
 * @throws {ErrorType} Description of potential errors
 */
```

## CODE STRUCTURE STANDARDS

### Consistent Indentation
Use 2 spaces for indentation across all files.

### Component Organization
For React components, follow this structure:
1. Imports
2. Type definitions/interfaces
3. Component function
4. Helper functions
5. Exports

### API Endpoint Documentation
For each API endpoint, include:
```javascript
/**
 * @endpoint [METHOD] /api/path
 * @description Purpose of this endpoint
 * 
 * @requestBody {Object} Description of request body
 * @requestParam {DataType} paramName - Description
 * 
 * @responseBody {Object} Description of response
 * @responseCode {200} Success scenario description
 * @responseCode {4xx/5xx} Error scenario description
 */
```

### Database Query Comments
For complex queries:
```javascript
/**
 * @query [QUERY_NAME]
 * @description What this query accomplishes
 * 
 * @param {DataType} paramName - Description
 * @returns {ResultType} Description of returned data
 * 
 * @optimization Notes about query optimization if applicable
 */
```

## VERSION CONTROL STANDARDS

### Commit Messages
Structure commit messages as:
```
[TYPE]: Short description (50 chars or less)

More detailed explanation if necessary. Keep line length under 72 
characters. Explain what and why, not how.

Related issue: #123
```

**Types include:**
- FEAT: New feature
- FIX: Bug fix
- DOCS: Documentation changes
- STYLE: Formatting, missing semi-colons, etc.
- REFACTOR: Code restructuring
- TEST: Adding tests
- CHORE: Maintenance tasks

### Branch Naming
Follow pattern `type/short-description`:
- feature/contact-form
- bugfix/email-validation
- hotfix/security-patch

## TESTING DOCUMENTATION
For test files:
```javascript
/**
 * @test: [COMPONENT_OR_FUNCTION_BEING_TESTED]
 * @description: What aspects are being tested
 * 
 * Test organization:
 * - Describe block 1: What is being tested here
 * - Describe block 2: What is being tested here
 */
```

## ADDITIONAL DOCUMENTATION REQUIREMENTS

### TODO Comments
Use consistent format:
```javascript
// TODO(username): Description of what needs to be done
// FIXME(username): Description of what needs to be fixed
```

### Deprecation Notices
Mark deprecated code:
```javascript
/**
 * @deprecated Since version X.Y.Z. Use newFunction() instead.
 */
```

### Security Annotations
For security-sensitive code:
```javascript
// SECURITY: Explanation of security considerations
```

## RAILWAY.COM DEPLOYMENT NOTES
For configuration files related to Railway deployment:
```javascript
/**
 * @deployment: Railway.com
 * @environment: [ENVIRONMENT_NAME]
 * @description: Purpose of this configuration
 * 
 * @variables:
 * - VARIABLE_NAME: Description and purpose
 * 
 * @dependencies:
 * - Service dependencies and versions
 */
```

## GITHUB INTEGRATION NOTES
For GitHub workflow files:
```javascript
/**
 * @workflow: [WORKFLOW_NAME]
 * @trigger: What triggers this workflow
 * @description: What this workflow accomplishes
 * 
 * @jobs:
 * - JOB_NAME: Purpose of this job
 * 
 * @secrets:
 * - SECRET_NAME: Purpose (but not the value!)
 */
```

## FILE ENDINGS
Every source code file must end with:
```javascript
// End of File: [FILENAME]
```

---

## TECH STACK SPECIFICATIONS
- **Backend**: Node.js + Express
- **Frontend**: Next.js + Ant Design
- **Database**: MySQL + JWT  
- **Hosting and Deploy**: Railway.app
- **IDE**: VS Code + JavaScript running on Windows

## PROJECT-SPECIFIC NOTES
- **Project**: Michelle Almonte Image Consulting Website (www.michellealmonte.com)
- **Type**: Single Page Website (SPA)
- **Brand Colors**: Soft Ivory (#FAF8F5), Yellow Butter (#F9E4B7), Soft Terracotta (#D6A77A), Rose Dust (#D4A5A5), Cocoa Brown (#5C3A2E)
- **Target**: Professional image consulting services with lead generation focus
- **Timeline**: 4 weeks development and deployment

## DEVELOPMENT PRINCIPLES
- One person project - internal documentation only
- No automation scripts for fixes - provide single step-by-step solutions
- Test at end of development cycle
- Stay within established project structure
- Create resume for follow-up if complex tasks arise

---

## RESUME FOR FOLLOW-UP
**Project**: Michelle Almonte Image Consulting Website  
**Status**: Planning Complete - Ready for Development Implementation  
**Next Phase**: Backend setup and database implementation  
**Key Focus**: Professional, elegant design with brand colors and lead generation optimization  
**Documentation**: All standards defined, comprehensive implementation guide available

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
mkdir michellealmonte.com
cd michellealmonte.com

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

### Step 16: Layout Components

**Create: frontend/src/components/layout/Header.js**
```javascript
/**
 * @file: Header.js
 * @path: frontend/src/components/layout/Header.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Main navigation header component
 * @author: Randolfo Fermin
 * @module: Frontend - Layout Components
 */

import { useState, useEffect } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * @function handleScroll
   * @description Updates header style based on scroll position
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * @function scrollToSection
   * @description Smooth scrolls to section
   * 
   * @param {string} sectionId - Target section ID
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-cocoa-brown hover:text-soft-terracotta transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              MA
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-cocoa-brown hover:text-soft-terracotta transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cocoa-brown hover:text-soft-terracotta transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseOutlined size={24} /> : <MenuOutlined size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 right-0 shadow-lg">
            <div className="py-4 px-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-cocoa-brown hover:text-soft-terracotta transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

// End of File: Header.js
```

**Create: frontend/src/components/layout/Footer.js**
```javascript
/**
 * @file: Footer.js
 * @path: frontend/src/components/layout/Footer.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Footer component with contact info and social links
 * @author: Randolfo Fermin
 * @module: Frontend - Layout Components
 */

import { useState } from 'react';
import { InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { subscribeToNewsletter } from '@/utils/api';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/utils/constants';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  /**
   * @function handleNewsletterSubmit
   * @description Handles newsletter subscription
   * 
   * @param {Event} e - Form submit event
   */
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);
    setMessage('');

    try {
      await subscribeToNewsletter(email);
      setMessage('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      setMessage(error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-cocoa-brown text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 
              className="text-3xl font-bold mb-4 text-yellow-butter"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Michelle Almonte
            </h3>
            <p className="text-lg mb-4 text-rose-dust">Professional Image Consultant</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your personal image and boost your confidence with expert styling, 
              color analysis, and professional image coaching services.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.INSTAGRAM_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-butter hover:text-white transition-colors"
              >
                <InstagramOutlined style={{ fontSize: '24px' }} />
              </a>
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-butter hover:text-white transition-colors"
              >
                <LinkedinOutlined style={{ fontSize: '24px' }} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-butter">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MailOutlined className="mr-3 text-rose-dust" />
                <a 
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </div>
              <div className="flex items-center">
                <PhoneOutlined className="mr-3 text-rose-dust" />
                <a 
                  href={`tel:${CONTACT_INFO.PHONE}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-butter">Style Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Get weekly style tips and exclusive content delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-butter"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-butter text-cocoa-brown py-2 px-4 rounded-lg font-semibold hover:bg-soft-terracotta hover:text-white transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            {message && (
              <p className={`mt-2 text-sm ${message.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Michelle Almonte Image Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// End of File: Footer.js
```

**Create: frontend/src/components/layout/Layout.js**
```javascript
/**
 * @file: Layout.js
 * @path: frontend/src/components/layout/Layout.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Main layout wrapper component
 * @author: Randolfo Fermin
 * @module: Frontend - Layout Components
 */

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { SEO_DEFAULTS } from '@/utils/constants';

/**
 * @function Layout
 * @description Main layout wrapper with header, footer, and SEO
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.title - Page title (optional)
 * @param {string} props.description - Page description (optional)
 * @param {string} props.keywords - Page keywords (optional)
 * 
 * @returns {React.Component} Layout component
 */
const Layout = ({ 
  children, 
  title = SEO_DEFAULTS.TITLE,
  description = SEO_DEFAULTS.DESCRIPTION,
  keywords = SEO_DEFAULTS.KEYWORDS 
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={SEO_DEFAULTS.AUTHOR} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_DEFAULTS.SITE_URL} />
        <meta property="og:site_name" content="Michelle Almonte Image Consulting" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Michelle Almonte Image Consulting",
              "description": description,
              "url": SEO_DEFAULTS.SITE_URL,
              "serviceType": "Image Consulting",
              "areaServed": "New York, NY",
              "founder": {
                "@type": "Person",
                "name": "Michelle Almonte"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

// End of File: Layout.js
```

### Step 17: Hero Section Component

**Create: frontend/src/components/sections/HeroSection.js**
```javascript
/**
 * @file: HeroSection.js
 * @path: frontend/src/components/sections/HeroSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Hero section with main call-to-action
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownOutlined } from '@ant-design/icons';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * @function scrollToSection
   * @description Scrolls to target section
   * 
   * @param {string} sectionId - Target section ID
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-butter rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-soft-terracotta rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-rose-dust rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={staggerChildren}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cocoa-brown"
              style={{ fontFamily: 'Playfair Display, serif' }}
              variants={fadeInUp}
            >
              Transform Your Image,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-butter to-soft-terracotta">
                Transform Your Life
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-8 text-cocoa-brown/80 leading-relaxed"
              variants={fadeInUp}
            >
              Professional image consulting and personal styling services 
              to boost your confidence and elevate your personal brand.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              variants={fadeInUp}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Key Benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left"
              variants={fadeInUp}
            >
              <div>
                <div className="text-2xl font-bold text-yellow-butter mb-2">500+</div>
                <div className="text-cocoa-brown">Clients Transformed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-soft-terracotta mb-2">15+</div>
                <div className="text-cocoa-brown">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rose-dust mb-2">100%</div>
                <div className="text-cocoa-brown">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Placeholder for Michelle's professional photo */}
              <div 
                className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-yellow-butter to-soft-terracotta rounded-2xl flex items-center justify-center text-white text-xl font-semibold shadow-2xl"
              >
                Michelle's Professional Photo
                <br />
                <span className="text-sm font-normal">
                  (Replace with actual image)
                </span>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-rose-dust rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-butter rounded-full"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-soft-terracotta rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-cocoa-brown hover:text-soft-terracotta transition-colors animate-bounce"
          >
            <ArrowDownOutlined style={{ fontSize: '24px' }} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

// End of File: HeroSection.js
```

### Step 18: About Section Component

**Create: frontend/src/components/sections/AboutSection.js**
```javascript
/**
 * @file: AboutSection.js
 * @path: frontend/src/components/sections/AboutSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: About Michelle section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarFilled, UserOutlined, HeartOutlined, BulbOutlined } from '@ant-design/icons';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const credentials = [
    {
      icon: <StarFilled className="text-yellow-butter" />,
      title: "Certified Image Consultant",
      description: "Professional certification in image consulting and personal styling"
    },
    {
      icon: <UserOutlined className="text-soft-terracotta" />,
      title: "15+ Years Experience",
      description: "Extensive background in design and personal transformation"
    },
    {
      icon: <HeartOutlined className="text-rose-dust" />,
      title: "500+ Satisfied Clients",
      description: "Proven track record of successful image transformations"
    },
    {
      icon: <BulbOutlined className="text-cocoa-brown" />,
      title: "Multidisciplinary Background",
      description: "Industrial design and film production expertise"
    }
  ];

  return (
    <section 
      id="about" 
      className="section-padding bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Placeholder for Michelle's about photo */}
              <div 
                className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-soft-ivory to-pearl-gray rounded-2xl flex items-center justify-center text-cocoa-brown text-xl font-semibold shadow-lg"
              >
                Michelle's About Photo
                <br />
                <span className="text-sm font-normal">
                  (Professional lifestyle image)
                </span>
              </div>
              
              {/* Decorative Quote */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-butter p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-cocoa-brown font-medium italic">
                  "Style is a way to say who you are without having to speak."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            variants={staggerChildren}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <motion.div variants={fadeInUp}>
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-6 text-cocoa-brown"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Meet Michelle
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-butter to-soft-terracotta mb-6"></div>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <p className="text-lg text-cocoa-brown/80 leading-relaxed">
                With roots in the beautiful Caribbean and a multidisciplinary background in 
                industrial design and film production, I bring a unique perspective to image 
                consulting that goes beyond just clothing.
              </p>
              
              <p className="text-lg text-cocoa-brown/80 leading-relaxed">
                After studying industrial design in my homeland and later pursuing film 
                production in Spain and New York, I discovered my true passion: helping 
                people transform their lives through authentic personal style.
              </p>
              
              <p className="text-lg text-cocoa-brown/80 leading-relaxed">
                My holistic approach combines technical expertise with creative vision, 
                ensuring that your personal transformation is not just about looking good, 
                but feeling confident and authentic in your own skin.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-6 text-cocoa-brown">
                Why Choose Me?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                  >
                    <div className="text-2xl mt-1">
                      {credential.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-cocoa-brown mb-1">
                        {credential.title}
                      </h4>
                      <p className="text-sm text-cocoa-brown/70">
                        {credential.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4"
              >
                Work With Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// End of File: AboutSection.js
```

### Step 19: Services Section Component

**Create: frontend/src/components/sections/ServicesSection.js**
```javascript
/**
 * @file: ServicesSection.js
 * @path: frontend/src/components/sections/ServicesSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Services overview section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserOutlined, 
  ShoppingOutlined, 
  EyeOutlined, 
  VideoCameraOutlined,
  TeamOutlined,
  StarOutlined 
} from '@ant-design/icons';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    {
      icon: <EyeOutlined className="text-4xl text-yellow-butter" />,
      title: "Personal Style Analysis",
      description: "Comprehensive color analysis, body type assessment, and personal style discovery to unlock your authentic look.",
      features: [
        "Color Analysis & Seasonal Palette",
        "Body Type & Proportions Assessment", 
        "Style Personality Discovery",
        "Personal Brand Development"
      ],
      price: "Starting at $299"
    },
    {
      icon: <ShoppingOutlined className="text-4xl text-soft-terracotta" />,
      title: "Wardrobe Consulting",
      description: "Transform your closet with expert organization, strategic shopping guidance, and personalized styling sessions.",
      features: [
        "Complete Closet Audit",
        "Wardrobe Organization System",
        "Strategic Shopping Lists",
        "Outfit Creation & Styling"
      ],
      price: "Starting at $399"
    },
    {
      icon: <UserOutlined className="text-4xl text-rose-dust" />,
      title: "Professional Image Coaching", 
      description: "Develop executive presence and professional confidence for career advancement and business success.",
      features: [
        "Executive Presence Development",
        "Business Attire Strategy",
        "Confidence Building Techniques",
        "Personal Branding for Professionals"
      ],
      price: "Starting at $499"
    },
    {
      icon: <VideoCameraOutlined className="text-4xl text-cocoa-brown" />,
      title: "Virtual Consultations",
      description: "Receive expert styling advice from the comfort of your home with comprehensive virtual consultation sessions.",
      features: [
        "Live Virtual Styling Sessions",
        "Digital Wardrobe Analysis", 
        "Online Shopping Assistance",
        "Follow-up Support & Guidance"
      ],
      price: "Starting at $199"
    },
    {
      icon: <TeamOutlined className="text-4xl text-yellow-butter" />,
      title: "Corporate Training",
      description: "Professional image workshops and training programs for teams and organizations.",
      features: [
        "Team Workshops & Seminars",
        "Professional Dress Code Training",
        "Executive Image Development",
        "Brand Consistency Programs"
      ],
      price: "Custom Pricing"
    },
    {
      icon: <StarOutlined className="text-4xl text-soft-terracotta" />,
      title: "Special Event Styling",
      description: "Look your absolute best for important occasions, photoshoots, presentations, and special events.",
      features: [
        "Event-Specific Styling",
        "Outfit Selection & Coordination",
        "Accessories & Details Planning",
        "Last-Minute Style Emergency"
      ],
      price: "Starting at $249"
    }
  ];

  return (
    <section 
      id="services" 
      className="section-padding"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-6 text-cocoa-brown"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Transform Your Style
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-butter to-soft-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-cocoa-brown/80 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of image consulting services designed 
            to help you look and feel your absolute best in every situation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-cocoa-brown">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-cocoa-brown/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-butter rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-cocoa-brown/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6">
                <span className="text-2xl font-bold text-soft-terracotta">
                  {service.price}
                </span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full btn-primary"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-yellow-butter to-soft-terracotta p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4 text-cocoa-brown">
              Not Sure Which Service Is Right for You?
            </h3>
            <p className="text-cocoa-brown/80 mb-6 text-lg">
              Book a complimentary 15-minute consultation to discuss your goals and find the perfect service package.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary bg-white text-cocoa-brown hover:bg-cocoa-brown hover:text-white"
            >
              Book Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

// End of File: ServicesSection.js
```

### Step 20: Contact Section Component

**Create: frontend/src/components/sections/ContactSection.js**
```javascript
/**
 * @file: ContactSection.js
 * @path: frontend/src/components/sections/ContactSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Contact form and information section
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Form, Input, Select, Button, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { submitContactForm } from '@/utils/api';
import { SERVICE_OPTIONS, CONSULTATION_TYPES, BUDGET_RANGES, CONTACT_INFO } from '@/utils/constants';

const { TextArea } = Input;
const { Option } = Select;

const ContactSection = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  /**
   * @function handleSubmit
   * @description Handles contact form submission
   * 
   * @param {Object} values - Form values
   */
  const handleSubmit = async (values) => {
    setIsLoading(true);
    
    try {
      await submitContactForm(values);
      message.success('Thank you! Your message has been sent successfully. I\'ll respond within 24 hours.');
      form.resetFields();
    } catch (error) {
      message.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const contactInfo = [
    {
      icon: <MailOutlined className="text-2xl text-yellow-butter" />,
      title: "Email",
      content: CONTACT_INFO.EMAIL,
      action: `mailto:${CONTACT_INFO.EMAIL}`
    },
    {
      icon: <PhoneOutlined className="text-2xl text-soft-terracotta" />,
      title: "Phone",
      content: CONTACT_INFO.PHONE,
      action: `tel:${CONTACT_INFO.PHONE}`
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-rose-dust" />,
      title: "Location",
      content: CONTACT_INFO.LOCATION,
      action: null
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-cocoa-brown" />,
      title: "Response Time",
      content: "Within 24 hours",
      action: null
    }
  ];

  return (
    <section 
      id="contact" 
      className="section-padding bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-6 text-cocoa-brown"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Start Your Transformation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-butter to-soft-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-cocoa-brown/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your image and boost your confidence? Get in touch to discuss your goals 
            and discover how we can work together to create your authentic style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-soft-ivory p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-cocoa-brown">
                Book Your Consultation
              </h3>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                requiredMark={false}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="name"
                    label={<span className="font-semibold text-cocoa-brown">Full Name</span>}
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input 
                      size="large" 
                      placeholder="Enter your full name"
                      className="rounded-lg"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label={<span className="font-semibold text-cocoa-brown">Email Address</span>}
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input 
                      size="large" 
                      placeholder="Enter your email address"
                      className="rounded-lg"
                    />
                  </Form.Item>
                </div>

                <Form.Item
                  name="phone"
                  label={<span className="font-semibold text-cocoa-brown">Phone Number (Optional)</span>}
                >
                  <Input 
                    size="large" 
                    placeholder="Enter your phone number"
                    className="rounded-lg"
                  />
                </Form.Item>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="service_interest"
                    label={<span className="font-semibold text-cocoa-brown">Service Interest</span>}
                    rules={[{ required: true, message: 'Please select a service' }]}
                  >
                    <Select 
                      size="large" 
                      placeholder="Select service of interest"
                      className="rounded-lg"
                    >
                      {SERVICE_OPTIONS.map(option => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="consultation_type"
                    label={<span className="font-semibold text-cocoa-brown">Consultation Type</span>}
                    rules={[{ required: true, message: 'Please select consultation type' }]}
                  >
                    <Select 
                      size="large" 
                      placeholder="Select consultation type"
                      className="rounded-lg"
                    >
                      {CONSULTATION_TYPES.map(option => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>

                <Form.Item
                  name="budget_range"
                  label={<span className="font-semibold text-cocoa-brown">Budget Range</span>}
                  rules={[{ required: true, message: 'Please select your budget range' }]}
                >
                  <Select 
                    size="large" 
                    placeholder="Select your budget range"
                    className="rounded-lg"
                  >
                    {BUDGET_RANGES.map(option => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span className="font-semibold text-cocoa-brown">Message (Optional)</span>}
                >
                  <TextArea
                    rows={4}
                    placeholder="Tell me about your style goals and what you'd like to achieve..."
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    size="large"
                    className="w-full h-12 text-lg font-semibold rounded-lg"
                    style={{
                      backgroundColor: 'var(--color-yellow-butter)',
                      borderColor: 'var(--color-yellow-butter)',
                      color: 'var(--color-cocoa-brown)'
                    }}
                  >
                    {isLoading ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cocoa-brown">
                  Get In Touch
                </h3>
                <p className="text-cocoa-brown/80 leading-relaxed mb-8">
                  I'm here to help you discover your authentic style and build the confidence 
                  you deserve. Reach out to discuss your goals and learn how we can work together.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-yellow-butter/10 to-soft-terracotta/10 p-6 rounded-xl"
                    variants={fadeInUp}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-cocoa-brown mb-1">
                          {info.title}
                        </h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-cocoa-brown/70 hover:text-soft-terracotta transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-cocoa-brown/70">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="bg-cocoa-brown/5 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-cocoa-brown">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-cocoa-brown mb-1">
                      How long is a typical consultation?
                    </h5>
                    <p className="text-cocoa-brown/70 text-sm">
                      Initial consultations are 60-90 minutes, depending on the service selected.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cocoa-brown mb-1">
                      Do you offer virtual services?
                    </h5>
                    <p className="text-cocoa-brown/70 text-sm">
                      Yes! I offer comprehensive virtual consultations for clients worldwide.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cocoa-brown mb-1">
                      What should I expect from our first meeting?
                    </h5>
                    <p className="text-cocoa-brown/70 text-sm">
                      We'll discuss your goals, assess your current style, and create a personalized plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// End of File: ContactSection.js
```

### Step 21: Main Page Implementation

**Create: frontend/src/pages/index.js**
```javascript
/**
 * @file: index.js
 * @path: frontend/src/pages/index.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Main homepage component
 * @author: Randolfo Fermin
 * @module: Frontend - Pages
 */

import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

/**
 * @function HomePage
 * @description Main homepage with all sections
 * 
 * @returns {React.Component} Homepage component
 */
export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
}

// End of File: index.js
```

**Update: frontend/tailwind.config.js**
```javascript
/**
 * @file: tailwind.config.js
 * @path: frontend/tailwind.config.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Tailwind CSS configuration with brand colors
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-ivory': '#FAF8F5',
        'yellow-butter': '#F9E4B7',
        'soft-terracotta': '#D6A77A',
        'rose-dust': '#D4A5A5',
        'cocoa-brown': '#5C3A2E',
        'pearl-gray': '#C9C9C9',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

// End of File: tailwind.config.js
```

---

## PHASE 3: INTEGRATION TESTING

### Step 22: Testing Setup

**Create: backend/tests/api.test.js**
```javascript
/**
 * @file: api.test.js
 * @path: backend/tests/api.test.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: API endpoint integration tests
 * @author: Randolfo Fermin
 * @module: Backend - Tests
 */

const request = require('supertest');
const app = require('../app');

describe('API Integration Tests', () => {
  /**
   * @test Health Check Endpoint
   * @description Tests the /health endpoint
   */
  describe('GET /health', () => {
    it('should return 200 and success message', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Server is running');
    });
  });

  /**
   * @test Contact Form Submission
   * @description Tests contact form API endpoint
   */
  describe('POST /api/contact', () => {
    const validContactData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '555-123-4567',
      service_interest: 'personal_styling',
      consultation_type: 'virtual',
      budget_range: '500_1000',
      message: 'I would like to schedule a consultation.'
    };

    it('should accept valid contact form submission', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send(validContactData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('submitted successfully');
    });

    it('should reject invalid email', async () => {
      const invalidData = { ...validContactData, email: 'invalid-email' };
      
      const response = await request(app)
        .post('/api/contact')
        .send(invalidData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it('should reject missing required fields', async () => {
      const incompleteData = { name: 'John' };
      
      const response = await request(app)
        .post('/api/contact')
        .send(incompleteData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  /**
   * @test Newsletter Subscription
   * @description Tests newsletter subscription endpoint
   */
  describe('POST /api/newsletter/subscribe', () => {
    it('should accept valid email subscription', async () => {
      const testEmail = `test${Date.now()}@example.com`;
      
      const response = await request(app)
        .post('/api/newsletter/subscribe')
        .send({ email: testEmail })
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('subscribed');
    });

    it('should reject invalid email format', async () => {
      const response = await request(app)
        .post('/api/newsletter/subscribe')
        .send({ email: 'invalid-email' })
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    it('should reject duplicate email subscription', async () => {
      const testEmail = `duplicate${Date.now()}@example.com`;
      
      // First subscription
      await request(app)
        .post('/api/newsletter/subscribe')
        .send({ email: testEmail })
        .expect(201);

      // Duplicate subscription
      const response = await request(app)
        .post('/api/newsletter/subscribe')
        .send({ email: testEmail })
        .expect(409);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('already subscribed');
    });
  });
});

// End of File: api.test.js
```

**Install testing dependencies:**
```bash
cd backend
npm install -D jest supertest
```

**Add test script to backend/package.json:**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

### Step 23: Frontend Testing Setup

**Create: frontend/src/utils/testUtils.js**
```javascript
/**
 * @file: testUtils.js
 * @path: frontend/src/utils/testUtils.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Frontend testing utilities
 * @author: Randolfo Fermin
 * @module: Frontend - Test Utilities
 */

/**
 * @function validateFormData
 * @description Validates contact form data before submission
 * 
 * @param {Object} formData - Form data to validate
 * 
 * @returns {Object} Validation result
 */
export const validateFormData = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (if provided)
  if (formData.phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) {
      errors.phone = 'Please enter a valid phone number';
    }
  }

  // Required fields
  if (!formData.service_interest) {
    errors.service_interest = 'Please select a service';
  }

  if (!formData.consultation_type) {
    errors.consultation_type = 'Please select consultation type';
  }

  if (!formData.budget_range) {
    errors.budget_range = 'Please select budget range';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * @function testApiConnection
 * @description Tests connection to backend API
 * 
 * @returns {Promise<boolean>} Connection test result
 */
export const testApiConnection = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`);
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
};

/**
 * @function simulateFormSubmission
 * @description Simulates form submission for testing
 * 
 * @param {Object} formData - Form data to test
 * 
 * @returns {Promise<Object>} Simulation result
 */
export const simulateFormSubmission = async (formData) => {
  // Validate data first
  const validation = validateFormData(formData);
  
  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.errors
    };
  }

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate successful submission
  return {
    success: true,
    message: 'Form submitted successfully (simulation)'
  };
};

export default {
  validateFormData,
  testApiConnection,
  simulateFormSubmission
};

// End of File: testUtils.js
```

### Step 24: Manual Testing Checklist

**Create: docs/testing-checklist.md**
```markdown
# Manual Testing Checklist

## Backend API Testing

### Health Check
- [ ] GET /health returns 200 status
- [ ] Response contains success: true
- [ ] Response includes timestamp

### Contact Form API
- [ ] POST /api/contact with valid data returns 201
- [ ] Email notifications are sent to Michelle
- [ ] Confirmation email sent to client
- [ ] Invalid email format returns 400
- [ ] Missing required fields return 400
- [ ] Rate limiting works (5 requests/hour)

### Newsletter API
- [ ] POST /api/newsletter/subscribe with valid email returns 201
- [ ] Welcome email sent to subscriber
- [ ] Duplicate email returns 409
- [ ] Invalid email format returns 400
- [ ] Rate limiting works (3 requests/hour)

## Frontend Testing

### Layout Components
- [ ] Header displays correctly on all screen sizes
- [ ] Mobile menu works properly
- [ ] Footer displays contact information
- [ ] Newsletter signup in footer works
- [ ] Social media links open correctly

### Hero Section
- [ ] Animations trigger on page load
- [ ] CTA buttons scroll to correct sections
- [ ] Statistics display correctly
- [ ] Responsive on mobile devices

### About Section
- [ ] Content loads and displays properly
- [ ] Animations trigger when section comes into view
- [ ] Images placeholder displays correctly
- [ ] CTA button scrolls to contact section

### Services Section
- [ ] All service cards display correctly
- [ ] Hover effects work on service cards
- [ ] CTA buttons scroll to contact section
- [ ] Responsive grid layout works

### Contact Section
- [ ] Form validation works for all fields
- [ ] Required field validation displays errors
- [ ] Email format validation works
- [ ] Form submission shows loading state
- [ ] Success message displays after submission
- [ ] Form resets after successful submission
- [ ] Error handling works for API failures

## Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

## Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Lighthouse score > 90

## Accessibility Testing
- [ ] Tab navigation works throughout site
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG standards
- [ ] Alt text for images
- [ ] Form labels properly associated

## Mobile Responsiveness
- [ ] All sections display correctly on mobile
- [ ] Touch interactions work properly
- [ ] Text is readable without zooming
- [ ] Buttons are large enough for touch
- [ ] Forms are easy to fill on mobile
```

---

## PHASE 4: RAILWAY.APP DEPLOYMENT

### Step 25: Railway Deployment Setup

**Create: railway.json**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build:all"
  },
  "deploy": {
    "startCommand": "npm run start:prod",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

**Create: package.json (root directory)**
```json
{
  "name": "michellealmonte.com",
  "version": "1.0.0",
  "description": "Michelle Almonte Image Consulting Website",
  "scripts": {
    "install:backend": "cd backend && npm install",
    "install:frontend": "cd frontend && npm install",
    "install:all": "npm run install:backend && npm run install:frontend",
    "build:backend": "cd backend && npm run build",
    "build:frontend": "cd frontend && npm run build",
    "build:all": "npm run build:backend && npm run build:frontend",
    "start:backend": "cd backend && npm start",
    "start:frontend": "cd frontend && npm start",
    "start:prod": "npm run start:backend",
    "dev:backend": "cd backend && npm run dev",
    "dev:frontend": "cd frontend && npm run dev",
    "test": "cd backend && npm test"
  },
  "keywords": ["image-consulting", "personal-styling", "nextjs", "express"],
  "author": "Randolfo Fermin",
  "license": "MIT"
}
```

**Create: backend/start.js (Production starter)**
```javascript
/**
 * @file: start.js
 * @path: backend/start.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Production server starter
 * @author: Randolfo Fermin
 * @module: Backend - Production Starter
 */

const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 5000;

/**
 * @function startProductionServer
 * @description Starts server in production mode
 */
const startProductionServer = async () => {
  try {
    // Test database connection
    console.log('🔍 Testing database connection...');
    const connection = await db.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();

    // Start server
    const server = app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Production server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('🛑 SIGTERM received. Shutting down gracefully...');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      console.log('🛑 SIGINT received. Shutting down gracefully...');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('❌ Failed to start production server:', error);
    process.exit(1);
  }
};

startProductionServer();

// End of File: start.js
```

**Update backend/package.json with production script:**
```json
{
  "scripts": {
    "start": "node start.js",
    "dev": "nodemon server.js",
    "build": "echo 'Backend build complete'",
    "test": "jest"
  }
}
```

### Step 26: Environment Configuration

**Create: .env.production (for Railway)**
```env
# Production Environment Variables
NODE_ENV=production

# Database Configuration (Railway will provide these)
DATABASE_URL=${DATABASE_URL}
DB_HOST=${DB_HOST}
DB_USER=${DB_USER}  
DB_PASSWORD=${DB_PASSWORD}
DB_NAME=${DB_NAME}

# JWT Configuration
JWT_SECRET=${JWT_SECRET}
JWT_EXPIRES_IN=24h

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=${EMAIL_USER}
EMAIL_PASS=${EMAIL_PASS}

# Server Configuration
PORT=${PORT}

# Railway Configuration
RAILWAY_ENVIRONMENT=production
```

**Update backend/config/database.js for Railway:**
```javascript
/**
 * @file: database.js (Updated for Railway)
 * @path: backend/config/database.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: MySQL database connection configuration for Railway
 * @author: Randolfo Fermin
 * @module: Backend - Database Configuration
 */

const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * @function createConnection
 * @description Creates MySQL database connection for Railway
 * 
 * @returns {Object} MySQL connection pool
 */
const createConnection = () => {
  // Railway provides DATABASE_URL, parse it if available
  if (process.env.DATABASE_URL) {
    return mysql.createPool(process.env.DATABASE_URL);
  }

  // Fallback to individual environment variables
  return mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'michellealmonte_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Railway-specific SSL configuration
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  });
};

const db = createConnection();

module.exports = db;

// End of File: database.js
```

### Step 27: Deployment Steps

**Step 27.1: Railway CLI Setup**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Link to Railway project (if already created)
railway link [PROJECT_ID]
```

**Step 27.2: Database Setup on Railway**
```bash
# Add MySQL database service
railway add --database mysql

# Get database connection info
railway variables

# Import database schema
railway run mysql -u root -p < backend/database/schema.sql
```

**Step 27.3: Environment Variables Setup**
```bash
# Set production environment variables
railway variables set NODE_ENV=production
railway variables set JWT_SECRET="your-super-secure-jwt-secret-key-here"
railway variables set EMAIL_USER="your-email@gmail.com"
railway variables set EMAIL_PASS="your-app-password"

# Railway will auto-set database variables
```

**Step 27.4: Deploy Application**
```bash
# Deploy to Railway
railway up

# Check deployment status
railway status

# View logs
railway logs
```

### Step 28: Frontend Production Build

**Update frontend/next.config.js for production:**
```javascript
/**
 * @file: next.config.js (Production)
 * @path: frontend/next.config.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Next.js production configuration
 * @author: Randolfo Fermin
 * @module: Frontend - Production Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['localhost', 'michellealmonte.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://your-railway-app.railway.app',
  },
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Output configuration for static hosting
  output: 'standalone',
  
  // Headers for security and performance
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
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

// End of File: next.config.js
```

---

## PHASE 5: PRODUCTION OPTIMIZATION & MONITORING

### Step 29: Performance Optimization

**Create: frontend/src/utils/analytics.js**
```javascript
/**
 * @file: analytics.js
 * @path: frontend/src/utils/analytics.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Google Analytics integration
 * @author: Randolfo Fermin
 * @module: Frontend - Analytics
 */

/**
 * @function gtag
 * @description Google Analytics gtag function
 */
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * @function trackContactFormSubmission
 * @description Tracks contact form submissions
 */
export const trackContactFormSubmission = () => {
  event({
    action: 'form_submit',
    category: 'Contact',
    label: 'Contact Form Submission',
  });
};

/**
 * @function trackNewsletterSignup
 * @description Tracks newsletter subscriptions
 */
export const trackNewsletterSignup = () => {
  event({
    action: 'newsletter_signup',
    category: 'Newsletter',
    label: 'Newsletter Subscription',
  });
};

// End of File: analytics.js
```

**Create: backend/utils/monitoring.js**
```javascript
/**
 * @file: monitoring.js
 * @path: backend/utils/monitoring.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Application monitoring and logging utilities
 * @author: Randolfo Fermin
 * @module: Backend - Monitoring
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * @function logError
 * @description Logs application errors
 * 
 * @param {Error} error - Error object
 * @param {Object} context - Additional context
 */
const logError = async (error, context = {}) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level: 'ERROR',
    message: error.message,
    stack: error.stack,
    context,
    environment: process.env.NODE_ENV,
  };

  // Log to console
  console.error('🚨 ERROR:', logEntry);

  // In production, you might want to send to external logging service
  if (process.env.NODE_ENV === 'production') {
    // TODO: Send to external logging service (e.g., LogRocket, Sentry)
  }
};

/**
 * @function logInfo
 * @description Logs information messages
 * 
 * @param {string} message - Log message
 * @param {Object} data - Additional data
 */
const logInfo = (message, data = {}) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level: 'INFO',
    message,
    data,
  };

  console.log('ℹ️ INFO:', logEntry);
};

/**
 * @function trackApiUsage
 * @description Tracks API endpoint usage
 * 
 * @param {string} endpoint - API endpoint
 * @param {string} method - HTTP method
 * @param {number} responseTime - Response time in ms
 * @param {number} statusCode - HTTP status code
 */
const trackApiUsage = (endpoint, method, responseTime, statusCode) => {
  const usage = {
    timestamp: new Date().toISOString(),
    endpoint,
    method,
    responseTime,
    statusCode,
  };

  // Log usage
  logInfo('API Usage', usage);

  // In production, send to analytics service
  if (process.env.NODE_ENV === 'production') {
    // TODO: Send to analytics service
  }
};

/**
 * @function healthCheck
 * @description Performs application health check
 * 
 * @returns {Object} Health status
 */
const healthCheck = async () => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV,
  };

  try {
    // Test database connection
    const db = require('../config/database');
    const connection = await db.getConnection();
    connection.release();
    health.database = 'connected';
  } catch (error) {
    health.status = 'unhealthy';
    health.database = 'disconnected';
    health.error = error.message;
  }

  return health;
};

module.exports = {
  logError,
  logInfo,
  trackApiUsage,
  healthCheck,
};

// End of File: monitoring.js
```

### Step 30: SEO Optimization

**Create: frontend/src/components/SEO.js**
```javascript
/**
 * @file: SEO.js
 * @path: frontend/src/components/SEO.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: SEO optimization component
 * @author: Randolfo Fermin
 * @module: Frontend - SEO Component
 */

import Head from 'next/head';
import { SEO_DEFAULTS } from '@/utils/constants';

/**
 * @function SEO
 * @description SEO meta tags component
 * 
 * @param {Object} props - SEO properties
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.image - Social sharing image
 * @param {string} props.url - Page URL
 * 
 * @returns {React.Component} SEO component
 */
const SEO = ({
  title = SEO_DEFAULTS.TITLE,
  description = SEO_DEFAULTS.DESCRIPTION,
  keywords = SEO_DEFAULTS.KEYWORDS,
  image = '/images/og-image.jpg',
  url = SEO_DEFAULTS.SITE_URL,
}) => {
  const fullTitle = title.includes('Michelle Almonte') 
    ? title 
    : `${title} | Michelle Almonte Image Consulting`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SEO_DEFAULTS.AUTHOR} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SEO_DEFAULTS.SITE_URL}${image}`} />
      <meta property="og:site_name" content="Michelle Almonte Image Consulting" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${SEO_DEFAULTS.SITE_URL}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#F9E4B7" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": `${SEO_DEFAULTS.SITE_URL}/#business`,
                "name": "Michelle Almonte Image Consulting",
                "description": description,
                "url": SEO_DEFAULTS.SITE_URL,
                "serviceType": "Image Consulting",
                "areaServed": {
                  "@type": "Place",
                  "name": "New York, NY"
                },
                "founder": {
                  "@type": "Person",
                  "@id": `${SEO_DEFAULTS.SITE_URL}/#person`,
                  "name": "Michelle Almonte"
                },
                "sameAs": [
                  "https://instagram.com/michellealmontemar",
                  "https://instagram.com/michelleamontem"
                ]
              },
              {
                "@type": "Person",
                "@id": `${SEO_DEFAULTS.SITE_URL}/#person`,
                "name": "Michelle Almonte",
                "jobTitle": "Image Consultant",
                "worksFor": {
                  "@id": `${SEO_DEFAULTS.SITE_URL}/#business`
                },
                "url": SEO_DEFAULTS.SITE_URL
              },
              {
                "@type": "WebSite",
                "@id": `${SEO_DEFAULTS.SITE_URL}/#website`,
                "url": SEO_DEFAULTS.SITE_URL,
                "name": "Michelle Almonte Image Consulting",
                "description": description,
                "publisher": {
                  "@id": `${SEO_DEFAULTS.SITE_URL}/#business`
                }
              }
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEO;

// End of File: SEO.js
```

### Step 31: Final Deployment Checklist

**Create: docs/deployment-checklist.md**
```markdown
# Deployment Checklist

## Pre-Deployment
- [ ] All environment variables configured
- [ ] Database schema deployed to production
- [ ] Email service credentials tested
- [ ] Domain DNS configured
- [ ] SSL certificate ready

## Railway.app Setup
- [ ] Railway project created
- [ ] MySQL database service added
- [ ] Environment variables set
- [ ] Build and start commands configured
- [ ] Health check endpoint working

## Backend Deployment
- [ ] API endpoints tested in production
- [ ] Database connection working
- [ ] Email notifications working
- [ ] Rate limiting configured
- [ ] Error logging active
- [ ] Health check returns 200

## Frontend Deployment
- [ ] Production build successful
- [ ] API integration working
- [ ] All forms functional
- [ ] Image optimization working
- [ ] SEO meta tags present
- [ ] Analytics tracking active

## Domain Configuration
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] HTTPS redirect working
- [ ] www redirect configured

## Performance Verification
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Mobile performance optimized
- [ ] Images compressed and optimized

## Security Check
- [ ] HTTPS enforced
- [ ] Security headers present
- [ ] Rate limiting active
- [ ] Input validation working
- [ ] SQL injection protection

## Monitoring Setup
- [ ] Error logging configured
- [ ] Analytics tracking active
- [ ] Uptime monitoring active
- [ ] Performance monitoring setup

## Post-Deployment
- [ ] All forms tested in production
- [ ] Email notifications verified
- [ ] Contact information updated
- [ ] Social media links working
- [ ] Search engine submission
- [ ] Backup procedures documented

## Client Handoff
- [ ] Admin access provided
- [ ] Documentation delivered
- [ ] Training session completed
- [ ] Support procedures established
- [ ] Maintenance schedule agreed
```

---

This completes the comprehensive development guide for Michelle Almonte's image consulting website. Your developer now has:

✅ **Complete Backend Implementation** - API endpoints, database, email services
✅ **Full Frontend Components** - Responsive React components with brand styling  
✅ **Integration Testing** - API and frontend testing procedures
✅ **Railway.app Deployment** - Production deployment configuration
✅ **Performance Optimization** - SEO, analytics, and monitoring setup

**Next Steps for Implementation:**
1. Set up development environment following Phase 1
2. Implement backend and test API endpoints  
3. Build frontend components with brand colors
4. Perform integration testing
5. Deploy to Railway.app with domain configuration
6. Optimize for performance and SEO

The guide includes all necessary code, configurations, and step-by-step instructions for a complete website deployment.