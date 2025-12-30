/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          DEFAULT: "#06b6d4",
          cyan: "#06b6d4",
          violet: "#7c3aed",
          gold: "#f59e0b",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse": "spin-reverse 60s linear infinite",
        float: "float-across 10s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "float-across": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(50vw, -30vh) rotate(90deg)" },
          "50%": { transform: "translate(100vw, 50vh) rotate(180deg)" },
          "75%": { transform: "translate(50vw, 100vh) rotate(270deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
