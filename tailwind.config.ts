import { type Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-background-light": "#FFF7ED",
        "theme-header": "#92AD94",
        "theme-burger": "#58745a",
        "theme-accent": "#F25F5C",
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
      minHeight: {
        "screen-view": "calc(100vh - 16rem)",
        "screen-header": "calc(100vh - 5rem)",
        "screen-footer": "calc(100vh - 5rem)",
      },
      height: {
        header: "5rem",
        footer: "11rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
