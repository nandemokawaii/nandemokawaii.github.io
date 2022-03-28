const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {

  content: [
    './**/*.{html,php,vue,jsx,tpl}',
    './assets/**/*.{html,php,vue,js,jsx,tpl}'
  ],
  safelist: [
    {
      pattern: /./ 
    },
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    colors: {
      ...colors,
      red: {
        100: "#db8ba2",
        600: "#cd5d7d",
      },
      cream: "#F6ECF0",
      gold: {
        100: "#FDD998",
        400: "#F5B971",
      },
      green: {
        100: "#9fcb25",
        200: "#366c53",
        600: "#014721",
      },
      blue: {
        100: "#97bfdf",
        200: "#4893cc",
        600: "#5255a6",
      },
      purple: {
        100: "#af61a7",
        200: "#8e6bae",
        500: "#6b3587",
        600: "#70328e",
      },
    },
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      fontFamily: {
        sans : ['Advent Pro', 'sans-serif']
      },
      fontSize: {
        "55": "55rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#8675A9",
        secondary: "#949CDF",
        bluish: "#A7C5EB",
        shopee: {
          100: "#ff57221a",
          600: "#ee4d2d",
        },
        
      },
      opacity: {
        "0": "0",
        "80": ".8",
        "100": "1",
      },
      zIndex: {
        "2": 2,
        "3": 3,
      },
      textIndent: {
        "1": "0.375rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      width: {
        "2/3": "66.666667%",
        "3/4": "75%",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
        "full": "100%",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "60-px": "60px",
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "350-px": "350px",
        "470-px": "470px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        "48": "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),

    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
          color: "''",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })

  ],
};
