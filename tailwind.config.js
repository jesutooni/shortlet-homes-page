module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "source-sans": ["'Source Sans Pro'", "sans-serif"],
        "dm-sans": ["'DM Sans'", "sans-serif"],
      },
      colors: {
        primary: {
          green: {
            dark: "#224932",
            bright: "#22B65D",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
