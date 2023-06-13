/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    fontFamily:{
      sans: ['sans-serif', 'Arial'],
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
