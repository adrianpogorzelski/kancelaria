/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "kancelaria": {
          "primary": "#1e3a8a",
          "secondary": "#7c2d12",
          "accent": "#14532d",
          "neutral": "#111827",
          "base-100": "#ffffff"
        }
      }
    ],
  },
}

