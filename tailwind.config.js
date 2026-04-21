/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FDC010',
        'brand-blue': '#3F4494',
        'brand-dark': '#1a1a1a',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
