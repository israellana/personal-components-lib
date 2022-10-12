const colors = require('./styles/colors');

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
}