/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "1/2": "393px",
      },
      maxHeight: {
        "1/2": "393px",
      },
    },
  },
  plugins: [],
};
