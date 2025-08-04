/**
 * @file: Layout.js
 * @path: frontend/src/components/layout/Layout.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Main layout wrapper component
 * @author: Randolfo Fermin
 * @module: Frontend - Layout Components
 */

import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * @function Layout
 * @description Main layout wrapper that includes header and footer
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

// End of File: Layout.js
