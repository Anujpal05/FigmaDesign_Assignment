/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          500: "rgba(97, 97, 97, 0.82)",
          600: "rgba(54, 60, 67, 1)",
          950: "rgba(23, 23, 23, 1)",
          800: "rgba(40, 41, 47, 1)",
        },
        "light-blue": "rgba(150, 190, 231, 1)",
      },
      borderRadius: {
        "4xl": "27px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
