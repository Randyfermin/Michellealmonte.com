/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'soft-ivory': '#FAF8F5',
          'yellow-butter': '#F9E4B7',
          'soft-terracotta': '#D6A77A',
          'rose-dust': '#D4A5A5',
          'cocoa-brown': '#5C3A2E',
          'pearl-gray': '#C9C9C9',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
