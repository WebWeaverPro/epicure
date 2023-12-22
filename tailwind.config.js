/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'gray' : '#f8f8f8',
        'footer-text-color' : 'rgb(105,105,105)'
      }
    },
  },
  plugins: [],
}