/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      cookie: ["Cookie", "cursive"],
      courgette: ["Courgette", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
