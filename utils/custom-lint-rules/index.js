/**
 * Note: you need to run `yarn add -WD file:./utils/custom-lint-rules` after changes for them to be reflected locally
 */
const restrictedImports = require('./restricted-imports');

module.exports = {
  rules: {
    'restricted-imports': restrictedImports,
  },
};
