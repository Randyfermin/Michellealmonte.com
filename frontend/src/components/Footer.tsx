/**
 * @file: Footer.tsx
 * @path: frontend/src/components/Footer.tsx
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Footer component with newsletter signup
 * @author: Randolfo Fermin
 * @module: Frontend - Components
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Form, Input, Button, message } from 'antd';
import { 
  MailOutlined, 
  InstagramOutlined, 
  FacebookOutlined,
  LinkedinOutlined,
  HeartOutlined,
  SendOutlined
} from '@ant-design/icons';
import { subscribeToNewsletter } from '../utils/api';
import { SOCIAL_LINKS } from '../utils/constants';

const Footer: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (values: { email: string }) => {
    setLoading(true);
    try {
      const response = await subscribeToNewsletter(values.email);
      
      if (response.success) {
        message.success('Thank you for subscribing! Check your email for a welcome message.');
        form.resetFields();
      } else {
        message.error(response.message || 'Subscription failed. Please try again.');
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      if (error.message?.includes('already subscribed')) {
        message.info('You\'re already subscribed to our newsletter!');
      } else {
        message.error(error.message || 'Failed to subscribe. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    { href: '#services', label: 'Personal Styling' },
    { href: '#services', label: 'Color Analysis' },
    { href: '#services', label: 'Wardrobe Audit' },
    { href: '#services', label: 'Virtual Consultation' },
  ];

  return (
    <footer className="bg-[#5C3A2E] text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#D6A77A] to-[#5C3A2E] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Style Tips & Inspiration
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Join our exclusive newsletter for weekly style tips, color analysis insights, 
              and confidence-building strategies delivered to your inbox.
            </p>
            
            <Form
              form={form}
              onFinish={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
                className="flex-1 mb-0"
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter your email address"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>
              
              <Form.Item className="mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  size="large"
                  className="rounded-lg bg-white text-[#5C3A2E] hover:bg-[#FAF8F5] border-white font-semibold px-8"
                  icon={<SendOutlined />}
                >
                  Subscribe
                </Button>
              </Form.Item>
            </Form>
            
            <p className="text-sm opacity-75 mt-4">
              ✨ No spam, just style. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-xl font-playfair font-bold text-[#F9E4B7]">
                Michelle Almonte
              </h4>
              <p className="text-sm opacity-80 leading-relaxed">
                Certified Image Consultant & Personal Stylist helping individuals 
                discover their authentic style and build unshakeable confidence.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D6A77A] rounded-full flex items-center justify-center text-white hover:bg-[#F9E4B7] hover:text-[#5C3A2E] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramOutlined />
                </a>
                <a
                  href={SOCIAL_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D6A77A] rounded-full flex items-center justify-center text-white hover:bg-[#F9E4B7] hover:text-[#5C3A2E] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookOutlined />
                </a>
                <a
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D6A77A] rounded-full flex items-center justify-center text-white hover:bg-[#F9E4B7] hover:text-[#5C3A2E] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinOutlined />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-[#F9E4B7] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-[#F9E4B7] transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-[#F9E4B7] mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-[#F9E4B7] transition-all duration-300"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-[#F9E4B7] mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MailOutlined className="text-[#D6A77A] mt-1" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <a 
                      href="mailto:hello@michellealmonte.com"
                      className="text-sm opacity-80 hover:opacity-100 hover:text-[#F9E4B7] transition-all duration-300"
                    >
                      hello@michellealmonte.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-[#D6A77A] mt-1">📍</div>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm opacity-80">New York, NY</div>
                  </div>
                </div>

                <div className="bg-[#D6A77A]/20 rounded-lg p-4 mt-6">
                  <div className="text-sm font-medium mb-2">Business Hours</div>
                  <div className="text-sm opacity-80">
                    <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                    <div>Sat: 10:00 AM - 4:00 PM</div>
                    <div>Sun: By Appointment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-sm opacity-80">
              © {currentYear} Michelle Almonte Image Consulting. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="opacity-80 hover:opacity-100 hover:text-[#F9E4B7] transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="opacity-80 hover:opacity-100 hover:text-[#F9E4B7] transition-all duration-300"
              >
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm opacity-80">
              <span>Made with</span>
              <HeartOutlined className="text-[#D6A77A]" />
              <span>in New York</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// End of File: Footer.tsx
