module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        aspectRatio: {
          none: 0,
          square: [1, 1],
          "16/9": [16, 9],
          "4/3": [4, 3],
          "21/9": [21,9]
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            background: theme("colors.gray.50"),
            h2: {
              color: theme("colors.gray.800")
            },
            h3: {
              color: theme("colors.gray.800")
            },
            strong: {
              color: theme("colors.red.800")
            }
          }
        }
      })
    }
  },
  variants: {
    aspectRatio:['responsive'],
    extend: {
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-aspect-ratio"),
  ]
};
