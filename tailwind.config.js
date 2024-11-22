/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        malachite: {
          50: "#f2fcf1",
          100: "#e2f9df",
          200: "#c6f1c1",
          300: "#9ae491",
          400: "#65cf59",
          500: "#46c738",
          600: "#2f9524",
          700: "#287520",
          800: "#235d1e",
          900: "#1e4d1a",
          950: "#0a2a09",
        },
        egg_blue: {
          50: "#eefdfc",
          100: "#d4f9f7",
          200: "#aff2f1",
          300: "#77e9e9",
          400: "#4cdadb",
          500: "#1dbabd",
          600: "#1b969f",
          700: "#1d7981",
          800: "#20616a",
          900: "#1f515a",
          950: "#0f363d",
        },
      },
      plugins: [],
    },
  },
};
