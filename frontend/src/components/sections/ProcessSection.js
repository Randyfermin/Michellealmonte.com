/**
 * @file: ProcessSection.js
 * @path: frontend/src/components/sections/ProcessSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Process steps section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import React from 'react';
import { PROCESS_STEPS } from '../../utils/constants';

/**
 * @function ProcessSection
 * @description How it works process steps
 */
const ProcessSection = () => {
  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .float-animation-reverse {
          animation: floatReverse 3s ease-in-out infinite;
        }
        
        .float-delay-1 {
          animation-delay: 0.5s;
        }
        
        .float-delay-2 {
          animation-delay: 1s;
        }
        
        .float-delay-3 {
          animation-delay: 1.5s;
        }
        
        .float-delay-4 {
          animation-delay: 2s;
        }
      `}</style>

      <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cocoa-brown mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My proven 5-step process to transform your image and boost your confidence
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-butter via-soft-terracotta to-rose-dust"></div>

          <div className="space-y-8 lg:space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className={`${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-terracotta text-white rounded-full font-bold text-lg mb-4 lg:mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-cocoa-brown mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-64 bg-gradient-to-br from-[#D6A77A] to-[#5C3A2E] rounded-lg shadow-lg flex items-center justify-center text-white ${
                    index % 2 === 0 ? 'float-animation' : 'float-animation-reverse'
                  } float-delay-${index + 1}`}>
                    <div className="text-center">
                      <div className="text-3xl mb-3">
                        {step.step === 1 && '💬'}
                        {step.step === 2 && '🔍'}
                        {step.step === 3 && '📋'}
                        {step.step === 4 && '✨'}
                        {step.step === 5 && '🤝'}
                      </div>
                      <div className="text-lg font-medium">
                        Step {step.step}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-20 bg-soft-ivory rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-cocoa-brown mb-4">
              Typical Timeline
            </h3>
            <p className="text-gray-600">
              Most transformations are completed within this timeframe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-soft-terracotta mb-2">Week 1</div>
                <div className="text-sm text-gray-600">Initial Consultation & Analysis</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-soft-terracotta mb-2">Week 2</div>
                <div className="text-sm text-gray-600">Strategy Development & Planning</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-soft-terracotta mb-2">Week 3-4</div>
                <div className="text-sm text-gray-600">Implementation & Shopping</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-soft-terracotta mb-2">Ongoing</div>
                <div className="text-sm text-gray-600">Follow-up & Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* What You'll Receive */}
          <div className="bg-white border border-pearl-gray rounded-lg p-6">
            <h4 className="text-xl font-bold text-cocoa-brown mb-4">What You'll Receive</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Personalized style guide and color palette</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Detailed wardrobe recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Shopping list with specific items and brands</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Outfit formulas for different occasions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-soft-terracotta mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Ongoing support and follow-up sessions</span>
              </li>
            </ul>
          </div>

          {/* What You'll Experience */}
          <div className="bg-gradient-to-br from-yellow-butter to-soft-terracotta text-[#5C3A2E] rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">What You'll Experience</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Increased confidence in your appearance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Clarity on what works for your body and lifestyle</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Streamlined, organized wardrobe</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Time-saving morning routines</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Enhanced professional presence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProcessSection;

// End of File: ProcessSection.js
