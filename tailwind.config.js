/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your source paths
  ],
  theme: {
    extend: {
      colors:
      {
        dark:"#1E293B"
      }
    },
  },
  plugins: [],
}
