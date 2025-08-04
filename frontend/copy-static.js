/**
 * @file: copy-static.js
 * @path: frontend/copy-static.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Copy static assets for Railway deployment
 * @author: Randolfo Fermin
 * @module: Frontend - Build Script
 */

const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy static assets
console.log('Copying static assets...');

// Copy public folder to standalone
if (fs.existsSync('public')) {
  copyRecursiveSync('public', '.next/standalone/public');
  console.log('✓ Public folder copied');
}

// Copy .next/static to standalone
if (fs.existsSync('.next/static')) {
  copyRecursiveSync('.next/static', '.next/standalone/.next/static');
  console.log('✓ Static assets copied');
}

console.log('Static assets copy complete!');

// End of File: copy-static.js