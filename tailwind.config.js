/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,css}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['"Red Hat Display"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dce5f0',
          200: '#b9cbe0',
          300: '#8aa7c9',
          400: '#5a7faa',
          500: '#3d628d',
          600: '#2e4d73',
          700: '#263e5e',
          800: '#1e3249',
          900: '#16263a',
          950: '#0d1626',
        },
        gold: {
          300: '#e8c97f',
          400: '#d9b25c',
          500: '#c99f3f',
          600: '#a9802c',
          700: '#85631f',
        },
        beige: '#c5bfae',
      },
    },
  },
  plugins: [],
}