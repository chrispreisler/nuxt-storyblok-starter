module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["error", "only-multiline"],
    "no-console": "off"
  }
};
