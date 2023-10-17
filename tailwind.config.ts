import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        esther: "rgb(var(--color-esther) / <alpha-value>)",
        maximus: "rgb(var(--color-maximus) / <alpha-value>)",
        linx: "rgb(var(--color-linx) / <alpha-value>)",
        "theme-background-light": "#FFF7ED",
        "theme-background-container": "#92AD94",
        "theme-header": "#92AD94",
        "theme-footer": "#92AD94",
        "theme-accent": "#F25F5C",
        "theme-text-primary": "#efd9bf",
        "theme-text-primary-dark": "#7a7a7a",
        "theme-text-light": "#fbf2e4",
        "theme-brown": "#634638",
        "theme-light-beige": "#cebca9",
        "theme-dark-beige": "#c5af7d",
        "theme-green": "#83948e",
        "theme-orange": "#d09127",
        "theme-white": "#fcfcfd",
        "theme-text-1": "#efd9bf",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
