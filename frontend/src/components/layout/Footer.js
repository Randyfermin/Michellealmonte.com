/**
 * @file: Footer.js
 * @path: frontend/src/components/layout/Footer.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Footer component with contact info and links
 * @author: Randolfo Fermin
 * @module: Frontend - Layout Components
 */

import React from 'react';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../../utils/constants';
import NewsletterForm from '../forms/NewsletterForm';

/**
 * @function Footer
 * @description Footer with business info, newsletter signup, and social links
 */
const Footer = () => {
  return (
    <footer className="bg-[#5C3A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{BUSINESS_INFO.NAME}</h3>
            <p className="text-gray-200 mb-4">{BUSINESS_INFO.DESCRIPTION}</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Email:</span> 
                <a href={`mailto:${BUSINESS_INFO.EMAIL}`} className="text-[#F9E4B7] hover:underline ml-1">
                  {BUSINESS_INFO.EMAIL}
                </a>
              </p>
              <p>
                <span className="font-medium">Hours:</span> 
                <span className="text-gray-200 ml-1">{BUSINESS_INFO.HOURS}</span>
              </p>
              <p>
                <span className="font-medium">Location:</span> 
                <span className="text-gray-200 ml-1">{BUSINESS_INFO.LOCATION}</span>
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-200 mb-4">
              Subscribe to receive style tips and updates from Michelle.
            </p>
            <NewsletterForm />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9E4B7] hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.292-1.317C4.365 14.847 3.9 13.709 3.9 12.465s.465-2.382 1.257-3.206c.844-.827 1.995-1.317 3.292-1.317s2.449.49 3.293 1.317c.792.824 1.257 1.962 1.257 3.206s-.465 2.382-1.257 3.206c-.844.827-1.996 1.317-3.293 1.317zm7.54 0c-1.297 0-2.449-.49-3.293-1.317-.792-.824-1.257-1.962-1.257-3.206s.465-2.382 1.257-3.206c.844-.827 1.996-1.317 3.293-1.317s2.448.49 3.292 1.317c.793.824 1.258 1.962 1.258 3.206s-.465 2.382-1.258 3.206c-.844.827-1.995 1.317-3.292 1.317z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9E4B7] hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9E4B7] hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            {/* Quick Links */}
            <div className="mt-6">
              <h4 className="text-md font-medium mb-2">Quick Links</h4>
              <div className="space-y-1 text-sm">
                <a href="#about" className="text-gray-200 hover:text-[#F9E4B7] block">About</a>
                <a href="#services" className="text-gray-200 hover:text-[#F9E4B7] block">Services</a>
                <a href="#process" className="text-gray-200 hover:text-[#F9E4B7] block">Process</a>
                <a href="#contact" className="text-gray-200 hover:text-[#F9E4B7] block">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.NAME}. All rights reserved.</p>
          <p className="mt-1">
            Designed & Developed by{' '}
            <span className="text-[#F9E4B7] font-medium">Randolfo Fermin</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// End of File: Footer.js
