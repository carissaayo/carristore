/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "840px",
        lg: "1098px",
        xl: "1280px",
        "2xl": "1400px",
      },
      colors: {
        primaryColor: "#2F3E46",
        secondaryColor: "#CAD2C5",
      },
    },
  },
  plugins: [],
};
