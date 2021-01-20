module.exports = {
  theme: {
    extend: {
      fontSize: {
        h1: "clamp(3rem, 3rem + (7 - 3) * ((100vw - 40rem) / (105 - 40)), 7rem)"
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
