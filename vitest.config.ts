import path from 'path';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vitest/config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@workday\/canvas-kit-styling$/,
        replacement: '@workday/canvas-kit-styling/index.ts',
      },
      {
        find: /^@workday\/canvas-kit-popup-stack$/,
        replacement: '@workday/canvas-kit-popup-stack/index.ts',
      },
      {
        find: /^@workday\/canvas-kit-docs$/,
        replacement: '@workday/canvas-kit-docs/index.ts',
      },
      {
        find: /^@workday\/canvas-kit-react$/,
        replacement: path.resolve(__dirname, 'modules/react/index.ts'),
      },
      // Single-segment subpaths (e.g. /common, /button) always have an index.ts
      {
        find: /^@workday\/canvas-kit-react\/([^/]+)$/,
        replacement: path.resolve(__dirname, 'modules/react') + '/$1/index.ts',
      },
      // Deep subpaths (e.g. /button/stories/visual-testing/utils) resolve directly to the file
      {
        find: /^@workday\/canvas-kit-react\/(.+)$/,
        replacement: path.resolve(__dirname, 'modules/react') + '/$1',
      },
      {
        find: /^@workday\/canvas-kit-preview-react$/,
        replacement: path.resolve(__dirname, 'modules/preview-react/index.ts'),
      },
      // Single-segment subpaths for preview-react
      {
        find: /^@workday\/canvas-kit-preview-react\/([^/]+)$/,
        replacement: path.resolve(__dirname, 'modules/preview-react') + '/$1/index.ts',
      },
      // Deep subpaths for preview-react
      {
        find: /^@workday\/canvas-kit-preview-react\/(.+)$/,
        replacement: path.resolve(__dirname, 'modules/preview-react') + '/$1',
      },
    ],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/spec/*.spec.ts?(x)'],
    setupFiles: './vitest.setup.ts',
    server: {
      deps: {
        inline: [
          '@workday/canvas-kit-styling',
          '@workday/canvas-kit-popup-stack',
          '@workday/canvas-kit-docs',
          '@workday/canvas-kit-react',
          '@workday/canvas-kit-preview-react',
        ],
      },
    },
  },
});
