/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'raw': '(min-height: 550px)' },
      }
    },
  },
 plugins: [require('daisyui'),
          require('tailwind-scrollbar'),]
}

