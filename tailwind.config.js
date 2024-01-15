/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
    colors: {
      primary: "#111",
      secondary: "#222",
      secondaryLight: "#444",
      tertiary: "#ed2647",
      tertiaryLight: "#f48ca4",
      white: "#e5e5e5",
      whiteLight: "#ddd",
    },
  },
  darkMode: "class",
  plugins: [],
};
