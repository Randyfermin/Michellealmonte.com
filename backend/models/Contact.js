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
