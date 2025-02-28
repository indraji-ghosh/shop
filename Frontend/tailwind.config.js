/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",  // Adjust based on your project structure
      "./public/index.html",
    ],
    theme: {
      extend: {},
    },
    container: {
      center: true,
      padding: '1rem',
    },
    plugins: [],
  };
  