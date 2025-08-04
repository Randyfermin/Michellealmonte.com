/**
 * @file: Header.js
 * @path: frontend/src/components/layout/Header.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Navigation header component
 * @author: Randolfo Fermin
 * @module: Frontend - Layout Components
 */

import React, { useState } from 'react';
import { NAV_LINKS, BUSINESS_INFO } from '../../utils/constants';

/**
 * @function Header
 * @description Navigation header with responsive mobile menu
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href) => {
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <header className="bg-soft-ivory shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-cocoa-brown">
              {BUSINESS_INFO.NAME}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-cocoa-brown hover:text-soft-terracotta px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('#contact')}
                className="bg-[#5C3A2E] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cocoa-brown hover:text-soft-terracotta focus:outline-none focus:text-soft-terracotta"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-pearl-gray">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-cocoa-brown hover:text-soft-terracotta block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('#contact')}
                className="bg-[#5C3A2E] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#D6A77A] hover:text-[#5C3A2E] transition-colors duration-200 w-full text-left mt-2"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

// End of File: Header.js
