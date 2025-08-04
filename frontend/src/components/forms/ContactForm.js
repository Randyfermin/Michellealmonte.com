/**
 * @file: ContactForm.js
 * @path: frontend/src/components/forms/ContactForm.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Contact form component with validation
 * @author: Randolfo Fermin
 * @module: Frontend - Form Components
 */

import React, { useState } from 'react';
import { submitContactForm } from '../../utils/api';
import { 
  SERVICE_OPTIONS, 
  CONSULTATION_OPTIONS, 
  BUDGET_OPTIONS,
  VALIDATION_MESSAGES 
} from '../../utils/constants';

/**
 * @function ContactForm
 * @description Contact form with comprehensive validation
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_interest: '',
    consultation_type: '',
    budget_range: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitError, setIsSubmitError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = VALIDATION_MESSAGES.REQUIRED_FIELD;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = VALIDATION_MESSAGES.NAME_TOO_SHORT;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = VALIDATION_MESSAGES.REQUIRED_FIELD;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = VALIDATION_MESSAGES.INVALID_EMAIL;
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = VALIDATION_MESSAGES.INVALID_PHONE;
    }

    // Required field validations
    if (!formData.service_interest) {
      newErrors.service_interest = VALIDATION_MESSAGES.REQUIRED_FIELD;
    }
    
    if (!formData.consultation_type) {
      newErrors.consultation_type = VALIDATION_MESSAGES.REQUIRED_FIELD;
    }
    
    if (!formData.budget_range) {
      newErrors.budget_range = VALIDATION_MESSAGES.REQUIRED_FIELD;
    }

    // Message length validation
    if (formData.message && formData.message.length > 1000) {
      newErrors.message = VALIDATION_MESSAGES.MESSAGE_TOO_LONG;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setSubmitMessage('');
    setIsSubmitError(false);

    try {
      await submitContactForm(formData);
      setSubmitMessage('Thank you! Your message has been sent. Michelle will get back to you within 24 hours.');
      setIsSubmitError(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_interest: '',
        consultation_type: '',
        budget_range: '',
        message: ''
      });
      setErrors({});
      
    } catch (error) {
      setSubmitMessage(error.message || 'Failed to send message. Please try again.');
      setIsSubmitError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-cocoa-brown mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-butter ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cocoa-brown mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-butter ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-cocoa-brown mb-1">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-butter ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        {/* Service Interest and Consultation Type Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service_interest" className="block text-sm font-medium text-cocoa-brown mb-1">
              Service Interest *
            </label>
            <select
              id="service_interest"
              name="service_interest"
              value={formData.service_interest}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-butter ${
                errors.service_interest ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service_interest && <p className="mt-1 text-sm text-red-600">{errors.service_interest}</p>}
          </div>
          
          <div>
            <label htmlFor="consultation_type" className="block text-sm font-medium text-cocoa-brown mb-1">
              Consultation Type *
            </label>
            <select
              id="consultation_type"
              name="consultation_type"
              value={formData.consultation_type}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-butter ${
                errors.consultation_type ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select consultation type</option>
              {CONSULTATION_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.consultation_type && <p className="mt-1 text-sm text-red-600">{errors.consultation_type}</p>}
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget_range" className="block text-sm font-medium text-cocoa-brown mb-1">
            Budget Range *
          </label>
          <select
            id="budget_range"
            name="budget_range"
            value={formData.budget_range}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-butter ${
              errors.budget_range ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select budget range</option>
            {BUDGET_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.budget_range && <p className="mt-1 text-sm text-red-600">{errors.budget_range}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cocoa-brown mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-butter ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell me about your style goals and what you'd like to achieve..."
          />
          <p className="mt-1 text-sm text-gray-500">
            {formData.message.length}/1000 characters
          </p>
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#5C3A2E] text-white py-3 px-4 rounded-md font-medium hover:bg-[#D6A77A] hover:text-[#5C3A2E] focus:outline-none focus:ring-2 focus:ring-[#5C3A2E] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? 'Sending Message...' : 'Send Message'}
          </button>
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <div className={`p-4 rounded-md ${isSubmitError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

// End of File: ContactForm.js
