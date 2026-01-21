import {viteDevServer} from '@cypress/vite-dev-server';
import {defineConfig} from 'cypress';

export default defineConfig({
  projectId: 'odida5',
  watchForFileChanges: false,

  retries: {
    runMode: 2,
  },

  blockHosts: ['cdn.fontawesome.com'],

  component: {
    specPattern: 'cypress/component/**/*.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    viewportWidth: 1024,
    viewportHeight: 768,
  },
});
