import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36aaf6",
          500: "#0c8ee7",
          600: "#0070c5",
          700: "#01599f",
          800: "#064c83",
          900: "#0b406d",
          950: "#072849",
        },
        accent: {
          DEFAULT: "#d97706",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#d97706",
          600: "#b45309",
          700: "#92400e",
          800: "#78350f",
          900: "#451a03",
        },
        slate: {
          850: "#172033",
          950: "#0a0f1a",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        display: [
          "ui-serif",
          "Georgia",
          "Cambria",
          "\"Times New Roman\"",
          "Times",
          "serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animationDelay: {
        "0": "0ms",
        "150": "150ms",
        "300": "300ms",
        "450": "450ms",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(7,40,73,0.95) 0%, rgba(10,15,26,0.9) 100%)",
        "card-hover": "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
