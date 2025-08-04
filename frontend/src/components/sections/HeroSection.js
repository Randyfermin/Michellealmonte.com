/**
 * @file: HeroSection.js
 * @path: frontend/src/components/sections/HeroSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Hero/landing section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import React from 'react';
import Image from 'next/image';
import { BUSINESS_INFO } from '../../utils/constants';

/**
 * @function HeroSection
 * @description Main hero section with call-to-action
 */
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-soft-ivory to-yellow-butter min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cocoa-brown mb-6 leading-tight">
              Transform Your Image,
              <span className="block text-soft-terracotta">Transform Your Life</span>
            </h1>
            
            <p className="text-lg md:text-xl text-cocoa-brown mb-8 leading-relaxed">
              {BUSINESS_INFO.DESCRIPTION}. Discover your authentic style and build confidence 
              that radiates from within.
            </p>

            {/* Key Benefits */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-cocoa-brown">Personal Color Analysis & Style Assessment</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-cocoa-brown">Professional Wardrobe Consulting</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-cocoa-brown">Virtual & In-Person Consultations</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-[#5C3A2E] text-white px-8 py-3 rounded-md font-medium hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200 shadow-lg border-2 border-[#5C3A2E]"
              >
                Book Free Consultation
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-[#5C3A2E] text-[#5C3A2E] px-8 py-3 rounded-md font-medium hover:bg-[#5C3A2E] hover:text-white transition-colors duration-200"
              >
                Explore Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-pearl-gray">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-terracotta">500+</div>
                  <div className="text-sm text-cocoa-brown">Clients Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-terracotta">5+ Years</div>
                  <div className="text-sm text-cocoa-brown">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-terracotta">98%</div>
                  <div className="text-sm text-cocoa-brown">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Professional Photo of Michelle */}
              <div className="bg-rose-dust rounded-lg shadow-2xl p-8 text-center">
                <div className="w-full h-96 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/michelle01.png"
                    alt="Professional Photo - Michelle Almonte, Image Consultant"
                    width={400}
                    height={384}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </div>
                <p className="text-cocoa-brown font-medium">
                  "Style is a way to say who you are without having to speak"
                </p>
                <p className="text-cocoa-brown text-sm mt-2">- Michelle Almonte</p>
              </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute top-4 left-4 w-32 h-32 bg-yellow-butter rounded-full opacity-20 -z-10"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-soft-terracotta rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// End of File: HeroSection.js
