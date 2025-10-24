export default (wallaby) => {
  return {
    files: ["**/*.ts?(x)"],
    tests: ["**/*.spec.ts*"],
    testFramework: "vitest",

    // // Configure Vite for Wallaby
    // vite: {
    //   configFile: "./vite.config.ts",
    //   // Ensure Wallaby uses the same Vite config as your project
    // },

    // // Set up the environment
    // env: {
    //   type: "node",
    // },

    // // Configure file patterns to match your project structure
    // files: [
    //   "vite.config.ts",
    //   "vitest.setup.ts",
    //   "modules/**/*.ts?(x)",
    //   "!**/*.spec.ts?(x)",
    //   "!**/*.d.ts",
    //   "!**/stories*.{ts,tsx,js,jsx}",
    //   "!**/node_modules/**",
    // ],

    // tests: ["modules/**/*.spec.ts?(x)", "modules/**/*.test.ts?(x)"],
  };
  // return {
  //   files: [
  //     'jest.config.js',
  //     'jest/setupTests.ts',
  //     'jest/verifyComponent.tsx',
  //     'modules/**/*.ts?(x)',
  //     '!**/*.spec.ts?(x)',
  //     '!**/*.d.ts',
  //     '!**/stories*.{ts,tsx,js,jsx}',
  //     {pattern: 'modules/**/node_modules/**', ignore: true},
  //   ],
  //   tests: ['modules/**/*.spec.ts?(x)', 'jest/**/*.spec.ts?(x)'],

  //   env: {
  //     type: 'node',
  //     runner: 'node',
  //   },

  //   testFramework: 'jest',

  //   compilers: {
  //     '**/*.ts?(x)': wallaby.compilers.babel(), // We're using Babel to compile all files seen by Jest
  //   },

  //   setup: w => {
  //     console.log('wallaby.projectCacheDir', w.projectCacheDir);
  //     const jestConfig = require('./jest.config.js');

  //     // Wallaby compiles, instruments and copies files found in `files` to the projectCacheDir. We need to tell Jest about this file
  //     jestConfig.setupFilesAfterEnv = [`${w.projectCacheDir}/jest/setupTests.js`];

  //     // Tell Jest how to resolve symlinked modules. Without this, Jest will look at source TS files and not at Wallaby's compiled & instrumented files
  //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //     (jestConfig.moduleNameMapper = {
  //       '@workday/canvas-kit-react/([^/]+)(/?.*)': '<rootDir>/modules/react/$1/$2',
  //       '@workday/canvas-kit-labs-react/([^/]+)(/?.*)': '<rootDir>/modules/labs-react/$1/$2',
  //       '@workday/canvas-kit-preview-react/([^/]+)(/?.*)': '<rootDir>/modules/preview-react/$1/$2',
  //       '@workday/canvas-kit-(?:(?!react|css|labs|preview))([^/]+)(/?.*)': '<rootDir>/modules/$1', // Non react, labs, preview, and css modules
  //     }),
  //       w.testFramework.configure(jestConfig);
  //   },

  //   maxConsoleMessagesPerTest: 10000,
  // };
};
