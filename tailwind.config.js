/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-del-primary)',
          hover: 'var(--color-del-primary-hover)',
          light: 'var(--color-del-primary-light)',
        },
        black: 'var(--color-del-black)',
        gray: {
          DEFAULT: 'var(--color-del-gray)',
          light: 'var(--color-del-gray-light)',
        },
      },
      fontFamily: {
        sans: ['var(font-del-primary)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
