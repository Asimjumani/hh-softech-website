/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1220',
          'navy-light': '#141E33',
          'navy-dark': '#060A12',
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          cyan: '#06B6D4',
          gray: '#F3F6FB',
          slate: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 18, 32, 0.06), 0 2px 6px -1px rgba(11, 18, 32, 0.04)',
        'card-hover': '0 20px 25px -5px rgba(11, 18, 32, 0.1), 0 10px 10px -5px rgba(11, 18, 32, 0.04)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.35)'
      }
    },
  },
  plugins: [],
}
