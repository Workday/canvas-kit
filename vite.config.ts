import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import {defineConfig} from 'vite';

export default defineConfig(() => ({
  plugins: [
    {
      enforce: 'pre' as const,
      ...mdx({
        include: /\.md$/,
        remarkPlugins: [remarkGfm],
      }),
    },
  ],
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
        find: /^(@workday\/canvas-kit-[^/]+)\/([^/]+)$/,
        replacement: '$1/$2/index.ts',
      },
      {
        find: /^@storybook\/csf$/,
        replacement: 'storybook/internal/csf',
      },
      {
        find: /^@storybook\/blocks$/,
        replacement: '@storybook/addon-docs/blocks',
      },
    ],
  },
}));
