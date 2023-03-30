/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontSize: {
        sm: "0.64rem",
        tiny: "0.8rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.56rem",
        "2xl": "1.95rem",
        "3xl": "2.44rem",
        "4xl": "3.05rem",
        "5xl": "3.81rem",
        "6xl": "4.77rem",
        "7xl": "5.96rem",
      },
      fontFamily: {
        "space-mono": ['"Space Mono"', "Quicksand", "sans-serif"],
        mono: ["Space Mono", "ui-monospace"],
        sans: ["Space Mono", "Quicksand", ...defaultTheme.fontFamily.sans],
        quicksand: ["Quicksand"],
      },
      colors: {
        "brand-primary": {
          DEFAULT: "#EE7045",
          50: "#FDF1ED",
          100: "#FCE3DB",
          200: "#F8C6B5",
          300: "#F5A990",
          400: "#F18D6A",
          500: "#EE7045",
          600: "#E64A15",
          700: "#B23A10",
          800: "#7F290C",
          900: "#4C1807",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        brand: {
          primary: "#ee7045",
          secondary: "#7a706d",
          accent: "#37CDBE",
          neutral: "#f2805a",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
