const colors = require('./styles/colors');
const colorsSafelist = require('./styles/colorsSafelist');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{tsx,jsx,js,ts}",
    "./components/**/*.{tsx,jsx,js,ts}",
  ],
  theme: {
    fontFamily: {
      wild: ["Maven Pro", "cursive"],
    },
    colors: colors,
  },
  plugins: [],
  safelist: colorsSafelist
}