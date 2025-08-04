/**
 * @file: ServicesSection.js
 * @path: frontend/src/components/sections/ServicesSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Services offered section component
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import React from 'react';

/**
 * @function ServicesSection
 * @description Services offered with detailed descriptions
 */
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Personal Style Analysis',
      description: 'Discover your unique style personality through comprehensive analysis of your lifestyle, preferences, and goals.',
      features: ['Color Analysis', 'Body Type Assessment', 'Style Personality Quiz', 'Personal Style Guide'],
      price: 'Starting at $300',
      icon: '👗'
    },
    {
      id: 2,
      title: 'Wardrobe Audit & Organization',
      description: 'Transform your closet into a functional, cohesive wardrobe that works for your lifestyle and budget.',
      features: ['Closet Purge', 'Outfit Creation', 'Shopping List', 'Organization Systems'],
      price: 'Starting at $400',
      icon: '👔'
    },
    {
      id: 3,
      title: 'Virtual Styling Sessions',
      description: 'Get professional styling advice from the comfort of your home through our virtual consultation platform.',
      features: ['Video Consultation', 'Digital Lookbook', 'Shopping Links', 'Follow-up Support'],
      price: 'Starting at $200',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Corporate Image Training',
      description: 'Elevate your professional presence with tailored styling for business success and leadership.',
      features: ['Executive Presence', 'Business Wardrobe', 'Presentation Skills', 'Team Workshops'],
      price: 'Starting at $500',
      icon: '💼'
    },
    {
      id: 5,
      title: 'Special Event Styling',
      description: 'Look stunning and feel confident for your most important occasions with personalized styling.',
      features: ['Event Planning', 'Outfit Selection', 'Accessory Coordination', 'Final Fitting'],
      price: 'Starting at $350',
      icon: '✨'
    },
    {
      id: 6,
      title: 'Shopping Assistance',
      description: 'Maximize your shopping efficiency with expert guidance on investment pieces and wardrobe essentials.',
      features: ['Personal Shopping', 'Budget Planning', 'Brand Recommendations', 'Styling Tips'],
      price: 'Starting at $250',
      icon: '🛍️'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-soft-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cocoa-brown mb-4">
            Services Offered
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive image consulting services tailored to your unique needs and goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              
              {/* Service Header */}
              <div className="bg-gradient-to-r from-yellow-butter to-soft-terracotta p-6 text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-cocoa-brown mb-2">{service.title}</h3>
                <div className="text-sm font-medium text-cocoa-brown bg-white bg-opacity-80 rounded-full px-3 py-1 inline-block">
                  {service.price}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-soft-terracotta mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full bg-[#5C3A2E] text-white py-2 px-4 rounded-md hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200 font-medium"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Package Options */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-cocoa-brown mb-4">
              Complete Transformation Packages
            </h3>
            <p className="text-gray-700">
              Save with our comprehensive packages designed for complete style transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Essential Package */}
            <div className="text-center border border-pearl-gray rounded-lg p-6 h-full flex flex-col">
              <h4 className="text-xl font-bold text-cocoa-brown mb-2">Essential</h4>
              <div className="text-3xl font-bold text-soft-terracotta mb-4">$599</div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6 flex-grow">
                <li>Personal Style Analysis</li>
                <li>Color Consultation</li>
                <li>Basic Wardrobe Audit</li>
                <li>Style Guide</li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full bg-[#5C3A2E] text-white py-2 px-4 rounded-md hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200 font-medium mt-auto"
              >
                Get Started
              </button>
            </div>

            {/* Professional Package */}
            <div className="text-center border-2 border-soft-terracotta rounded-lg p-6 relative h-full flex flex-col">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#5C3A2E] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h4 className="text-xl font-bold text-cocoa-brown mb-2 mt-2">Professional</h4>
              <div className="text-3xl font-bold text-soft-terracotta mb-4">$999</div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6 flex-grow">
                <li>Everything in Essential</li>
                <li>Complete Wardrobe Audit</li>
                <li>Personal Shopping Session</li>
                <li>Virtual Follow-up</li>
                <li>3-Month Support</li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full bg-[#5C3A2E] text-white py-2 px-4 rounded-md hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200 font-medium mt-auto"
              >
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="text-center border border-pearl-gray rounded-lg p-6 h-full flex flex-col">
              <h4 className="text-xl font-bold text-cocoa-brown mb-2">Premium</h4>
              <div className="text-3xl font-bold text-soft-terracotta mb-4">$1,499</div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6 flex-grow">
                <li>Everything in Professional</li>
                <li>Corporate Training</li>
                <li>Event Styling</li>
                <li>6-Month Support</li>
                <li>Priority Booking</li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full bg-[#5C3A2E] text-white py-2 px-4 rounded-md hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200 font-medium mt-auto"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-700 mb-4">
              All packages include initial consultation and personalized style recommendations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>✓ Satisfaction Guarantee</span>
              <span>✓ Flexible Scheduling</span>
              <span>✓ Virtual & In-Person Options</span>
              <span>✓ Payment Plans Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// End of File: ServicesSection.js
