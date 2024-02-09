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
      whiteBg: "#ccc",
      tags: {
        critical: "#ff6347",
        fail: "#ff6347",
        high: "#ffaa00",
        medium: "#3498db",
        low: "#6DBE45",
        success: "#2ecc71",
        open: "#2ecc71",
        "in-progress": "#007B8A",
        review: "royalblue",
        closed: "#808080",
        resolved: "#0066cc",
        completed: "#0066cc",
        new: "#9b59b6",
        active: "#2ecc71",
        inactive: "#ff6347",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
