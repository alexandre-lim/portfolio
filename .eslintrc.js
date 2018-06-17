const path = require('path');

module.exports = {
  plugins: ['jest'],
  extends: ['airbnb', 'plugin:jest/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    "jest/globals": true,
  },
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    "no-unused-expressions": ["error", {"allowTernary": true}],
  },
};
