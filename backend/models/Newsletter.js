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
