/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      display: ["'Big Shoulders Display'", "sans-serif"],
      sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
      mono: ["'IBM Plex Mono'", "monospace"],
    },
    extend: {
      colors: {
        bg: "#0a0b0d",
        surface: "#101114",
        line: "#22252b",
        "line-soft": "#1a1c20",
        ink: "#e7eaee",
        dim: "#9aa0aa",
        faint: "#5c6169",
        accent: "#ff7a3d",
        "accent-2": "#4fd8c4",
      },
      boxShadow: {
        card: "0px 24px 60px -20px rgba(0,0,0,0.55)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};