const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
    },
    extend: {
      zIndex: {
        100: "100",
        minus1: "-1",
      },
      spacing: {
        small: "350px",
        medium: "480px",
        big: "600px",
        quarter: "25%",
        three: "30%",
        ninety: "90%",
        3: "12px",
      },
      colors: {
        ocean: "#1BA0D5",
        blue: "#0B96FF",
        aliceblue: "#F0F3F4",
        card: "#003054",
        dimgray: "#636363",
        suvagrey: "#8E8E8E",
        gray74: "#BDBDBD",
        pattensblue: "#DAE3EB",
      },
      transitionProperty: {
        right: "right",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
