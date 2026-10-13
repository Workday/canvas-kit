import path from 'node:path';
import {type PluginOption} from 'vite';

import routes from './routes';

const basePath = path.resolve(__dirname, '../');

/**
 * Inlines specification metadata into MDX files
 */
export function vitePluginRedirectMDXToGithub(): PluginOption {
  const routeKeys = Object.keys(routes);

  return {
    name: 'vite-plugin-redirect-mdx-to-github',
    enforce: 'pre',
    async transform(code, id) {
      if (/.mdx?$/.test(id)) {
        return code
          .replace(/\[([^\]]+)\]\((\/[^\)]+)\)/g, function replacer(_match, p1, p2) {
            const hashIndex = p2.indexOf('#');
            const url = hashIndex === -1 ? p2 : p2.slice(0, hashIndex);
            const hash = hashIndex === -1 ? '' : p2.slice(hashIndex + 1);
            if (routeKeys.includes(url)) {
              // `../?path=` so links from the docs iframe resolve to the manager URL
              // (e.g. `/?path=/docs/...` locally and `/canvas-kit/?path=...` on GitHub Pages).
              return `[${p1}](../?path=/docs/${routes[url]}${hash ? `#${hash}` : ''})`;
            }
            // no match, return original
            return `[${p1}](${p2})`;
          })
          .replace(/\[([^\]]+)\]\((\.\.?[^\)]+)\)/g, function replacer(match, p1, p2) {
            // Storybook doc links rewritten by `remarkRewriteCanvasRoutes` / the route replacer above
            if (p2.startsWith('../?path=') || p2.startsWith('./?path=') || p2.startsWith('?path=')) {
              return match;
            }
            // extract the directory from the resourcePath given by Webpack
            const {dir} = path.parse(id);

            const newPath = path.relative(basePath, path.resolve(dir, p2));

            return `[${p1}](https://github.com/Workday/canvas-kit/blob/master/${newPath})`;
          })
          .replace(/<a href="(\..+)">/g, function replacer(_match, p1) {
            // extract the directory from the resourcePath given by Webpack
            const {dir} = path.parse(id);

            const newPath = path.relative(basePath, path.resolve(dir, p1));

            return `<a href="https://github.com/Workday/canvas-kit/blob/master/${newPath}">`;
          });
      }
    },
  };
}
