import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-background-light": "#FFF7ED",
        "theme-header": "#92AD94",
        "theme-accent" : "#F25F5C",
        "theme-text-primary": "#efd9bf",

        "theme-brown": "#634638",
        "theme-light-beige": "#cebca9",
        "theme-dark-beige": "#c5af7d",
        "theme-green": "#83948e",
        "theme-orange": "#d09127",
        "theme-white": "#fcfcfd",
        "theme-text-1": "#efd9bf",
        "theme-text-2": "#7a7a7a",
        "theme-text-light": "#fbf2e4",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
