/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080616',
          card: '#120e29',
          border: '#241c4a',
        },
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#6348f6',
          700: '#5134e8',
          800: '#3c24b5',
          900: '#25157d',
          950: '#090717',
        },
        accent: {
          DEFAULT: '#6348f6',
          light: '#8b5cf6',
          dark: '#3c24b5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 50px -10px rgba(99, 72, 246, 0.4)',
        'purple-card': '0 20px 40px -15px rgba(99, 72, 246, 0.2), 0 0 0 1px rgba(99, 72, 246, 0.2)',
      }
    },
  },
  plugins: [],
}


