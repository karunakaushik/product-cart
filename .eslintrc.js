module.exports = {
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // Disables the rule globally
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module", // Enables ECMAScript modules
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
};
