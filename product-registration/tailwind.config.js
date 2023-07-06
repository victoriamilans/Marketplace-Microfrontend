/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        96: "38rem",
        xl: "38rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#FF9A11",
        hover: "#E48403",
      }),
      maxWidth: {
        xs: "15rem",
      },
    },
  },
  plugins: [],
};
