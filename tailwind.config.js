/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',           // Include your root HTML file
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/TS/React components
  ],
  theme: {
    extend: {}, // Use this to customize the default theme
  },
  plugins: [], // Add plugins here if needed
}
