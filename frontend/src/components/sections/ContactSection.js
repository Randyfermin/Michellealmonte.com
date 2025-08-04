/**
 * @file: ContactSection.js
 * @path: frontend/src/components/sections/ContactSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Contact form section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import React from 'react';
import ContactForm from '../forms/ContactForm';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../../utils/constants';

/**
 * @function ContactSection
 * @description Contact section with form and business information
 */
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cocoa-brown mb-4">
            Let's Transform Your Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discover your authentic style? Get in touch to schedule your consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <div className="bg-soft-ivory rounded-lg p-8">
              <h3 className="text-2xl font-bold text-cocoa-brown mb-6">
                Book Your Consultation
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Business Info */}
            <div>
              <h3 className="text-2xl font-bold text-cocoa-brown mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-soft-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-cocoa-brown">Email</p>
                    <a 
                      href={`mailto:${BUSINESS_INFO.EMAIL}`}
                      className="text-soft-terracotta hover:text-rose-dust transition-colors duration-200"
                    >
                      {BUSINESS_INFO.EMAIL}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-soft-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-cocoa-brown">Service Area</p>
                    <p className="text-gray-600">{BUSINESS_INFO.LOCATION}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-soft-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-cocoa-brown">Business Hours</p>
                    <p className="text-gray-600">{BUSINESS_INFO.HOURS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-yellow-butter to-soft-terracotta rounded-lg p-6 text-cocoa-brown">
              <h4 className="text-xl font-bold mb-4">What to Expect</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free 15-minute discovery call</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Customized service recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-cocoa-brown mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-soft-terracotta text-white p-3 rounded-full hover:bg-rose-dust transition-colors duration-200"
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
                  className="bg-soft-terracotta text-white p-3 rounded-full hover:bg-rose-dust transition-colors duration-200"
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
                  className="bg-soft-terracotta text-white p-3 rounded-full hover:bg-rose-dust transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Get daily style inspiration and tips on my social media channels
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-cocoa-brown mb-4">Quick Questions</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-cocoa-brown">How long is a typical consultation?</p>
                  <p className="text-gray-600 mt-1">Initial consultations are 60-90 minutes, depending on the service.</p>
                </div>
                <div>
                  <p className="font-medium text-cocoa-brown">Do you offer virtual consultations?</p>
                  <p className="text-gray-600 mt-1">Yes! I offer both virtual and in-person consultations to fit your schedule.</p>
                </div>
                <div>
                  <p className="font-medium text-cocoa-brown">What should I prepare for my consultation?</p>
                  <p className="text-gray-600 mt-1">Just bring an open mind! I'll guide you through everything during our session.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-terracotta to-rose-dust rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Style Journey?
            </h3>
            <p className="text-lg mb-6">
              Book your free discovery call today and take the first step toward your style transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${BUSINESS_INFO.EMAIL}?subject=Style Consultation Inquiry`}
                className="bg-[#5C3A2E] text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#5C3A2E] transition-colors duration-200 inline-block border-2 border-[#5C3A2E]"
              >
                Email Me Directly
              </a>
              <button
                onClick={() => {
                  const form = document.querySelector('#contact form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-[#5C3A2E] text-[#5C3A2E] px-8 py-3 rounded-md font-medium hover:bg-[#5C3A2E] hover:text-white transition-colors duration-200"
              >
                Fill Out Form Above
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// End of File: ContactSection.js
