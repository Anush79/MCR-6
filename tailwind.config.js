/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'metal': '#565584',
      'tahiti': '#3ab7bf',
    },
    fontFamily:{
      Poppins:["Poppins,sans-serif" ]
    },
    container:{
      center:true,
      padding:"0.5rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px",

      }

    }
  },
  plugins: [],
}