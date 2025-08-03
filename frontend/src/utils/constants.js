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
export const CONSULTATION_TYPES = [
  { value: 'virtual', label: 'Virtual Consultation (Online)' },
  { value: 'in_person', label: 'In-Person Consultation' },
];

// Budget Ranges
export const BUDGET_RANGES = [
  { value: 'under_500', label: 'Under $500' },
  { value: '500_1000', label: '$500 - $1,000' },
  { value: '1000_2500', label: '$1,000 - $2,500' },
  { value: '2500_plus', label: '$2,500+' },
];

// Social Media Links
export const SOCIAL_LINKS = {
  INSTAGRAM_MAIN: 'https://instagram.com/michellealmontemar',
  INSTAGRAM_SECONDARY: 'https://instagram.com/michelleamontem',
  LINKEDIN: 'https://www.linkedin.com/in/altagracia-almonte-michelle-326403166',
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'hello@michellealmonte.com',
  PHONE: '+1 (555) 123-4567', // Update with real number
  LOCATION: 'New York, NY',
};

// SEO Meta Data
export const SEO_DEFAULTS = {
  TITLE: 'Michelle Almonte - Professional Image Consultant & Personal Stylist',
  DESCRIPTION: 'Transform your personal image with professional styling, color analysis, and wardrobe consulting. Boost your confidence with expert image coaching services.',
  KEYWORDS: 'image consultant, personal stylist, color analysis, wardrobe consulting, professional styling, confidence coaching',
  AUTHOR: 'Michelle Almonte',
  SITE_URL: 'https://www.michellealmonte.com',
};

// Animation Settings
export const ANIMATION_SETTINGS = {
  SCROLL_OFFSET: 100,
  TRANSITION_DURATION: 0.6,
  STAGGER_DELAY: 0.1,
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

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER_SUBSCRIBE: '/api/newsletter/subscribe',
  NEWSLETTER_UNSUBSCRIBE: '/api/newsletter/unsubscribe',
  HEALTH: '/health',
};

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Executive',
    content: 'Michelle transformed not just my wardrobe, but my entire confidence. The color analysis was eye-opening, and now I know exactly what works for me.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Business Owner',
    content: 'As an entrepreneur, first impressions matter. Michelle helped me develop a professional image that truly represents my brand and values.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Attorney',
    content: 'The virtual consultation was incredibly thorough. Michelle provided practical advice that I could implement immediately. Highly recommend!',
    rating: 5,
  },
];

// Process Steps
export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'We discuss your goals, lifestyle, and style preferences to understand your unique needs.',
    icon: 'UserOutlined',
  },
  {
    id: 2,
    title: 'Style Analysis',
    description: 'Color analysis, body type assessment, and personal style profile creation.',
    icon: 'EyeOutlined',
  },
  {
    id: 3,
    title: 'Strategy Development',
    description: 'Create a personalized style roadmap and wardrobe plan tailored to your goals.',
    icon: 'BulbOutlined',
  },
  {
    id: 4,
    title: 'Implementation',
    description: 'Shopping assistance, wardrobe organizing, and styling sessions to bring your new image to life.',
    icon: 'ShoppingOutlined',
  },
  {
    id: 5,
    title: 'Ongoing Support',
    description: 'Follow-up consultations and continued guidance to maintain and evolve your style.',
    icon: 'HeartOutlined',
  },
];

// Service Features
export const SERVICE_FEATURES = [
  {
    title: 'Personal Style Analysis',
    description: 'Discover your authentic style through comprehensive analysis of your preferences, lifestyle, and goals.',
    features: ['Color Analysis', 'Body Type Assessment', 'Style Personality Quiz', 'Lifestyle Evaluation'],
  },
  {
    title: 'Wardrobe Consulting',
    description: 'Optimize your existing wardrobe and create a strategic plan for future purchases.',
    features: ['Closet Audit', 'Wardrobe Organization', 'Shopping Lists', 'Mix & Match Guidance'],
  },
  {
    title: 'Professional Image Coaching',
    description: 'Develop executive presence and professional confidence for career advancement.',
    features: ['Business Attire Planning', 'Confidence Building', 'Communication Skills', 'Personal Branding'],
  },
];

export default {
  COLORS,
  SERVICE_OPTIONS,
  CONSULTATION_TYPES,
  BUDGET_RANGES,
  SOCIAL_LINKS,
  CONTACT_INFO,
  SEO_DEFAULTS,
  ANIMATION_SETTINGS,
  VALIDATION_RULES,
  API_ENDPOINTS,
  TESTIMONIALS,
  PROCESS_STEPS,
  SERVICE_FEATURES,
};

// End of File: constants.js
