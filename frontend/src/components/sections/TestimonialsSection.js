/**
 * @file: TestimonialsSection.js
 * @path: frontend/src/components/sections/TestimonialsSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Client testimonials section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import React, { useState } from 'react';
import { TESTIMONIALS } from '../../utils/constants';

/**
 * @function TestimonialsSection
 * @description Client testimonials with carousel functionality
 */
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-soft-ivory to-yellow-butter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cocoa-brown mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have transformed their image and boosted their confidence
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12 relative">
          
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-soft-terracotta text-white p-2 rounded-full hover:bg-rose-dust transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-soft-terracotta text-white p-2 rounded-full hover:bg-rose-dust transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Quote Icon */}
            <div className="text-soft-terracotta mb-6">
              <svg className="h-12 w-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{TESTIMONIALS[currentTestimonial].text}"
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center mb-4">
              {renderStars(TESTIMONIALS[currentTestimonial].rating)}
            </div>

            {/* Client Info */}
            <div className="text-center">
              <div className="font-bold text-cocoa-brown text-lg">
                {TESTIMONIALS[currentTestimonial].name}
              </div>
              <div className="text-soft-terracotta">
                {TESTIMONIALS[currentTestimonial].title}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? 'bg-soft-terracotta' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-soft-terracotta mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-soft-terracotta mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-soft-terracotta mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-soft-terracotta mb-2">100+</div>
            <div className="text-gray-600">Transformations</div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-cocoa-brown text-center mb-8">
            More Client Love
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick testimonials */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex mb-3">
                {renderStars(5)}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Michelle helped me discover my personal style. I feel so much more confident now!"
              </p>
              <div className="text-sm">
                <div className="font-medium text-cocoa-brown">Jennifer L.</div>
                <div className="text-gray-500">Business Owner</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex mb-3">
                {renderStars(5)}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The color analysis was amazing! I finally know what colors make me look my best."
              </p>
              <div className="text-sm">
                <div className="font-medium text-cocoa-brown">Amanda K.</div>
                <div className="text-gray-500">Teacher</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex mb-3">
                {renderStars(5)}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Professional, knowledgeable, and genuinely caring. Michelle is the best!"
              </p>
              <div className="text-sm">
                <div className="font-medium text-cocoa-brown">Robert M.</div>
                <div className="text-gray-500">Financial Advisor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-cocoa-brown mb-4">
              Ready to Transform Your Image?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who have discovered their authentic style
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#5C3A2E] text-white px-8 py-3 rounded-md font-medium hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200 shadow-lg border-2 border-[#5C3A2E]"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// End of File: TestimonialsSection.js
