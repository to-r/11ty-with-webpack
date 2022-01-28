module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  plugins: ["jquery"],
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
};
