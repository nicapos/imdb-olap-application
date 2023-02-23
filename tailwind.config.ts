/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  content: ["./node_modules/flowbite/**/*.js"],
};
