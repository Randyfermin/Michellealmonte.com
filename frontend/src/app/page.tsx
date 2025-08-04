/**
 * @file: page.tsx
 * @path: frontend/src/app/page.tsx
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Main homepage component
 * @author: Randolfo Fermin
 * @module: Frontend - Pages
 */

'use client';

import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
