/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,tsx,jsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
