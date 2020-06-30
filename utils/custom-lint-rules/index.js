const restrictedImports = require('./restricted-imports');
const ssr = require('./ssr');

module.exports = {
  rules: {
    'restricted-imports': restrictedImports,
    ssr: ssr,
  },
};
