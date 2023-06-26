import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-brown": "#634638",
        "theme-light-beige": "#cebca9",
        "theme-dark-beige": "#c5af7d",
        "theme-green": "#a4c3a3",
        "theme-orange": "#d09127",
        "theme-white": "#fcfcfd",
        'theme-light-bg': '#f8f2e3',
        'theme-header' : '#888772',
        'theme-text-1' : '#efd9bf',
        'theme-text-2': '#7a7a7a'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
