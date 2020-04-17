const path = require('path');

module.exports = wallaby => {
  return {
    files: [
      'jest.config.js',
      'jest/setupTests.ts',
      'modules/**/*.ts?(x)',
      '!**/*.spec.ts?(x)',
      '!**/*.d.ts',
      '!**/stories*.{ts,tsx,js,jsx}',
      {pattern: 'modules/**/node_modules/**', ignore: true},
    ],
    tests: ['modules/**/*.spec.ts?(x)'],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.babel(), // We're using Babel to compile all files seen by Jest
    },

    setup: w => {
      console.log('wallaby.projectCacheDir', w.projectCacheDir);
      const jestConfig = require('./jest.config.js');

      // Wallaby compiles, instruments and copies files found in `files` to the projectCacheDir. We need to tell Jest about this file
      jestConfig.setupFilesAfterEnv = [`${w.projectCacheDir}/jest/setupTests.js`];

      // Tell Jest how to resolve symlinked modules. Without this, Jest will look at source TS files and not at Wallaby's compiled & instrumented files
      (jestConfig.moduleNameMapper = {
        '@workday/canvas-kit-react-([^/]+)(/?.*)': '<rootDir>/modules/$1/react$2',
        '@workday/canvas-kit-labs-react-([^/]+)(/?.*)': '<rootDir>/modules/_labs/$1/react$2',
      }),
        w.testFramework.configure(jestConfig);
    },
  };
};
