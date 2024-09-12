import {defineConfig} from 'cypress';
const webpack = require('@cypress/webpack-preprocessor');

export default defineConfig({
  projectId: 'odida5',
  watchForFileChanges: false,

  retries: {
    runMode: 2,
  },
  env: {
    NODE_ENV: 'development', // or 'development', 'production', etc.
  },

  blockHosts: ['cdn.fontawesome.com'],

  component: {
    specPattern: 'cypress/component/**/*.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    setupNodeEvents(on) {
      on('file:preprocessor', webpack());
    },
    viewportWidth: 1024,
    viewportHeight: 768,
  },
});
