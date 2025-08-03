/**
 * @file: Hero.tsx
 * @path: frontend/src/components/Hero.tsx
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Hero section component
 * @author: Randolfo Fermin
 * @module: Frontend - Components
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownOutlined } from '@ant-design/icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-[#FAF8F5] via-[#F9E4B7] to-[#D6A77A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#5C3A2E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A5A5] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-[#5C3A2E] mb-6 leading-tight"
            >
              Transform Your
              <span className="text-[#D6A77A] block">Personal Image</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#5C3A2E] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Unlock your confidence with professional image consulting, personal styling, 
              and color analysis. Let's create a wardrobe that reflects your authentic self 
              and empowers your success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
              </Link>
              <Link href="#services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5C3A2E]">500+</div>
                <div className="text-sm text-[#5C3A2E]/70">Clients Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5C3A2E]">5+</div>
                <div className="text-sm text-[#5C3A2E]/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5C3A2E]">100%</div>
                <div className="text-sm text-[#5C3A2E]/70">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#D6A77A] to-[#5C3A2E] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for Michelle's photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">👩‍💼</div>
                  <div className="text-xl font-semibold">Michelle Almonte</div>
                  <div className="text-sm opacity-90">Professional Image Consultant</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-[#F9E4B7] rounded-full opacity-30"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-[#FAF8F5] rounded-full opacity-40"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-[#F9E4B7] rounded-full shadow-lg flex items-center justify-center"
            >
              <span className="text-2xl">✨</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#D4A5A5] rounded-full shadow-lg flex items-center justify-center"
            >
              <span className="text-xl">💫</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-[#5C3A2E]"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDownOutlined className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// End of File: Hero.tsx
