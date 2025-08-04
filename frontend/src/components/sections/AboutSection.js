/**
 * @file: AboutSection.js
 * @path: frontend/src/components/sections/AboutSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: About Michelle section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import React from 'react';
import Image from 'next/image';

/**
 * @function AboutSection
 * @description About Michelle section with background and expertise
 */
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cocoa-brown mb-4">
            About Michelle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the passion and expertise behind transformative image consulting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Michelle's about photo */}
              <div className="bg-gradient-to-br from-yellow-butter to-soft-terracotta rounded-lg shadow-lg p-8">
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/michelle02.png"
                    alt="About Photo - Michelle Almonte in Action"
                    width={400}
                    height={320}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-butter rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-soft-terracotta rounded-full opacity-30"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="space-y-6">
              
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-semibold text-cocoa-brown mb-3">
                  Empowering Authentic Style
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With a rich Caribbean heritage and a background in design, I bring a unique perspective 
                  to image consulting that celebrates individuality while building confidence. My approach 
                  goes beyond fashion—it's about discovering and expressing your authentic self.
                </p>
              </div>

              {/* Professional Background */}
              <div>
                <h4 className="text-xl font-semibold text-cocoa-brown mb-3">
                  Professional Expertise
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Certified Personal Image Consultant</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Color Analysis Specialist</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Corporate Training Expert</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>5+ Years Transforming Lives</span>
                  </li>
                </ul>
              </div>

              {/* Philosophy */}
              <div>
                <h4 className="text-xl font-semibold text-cocoa-brown mb-3">
                  My Philosophy
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  I believe that true style comes from within. My role is to help you discover 
                  and express your authentic self through thoughtful styling choices that enhance 
                  your natural beauty and boost your confidence.
                </p>
              </div>

              {/* Personal Touch */}
              <div className="bg-soft-ivory p-6 rounded-lg">
                <blockquote className="text-cocoa-brown italic text-lg leading-relaxed">
                  "When you look good, you feel good. When you feel good, you can conquer the world. 
                  Let me help you find that confidence through authentic, purposeful style."
                </blockquote>
                <cite className="text-soft-terracotta font-medium block mt-3">— Michelle Almonte</cite>
              </div>

              {/* Credentials & Certifications */}
              <div>
                <h4 className="text-xl font-semibold text-cocoa-brown mb-3">
                  Education & Certifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-cocoa-brown">Design Degree</div>
                    <div>Caribbean Design Institute</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-cocoa-brown">Image Consultant Certification</div>
                    <div>International Image Institute</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-cocoa-brown">Color Analysis Certification</div>
                    <div>Color Me Beautiful</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-cocoa-brown">Corporate Training</div>
                    <div>Professional Development Institute</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// End of File: AboutSection.js
