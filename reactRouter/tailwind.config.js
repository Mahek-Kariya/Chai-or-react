/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to your source files
    './public/index.html', // Add path to your HTML file
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
      },
      spacing: {
        // Add custom spacing if needed
      },
    },
  },
  plugins: [],
}