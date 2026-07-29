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
      viteConfig: {
        // Font files in updated-type.css use root-relative URLs (e.g. /Roboto-Regular.ttf)
        publicDir: 'public',
      },
    },
    viewportWidth: 1024,
    viewportHeight: 768,
  },
});
