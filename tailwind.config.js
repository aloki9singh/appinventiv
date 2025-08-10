/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './public/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-blue': '#0D47A1', // Example color from Appinventiv's palette
        'app-gray': '#F5F5F5', // Light gray for backgrounds
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Match site's font
      },
    },
  },
  plugins: [],
};