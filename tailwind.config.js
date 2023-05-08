/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    colors: {
      backgroundBookIt: '#222028',
      backgroundForm: '#00000080',
      fontColor: '#a5afac',
      secondfontColor: '#a5747e'
    },
    fontFamily:{
      sans: ['sans-serif', 'Arial'],
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
