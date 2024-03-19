/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/api/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/constants/**/*.{js,jsx,ts,tsx}',
    './src/naviagtion**/*.{js,jsx,ts,tsx}',
    './src/screens**/*.{js,jsx,ts,tsx}',
    './App.js**/*.{js,jsx,ts,tsx}',
    './index.js**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
