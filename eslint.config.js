const { expo } = require("eslint-config-expo");

module.exports = {
  ...expo,
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "warn",
  },
};
