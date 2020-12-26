const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    "./public/*.html",
    "./src/js/components/*.vue"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
