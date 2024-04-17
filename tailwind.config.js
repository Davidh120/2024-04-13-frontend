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
        'gray1' : '#c5c5c5',
        'red2' : '#e280be',
        'red1' : '#c6007e'
      },
      fontFamily: {
        'montserrat' : ["Montserrat", "sans-serif"]
      },
      keyframes: {
        'wave': {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-65%)'},
        },
        'erase-in-l': {
          '0%': {transform: 'translateX(-200%)'},
          '100%': {transform: 'translateX(0)'},
        },
        'get-down': {
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(50px)'},
        },
        'get-up': {
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(-50px)'},
        },
      },
      animation: {
        'wave-left': 'wave 3s  infinite',
        'erase-in-left': 'erase-in-l 0.15s ',
        'get-down': 'get-down 0.21s ',
        'get-up': 'get-up 0.21s '
      }
      
    },
  },
  plugins: [
  ],
}

