/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter','sans-serif'],
      },
      backgroundImage: {
        'gradient':'linear-gradient(95deg, #059DFF 15%, #6549D5 45%, #E33FA1 75%, #FB5343 100%)',
      }
    },
  },
  plugins: [],
}

