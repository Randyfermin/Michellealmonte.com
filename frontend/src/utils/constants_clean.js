/**
 * @file: constants.js
 * @path: frontend/src/utils/constants.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Application constants and configuration
 * @author: Randolfo Fermin
 * @module: Frontend - Constants
 */

// Brand Colors
export const COLORS = {
  SOFT_IVORY: '#FAF8F5',
  YELLOW_BUTTER: '#F9E4B7',
  SOFT_TERRACOTTA: '#D6A77A',
  ROSE_DUST: '#D4A5A5',
  COCOA_BROWN: '#5C3A2E',
  PEARL_GRAY: '#C9C9C9',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

// Service Options
export const SERVICE_OPTIONS = [
  { value: 'personal_styling', label: 'Personal Styling & Analysis' },
  { value: 'wardrobe_audit', label: 'Wardrobe Audit & Organization' },
  { value: 'color_analysis', label: 'Color Analysis & Consultation' },
  { value: 'virtual_consultation', label: 'Virtual Styling Session' },
  { value: 'corporate_training', label: 'Corporate Image Training' },
  { value: 'special_events', label: 'Special Event Styling' },
];

// Consultation Types
export const CONSULTATION_OPTIONS = [
  { value: 'virtual', label: 'Virtual Consultation (Online)' },
  { value: 'in_person', label: 'In-Person Consultation' },
];

// Budget Ranges
export const BUDGET_OPTIONS = [
  { value: 'under_500', label: 'Under $500' },
  { value: '500_1000', label: '$500 - $1,000' },
  { value: '1000_2500', label: '$1,000 - $2,500' },
  { value: '2500_plus', label: '$2,500+' },
];

// Social Media Links
export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://instagram.com/michellealmonte',
  FACEBOOK: 'https://facebook.com/michellealmonte',
  LINKEDIN: 'https://linkedin.com/in/michellealmonte',
  EMAIL: 'michelle@michellealmonte.com',
  PHONE: '+1-XXX-XXX-XXXX' // To be updated with actual phone
};

// Business Information
export const BUSINESS_INFO = {
  NAME: 'Michelle Almonte Image Consulting',
  TAGLINE: 'Transform Your Image, Transform Your Life',
  DESCRIPTION: 'Professional Image Consulting & Personal Styling Services',
  EMAIL: 'michelle@michellealmonte.com',
  LOCATION: 'Available Virtually & In-Person', // To be updated
  HOURS: 'Monday - Friday: 9AM - 6PM, Saturday: 10AM - 4PM'
};

// Navigation Links
export const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

// Testimonials (placeholder data)
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Marketing Executive',
    text: 'Michelle transformed not just my wardrobe, but my confidence. I feel powerful and authentic in every outfit.',
    rating: 5
  },
  {
    id: 2, 
    name: 'David Chen',
    title: 'Entrepreneur',
    text: 'The color analysis was a game-changer. I now understand what works for me and my personal brand.',
    rating: 5
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    title: 'Attorney',
    text: 'Professional, knowledgeable, and genuinely caring. Michelle understood my style goals perfectly.',
    rating: 5
  }
];

// Process Steps
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We discuss your style goals, lifestyle, and personal preferences'
  },
  {
    step: 2,
    title: 'Analysis & Assessment', 
    description: 'Color analysis, body type assessment, and style personality evaluation'
  },
  {
    step: 3,
    title: 'Strategy Development',
    description: 'Create a personalized style roadmap tailored to your needs'
  },
  {
    step: 4,
    title: 'Implementation',
    description: 'Shopping assistance, wardrobe organization, and styling sessions'
  },
  {
    step: 5,
    title: 'Ongoing Support',
    description: 'Follow-up consultations and continued style guidance'
  }
];

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  MESSAGE_TOO_LONG: 'Message must be under 1000 characters',
  NAME_TOO_SHORT: 'Name must be at least 2 characters',
  NAME_TOO_LONG: 'Name must be under 100 characters'
};

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER_SUBSCRIBE: '/api/newsletter/subscribe',
  NEWSLETTER_UNSUBSCRIBE: '/api/newsletter/unsubscribe',
  HEALTH: '/health',
};

// Form Validation Rules
export const VALIDATION_RULES = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  PHONE: {
    PATTERN: /^[\d\s\-\+\(\)]+$/,
    MIN_LENGTH: 10,
    MAX_LENGTH: 20,
  },
  MESSAGE: {
    MAX_LENGTH: 1000,
  },
};

// Animation Settings
export const ANIMATION_SETTINGS = {
  SCROLL_OFFSET: 100,
  TRANSITION_DURATION: 0.6,
  STAGGER_DELAY: 0.1,
};

// SEO Meta Data
export const SEO_DEFAULTS = {
  TITLE: 'Michelle Almonte - Professional Image Consultant & Personal Stylist',
  DESCRIPTION: 'Transform your personal image with professional styling, color analysis, and wardrobe consulting. Boost your confidence with expert image coaching services.',
  KEYWORDS: 'image consultant, personal stylist, color analysis, wardrobe consulting, professional styling, confidence coaching',
  AUTHOR: 'Michelle Almonte',
  SITE_URL: 'https://www.michellealmonte.com',
};

// End of File: constants.js
