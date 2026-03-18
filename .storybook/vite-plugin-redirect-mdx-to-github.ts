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
            const [url, hash] = p2.split('#');
            if (routeKeys.includes(url)) {
              return `[${p1}](?path=/docs/${routes[url]}${hash ? '#' + hash : ''})`;
            }
            // no match, return original
            return `[${p1}](${p2})`;
          })
          .replace(/\[([^\]]+)\]\((\.\.?[^\)]+)\)/g, function replacer(match, p1, p2) {
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
