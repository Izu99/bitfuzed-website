/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maingray: "#4C4C4C",
        lightBlue: "#5ECFFF",
        mainBlue: "#007AFF",
      },
    },
  },
  plugins: [],
};
