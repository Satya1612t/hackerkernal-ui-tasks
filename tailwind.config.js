/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-100%)' },
          '75%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(-300%)' }, 
        },
      },
      animation: {
        slide: 'slide 12s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

