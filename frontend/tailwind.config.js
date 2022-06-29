/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'iPhone8': '375px',
      'iPadPro11': '834px',
      'desktop': '1440px',
    },
    extend: {},
  },
  plugins: [],
}