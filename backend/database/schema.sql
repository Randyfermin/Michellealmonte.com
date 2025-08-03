/**
 * @file: schema.sql
 * @path: backend/database/schema.sql
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Database schema for Michelle Almonte website
 * @author: Randolfo Fermin
 * @module: Backend - Database Schema
 */

-- Create database
CREATE DATABASE IF NOT EXISTS michellealmonte_db;
USE michellealmonte_db;

-- Contact Form Submissions Table
CREATE TABLE contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20),
  service_interest ENUM(
    'personal_styling', 
    'wardrobe_audit', 
    'color_analysis', 
    'virtual_consultation', 
    'corporate_training',
    'special_events'
  ),
  consultation_type ENUM('virtual', 'in_person'),
  budget_range ENUM('under_500', '500_1000', '1000_2500', '2500_plus'),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('new', 'contacted', 'converted', 'closed') DEFAULT 'new',
  
  INDEX idx_email (email),
  INDEX idx_created_at (created_at),
  INDEX idx_status (status)
);

-- Newsletter Subscriptions Table
CREATE TABLE newsletter_subscribers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(150) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('active', 'unsubscribed') DEFAULT 'active',
  
  INDEX idx_email (email),
  INDEX idx_status (status)
);

-- Admin Users Table (for future admin panel)
CREATE TABLE admin_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'moderator') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL,
  
  INDEX idx_username (username),
  INDEX idx_email (email)
);

-- Insert default admin user (password: admin123 - CHANGE IN PRODUCTION)
INSERT INTO admin_users (username, email, password_hash) VALUES 
('admin', 'admin@michellealmonte.com', '$2a$10$XqKUV/K8c4/jvqWr1.Tv2.123HashHere');

-- End of File: schema.sql
