import {defineConfig} from 'vitest/config';

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
        replacement: '@workday/canvas-kit-react/index.ts',
      },
      {
        find: /^@workday\/canvas-kit-react\/(.+)$/,
        replacement: '@workday/canvas-kit-react/$1/index.ts',
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
        ],
      },
    },
  },
});
