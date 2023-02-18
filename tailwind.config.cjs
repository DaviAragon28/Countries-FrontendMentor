/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkModeElements: '#2b3945',
        darkModeBackground: '#202c37',
        lightModeText: '#111517',
        lightModeInput: '#858585',
        lightModeBackground: '#fafafa',
      },
      fontFamily: {
        'sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
