/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue1': '#00249c',
        'blue2' : '#40cee4',
        'grey1' : '#c5c5c5',
        'red2' : '#e280be',
        'red1' : '#c6007e'
      },
      fontFamily: {
        'montserrat' : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
  ],
}

