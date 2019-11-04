const path = require('path');

module.exports = wallaby => {
  return {
    files: ['jest/setupTests.ts', 'modules/**/*.ts?(x)', '!**/*.spec.ts?(x)'],
    tests: ['modules/**/*.spec.ts?(x)'],

    env: {
      type: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
      }),
    },
  };
};
