/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'xs': '455px'
    },
    extend: {
      fontFamily: {
        'Lily': ['"Lily Script One"', 'cursive'],
      },
    },
  },
  plugins: [],
}
