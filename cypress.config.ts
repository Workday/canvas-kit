import {defineConfig} from 'cypress';
const webpack = require('@cypress/webpack-preprocessor');

export default defineConfig({
  projectId: 'odida5',
  watchForFileChanges: false,

  retries: {
    runMode: 2,
  },

  blockHosts: ['cdn.fontawesome.com'],

  // e2e: {
  //   // We've imported your old cypress plugins here.
  //   // You may want to clean this up later by importing these.
  //   setupNodeEvents(on, config) {
  //     return require('./cypress/plugins/index.js')(on, config);
  //   },
  //   baseUrl: 'http://localhost:9001',
  //   specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  // },

  component: {
    specPattern: 'cypress/component/**/*.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    setupNodeEvents(on) {
      on('file:preprocessor', webpack());
    },
  },
});
