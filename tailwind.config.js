/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#000000",
      secondary: "#F5F5F5",
      white: "#ffffff",
      gray: "#07070799",
      gold: "#ECC440",
      red: "#C70000",
      damen: "#353d6e",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
