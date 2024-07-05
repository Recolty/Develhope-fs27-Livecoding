/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cyber' : "#ff7849",
      'primary' : 'var(--color-primary)',
      'secondary' : 'var(--color-secondary)',
      'accent' : 'var(--color-accent)'
    },
    extend: {},
  },
  plugins: [],
}

