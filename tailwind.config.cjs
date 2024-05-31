/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/coffee-read.jpg')",
        //main: "url('/Background.jpg')",
        about: "url('/aboutpage-bg.png')",
        services: "url('/servicespage-bg.jpg')",
        contact: "url('/contactpage-bg.jpg')",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        mulish: ["Mulish", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        // Configure your color palette here
        primary: {
          slate: "#364049",
          clay: "#A29797",
          sweetPea: "#F4D5D3",
        },
        secondary: {
          brick: "#D25343",
        },
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
          "gray-100": "#5F5F5F",
          "gray-200": "#4D5053",
          "gray-300": "#E5E5E5",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};
