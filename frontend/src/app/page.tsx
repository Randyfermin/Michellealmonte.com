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
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
