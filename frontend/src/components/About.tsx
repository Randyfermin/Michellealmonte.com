/**
 * @file: About.tsx
 * @path: frontend/src/components/About.tsx
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: About section component
 * @author: Randolfo Fermin
 * @module: Frontend - Components
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleOutlined } from '@ant-design/icons';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const achievements = [
    'Certified Image Consultant & Personal Stylist',
    '500+ Successful Client Transformations',
    'Featured in Fashion & Lifestyle Publications',
    'Corporate Training & Workshop Specialist',
    'Color Analysis & Wardrobe Expert',
    'Personal Branding Strategist'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-[#5C3A2E] mb-6">
            About Michelle
          </h2>
          <p className="text-lg text-[#5C3A2E]/80 max-w-3xl mx-auto">
            Your journey to authentic style and unshakeable confidence starts here
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-[#F9E4B7] to-[#D6A77A] rounded-3xl overflow-hidden shadow-xl">
              {/* Placeholder for Michelle's professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#5C3A2E] text-center">
                  <div className="text-8xl mb-4">📸</div>
                  <div className="text-xl font-semibold">Professional Photo</div>
                  <div className="text-sm opacity-80">Michelle in Action</div>
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-white/30 rounded-2xl"></div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-[#5C3A2E] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl"
            >
              <div className="text-2xl font-bold">5+</div>
              <div className="text-xs text-center leading-tight">Years<br/>Experience</div>
            </motion.div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-[#5C3A2E]">
                Empowering Confidence Through Style
              </h3>
              
              <p className="text-[#5C3A2E] leading-relaxed">
                Hello! I'm Michelle Almonte, a certified image consultant and personal stylist 
                passionate about helping individuals discover their authentic style and build 
                unshakeable confidence.
              </p>

              <p className="text-[#5C3A2E] leading-relaxed">
                With over 5 years of experience in the fashion and image consulting industry, 
                I've had the privilege of transforming the lives of 500+ clients, helping them 
                develop a personal style that aligns with their goals, lifestyle, and authentic self.
              </p>

              <p className="text-[#5C3A2E] leading-relaxed">
                My approach goes beyond just putting together outfits – I focus on understanding 
                your unique personality, lifestyle needs, and goals to create a comprehensive 
                image strategy that enhances your confidence and supports your success.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-[#5C3A2E] mb-4">
                Credentials & Achievements
              </h4>
              
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircleOutlined className="text-[#D6A77A] text-lg flex-shrink-0" />
                  <span className="text-[#5C3A2E]">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <a href="#contact" className="btn-primary">
                Start Your Transformation
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#F9E4B7] to-[#FAF8F5] rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-[#5C3A2E] mb-6">
              My Mission
            </h3>
            <p className="text-lg text-[#5C3A2E] leading-relaxed italic">
              "To empower individuals to express their authentic selves through style, 
              building confidence that radiates from within and supports their personal 
              and professional success. Every person deserves to feel amazing in their own skin."
            </p>
            <div className="mt-6 text-[#D6A77A] text-xl font-playfair">
              — Michelle Almonte
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// End of File: About.tsx
