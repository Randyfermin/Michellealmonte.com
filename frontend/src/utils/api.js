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
