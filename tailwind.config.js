/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: '"Poppins", sans-serif'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black-olive': '#403F3F',
      'spanish-crimson': '#D72050',
      'dark-silver': '#706F6F',
      'quick-silver': '#9F9F9F',
      'anti-flash-white': '#F3F3F3',
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
