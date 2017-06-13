const postcssConfig = require('../.postcss.json');

module.exports = {
  plugins: postcssConfig.development,
};
