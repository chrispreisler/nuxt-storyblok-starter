module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "comma-dangle": ["error", "only-multiline"],
    "no-console": "off",
    "no-multiple-empty-lines": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "any",
          component: "any",
        },
      },
    ],
  },
};
