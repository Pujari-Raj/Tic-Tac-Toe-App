/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "481px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', '"sans"'],
      },
    },
  },
  plugins: [],
}
