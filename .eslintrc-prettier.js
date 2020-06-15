const prettierConfig = require('./.prettierrc.js');
const baseConfig = require('./.eslintrc.js');

module.exports = {
  extends: './.eslintrc.js',
  rules: {
    'prettier/prettier': ['warn', prettierConfig]
  }
}
