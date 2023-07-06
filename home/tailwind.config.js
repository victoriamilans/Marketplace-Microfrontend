/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9A11",
        "primary-hover": "#E48403",
      },
    },
  },
  plugins: [],
};
