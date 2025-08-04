/**
 * @file: NewsletterForm.js
 * @path: frontend/src/components/forms/NewsletterForm.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Newsletter subscription form component
 * @author: Randolfo Fermin
 * @module: Frontend - Form Components
 */

import React, { useState } from 'react';
import { subscribeToNewsletter } from '../../utils/api';

/**
 * @function NewsletterForm
 * @description Newsletter subscription form with validation
 */
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      await subscribeToNewsletter(email);
      setMessage('Successfully subscribed! Check your email for confirmation.');
      setIsError(false);
      setEmail('');
    } catch (error) {
      setMessage(error.message || 'Failed to subscribe. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-butter focus:border-transparent text-gray-900"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-[#5C3A2E] text-white font-medium rounded-r-md hover:bg-[#D6A77A] hover:text-[#5C3A2E] focus:outline-none focus:ring-2 focus:ring-[#F9E4B7] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      
      {message && (
        <p className={`mt-2 text-sm ${isError ? 'text-red-300' : 'text-green-300'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;

// End of File: NewsletterForm.js
