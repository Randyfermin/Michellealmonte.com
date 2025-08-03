/**
 * @file: ContactForm.tsx
 * @path: frontend/src/components/ContactForm.tsx
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Contact form component with validation
 * @author: Randolfo Fermin
 * @module: Frontend - Components
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Form, Input, Select, Button, message, Row, Col } from 'antd';
import { 
  UserOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  MessageOutlined,
  LoadingOutlined 
} from '@ant-design/icons';
import { submitContactForm } from '../utils/api';
import { SERVICE_OPTIONS, CONSULTATION_TYPES, BUDGET_RANGES } from '../utils/constants';

const { TextArea } = Input;
const { Option } = Select;

interface FormData {
  name: string;
  email: string;
  phone?: string;
  service_interest: string;
  consultation_type: string;
  budget_range: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleSubmit = async (values: FormData) => {
    setLoading(true);
    try {
      const response = await submitContactForm(values);
      
      if (response.success) {
        message.success('Thank you! Your consultation request has been submitted successfully. I\'ll get back to you within 24 hours.');
        form.resetFields();
      } else {
        message.error(response.message || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      message.error(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-[#5C3A2E] mb-6">
            Start Your Style Journey
          </h2>
          <p className="text-lg text-[#5C3A2E]/80 max-w-3xl mx-auto">
            Ready to transform your image and boost your confidence? Let's discuss your goals 
            and create a personalized styling plan just for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-[#5C3A2E] mb-6">
                Let's Connect
              </h3>
              <p className="text-[#5C3A2E] mb-8 leading-relaxed">
                I'm excited to learn about your style goals and help you create a wardrobe 
                that makes you feel confident and authentic. Fill out the form or reach out directly.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F9E4B7] rounded-full flex items-center justify-center">
                  <MailOutlined className="text-[#5C3A2E] text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-[#5C3A2E]">Email</div>
                  <div className="text-[#5C3A2E]/80">hello@michellealmonte.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F9E4B7] rounded-full flex items-center justify-center">
                  <PhoneOutlined className="text-[#5C3A2E] text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-[#5C3A2E]">Phone</div>
                  <div className="text-[#5C3A2E]/80">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F9E4B7] rounded-full flex items-center justify-center">
                  <UserOutlined className="text-[#5C3A2E] text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-[#5C3A2E]">Location</div>
                  <div className="text-[#5C3A2E]/80">New York, NY</div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6">
              <h4 className="font-semibold text-[#5C3A2E] mb-4">What Happens Next?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D6A77A] text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">1</div>
                  <span className="text-[#5C3A2E]">I'll review your submission within 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D6A77A] text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">2</div>
                  <span className="text-[#5C3A2E]">Schedule a complimentary 15-minute consultation call</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D6A77A] text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">3</div>
                  <span className="text-[#5C3A2E]">Discuss your goals and create a personalized plan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D6A77A] text-white rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">4</div>
                  <span className="text-[#5C3A2E]">Begin your style transformation journey!</span>
                </li>
              </ul>
            </div>

            {/* Social Proof */}
            <div className="text-center bg-gradient-to-r from-[#F9E4B7] to-[#D6A77A] rounded-2xl p-6">
              <div className="text-2xl font-bold text-[#5C3A2E] mb-2">500+</div>
              <div className="text-[#5C3A2E] font-semibold">Happy Clients Transformed</div>
              <div className="text-sm text-[#5C3A2E]/80 mt-2">Join the style revolution!</div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#FAF8F5] rounded-3xl p-8 shadow-lg"
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="space-y-6"
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    label={<span className="text-[#5C3A2E] font-semibold">Full Name</span>}
                    rules={[
                      { required: true, message: 'Please enter your name' },
                      { min: 2, message: 'Name must be at least 2 characters' }
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="text-[#D6A77A]" />}
                      placeholder="Your full name"
                      size="large"
                      className="rounded-lg"
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    label={<span className="text-[#5C3A2E] font-semibold">Email Address</span>}
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined className="text-[#D6A77A]" />}
                      placeholder="your.email@example.com"
                      size="large"
                      className="rounded-lg"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="phone"
                label={<span className="text-[#5C3A2E] font-semibold">Phone Number (Optional)</span>}
              >
                <Input
                  prefix={<PhoneOutlined className="text-[#D6A77A]" />}
                  placeholder="(555) 123-4567"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="service_interest"
                    label={<span className="text-[#5C3A2E] font-semibold">Service Interest</span>}
                    rules={[{ required: true, message: 'Please select a service' }]}
                  >
                    <Select
                      placeholder="Choose a service"
                      size="large"
                      className="rounded-lg"
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="consultation_type"
                    label={<span className="text-[#5C3A2E] font-semibold">Consultation Type</span>}
                    rules={[{ required: true, message: 'Please select consultation type' }]}
                  >
                    <Select
                      placeholder="Virtual or In-Person"
                      size="large"
                      className="rounded-lg"
                    >
                      {CONSULTATION_TYPES.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="budget_range"
                label={<span className="text-[#5C3A2E] font-semibold">Budget Range</span>}
                rules={[{ required: true, message: 'Please select your budget range' }]}
              >
                <Select
                  placeholder="Select your budget range"
                  size="large"
                  className="rounded-lg"
                >
                  {BUDGET_RANGES.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="message"
                label={<span className="text-[#5C3A2E] font-semibold">Tell Me About Your Goals (Optional)</span>}
              >
                <TextArea
                  placeholder="Share your style goals, challenges, or any specific questions you have..."
                  rows={4}
                  maxLength={1000}
                  showCount
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  size="large"
                  className="w-full h-12 rounded-lg bg-[#D6A77A] border-[#D6A77A] hover:bg-[#5C3A2E] hover:border-[#5C3A2E] font-semibold text-lg"
                  icon={loading ? <LoadingOutlined /> : <MessageOutlined />}
                >
                  {loading ? 'Sending...' : 'Request Consultation'}
                </Button>
              </Form.Item>

              <div className="text-center text-sm text-[#5C3A2E]/70 mt-4">
                <p>✨ Free 15-minute consultation call included</p>
                <p>🔒 Your information is kept completely confidential</p>
              </div>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

// End of File: ContactForm.tsx
