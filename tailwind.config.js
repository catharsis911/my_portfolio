/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violetColor': '#8b18e9',
        'greyIsh': '#EDF7FA',
        'textColor': '#252b36'
      }
    },
  },
  plugins: [],
}

