/**
 * @file: Services.tsx
 * @path: frontend/src/components/Services.tsx
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Services section component
 * @author: Randolfo Fermin
 * @module: Frontend - Components
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserOutlined, 
  EyeOutlined, 
  ShoppingOutlined, 
  VideoCameraOutlined, 
  TeamOutlined, 
  CrownOutlined 
} from '@ant-design/icons';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <UserOutlined className="text-3xl" />,
      title: 'Personal Styling & Analysis',
      description: 'Complete style transformation including color analysis, body type assessment, and personal style development.',
      features: ['Color Season Analysis', 'Body Type Assessment', 'Style Personality Quiz', 'Personal Style Guide'],
      price: 'Starting at $299',
      popular: false,
    },
    {
      icon: <ShoppingOutlined className="text-3xl" />,
      title: 'Wardrobe Audit & Organization',
      description: 'Comprehensive closet evaluation and reorganization to maximize your existing pieces and identify gaps.',
      features: ['Complete Closet Audit', 'Wardrobe Organization', 'Outfit Creation', 'Shopping Recommendations'],
      price: 'Starting at $399',
      popular: true,
    },
    {
      icon: <EyeOutlined className="text-3xl" />,
      title: 'Color Analysis & Consultation',
      description: 'Discover your perfect color palette to enhance your natural beauty and boost your confidence.',
      features: ['Seasonal Color Analysis', 'Color Palette Guide', 'Makeup Recommendations', 'Wardrobe Color Strategy'],
      price: 'Starting at $199',
      popular: false,
    },
    {
      icon: <VideoCameraOutlined className="text-3xl" />,
      title: 'Virtual Styling Session',
      description: 'Convenient online styling sessions perfect for busy schedules or long-distance clients.',
      features: ['Video Consultation', 'Digital Style Guide', 'Shopping Links', '30-Day Follow-up'],
      price: 'Starting at $249',
      popular: false,
    },
    {
      icon: <TeamOutlined className="text-3xl" />,
      title: 'Corporate Image Training',
      description: 'Professional development workshops for teams and executives to enhance workplace presence.',
      features: ['Group Workshops', 'Executive Coaching', 'Dress Code Guidelines', 'Professional Wardrobe Planning'],
      price: 'Custom Pricing',
      popular: false,
    },
    {
      icon: <CrownOutlined className="text-3xl" />,
      title: 'Special Event Styling',
      description: 'Perfect styling for weddings, galas, photoshoots, and other important occasions.',
      features: ['Event-Specific Styling', 'Personal Shopping', 'Accessories Selection', 'Day-of Assistance'],
      price: 'Starting at $349',
      popular: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#FAF8F5]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-[#5C3A2E] mb-6">
            Transform Your Style
          </h2>
          <p className="text-lg text-[#5C3A2E]/80 max-w-3xl mx-auto">
            Comprehensive image consulting services tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-[#D6A77A]' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#D6A77A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#F9E4B7] to-[#D6A77A] rounded-full flex items-center justify-center text-[#5C3A2E] mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-playfair font-semibold text-[#5C3A2E] mb-4">
                {service.title}
              </h3>

              <p className="text-[#5C3A2E]/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-[#5C3A2E]">
                    <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-lg font-semibold text-[#D6A77A] mb-6">
                {service.price}
              </div>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  service.popular
                    ? 'bg-[#D6A77A] text-white hover:bg-[#5C3A2E]'
                    : 'bg-[#F9E4B7] text-[#5C3A2E] hover:bg-[#D6A77A] hover:text-white'
                }`}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Consultation
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#D6A77A] to-[#5C3A2E] rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-playfair font-semibold mb-6">
              Not Sure Which Service Is Right for You?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book a complimentary 15-minute consultation call to discuss your needs 
              and discover the perfect styling solution for your goals.
            </p>
            <button 
              className="bg-white text-[#5C3A2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#FAF8F5] transition-colors duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>

        {/* Service Packages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-playfair font-semibold text-[#5C3A2E] text-center mb-8">
            Complete Transformation Packages
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F9E4B7]">
              <h4 className="text-xl font-semibold text-[#5C3A2E] mb-4">Style Starter Package</h4>
              <p className="text-[#5C3A2E]/80 mb-4">Perfect for beginners looking to discover their style</p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3"></div>
                  Color Analysis Session
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3"></div>
                  Personal Style Consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3"></div>
                  Basic Wardrobe Assessment
                </li>
              </ul>
              <div className="text-lg font-semibold text-[#D6A77A]">$499 (Save $99)</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D6A77A] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#D6A77A] text-white px-4 py-1 rounded-full text-sm">Best Value</div>
              </div>
              <h4 className="text-xl font-semibold text-[#5C3A2E] mb-4">Complete Transformation</h4>
              <p className="text-[#5C3A2E]/80 mb-4">Comprehensive styling for total image transformation</p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3"></div>
                  Everything in Style Starter
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3"></div>
                  Complete Wardrobe Audit
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3"></div>
                  Personal Shopping Session
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D6A77A] rounded-full mr-3"></div>
                  3-Month Follow-up Support
                </li>
              </ul>
              <div className="text-lg font-semibold text-[#D6A77A]">$899 (Save $299)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

// End of File: Services.tsx
