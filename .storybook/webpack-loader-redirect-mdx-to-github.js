const {assert} = require('node:console');
const path = require('path');

const routes = require('./routes');

const basePath = path.resolve(__dirname, '../');

function webpackLoaderRedirectMDXToGithub(source) {
  const {resourcePath} = this;
  const routeKeys = Object.keys(routes);

  // find absolute paths that match something in routes
  return source
    .replace(/\[([^\]]+)\]\((\/[^\)]+)\)/g, function replacer(_match, p1, p2) {
      const [url, hash] = p2.split('#');

      // Normally, we want to carry the hash over when we rewrite the path (for
      // example, so `/components/buttons/button/#foo` is rewritten to
      // `?path=/docs/components-buttons--docs#foo`). However, if the hash
      // references the tab feature of the Canvas site (i.e., it includes
      // `tab=`), we don't want to carry the hash over since the concept of
      // tabbed content doesn't exist in Storybook -- in this case, we
      // rewrite the path strictly based on the mapping in the routes file.
      if (hash && hash.includes('tab=') && routeKeys.includes(p2)) {
        return `[${p1}](?path=/docs/${routes[p2]})`;
      }

      if (routeKeys.includes(url)) {
        return `[${p1}](?path=/docs/${routes[url]}${hash ? '#' + hash : ''})`;
      }

      // no match, return original
      return `[${p1}](${p2})`;
    })
    .replace(/\[([^\]]+)\]\((\.\.?[^\)]+)\)/g, function replacer(match, p1, p2) {
      // extract the directory from the resourcePath given by Webpack
      const {dir} = path.parse(resourcePath);

      const newPath = path.relative(basePath, path.resolve(dir, p2));

      return `[${p1}](https://github.com/Workday/canvas-kit/blob/master/${newPath})`;
    })
    .replace(/<a href="(\..+)">/g, function replacer(_match, p1) {
      // extract the directory from the resourcePath given by Webpack
      const {dir} = path.parse(resourcePath);

      const newPath = path.relative(basePath, path.resolve(dir, p1));

      return `<a href="https://github.com/Workday/canvas-kit/blob/master/${newPath}">`;
    });
}

const input = `
<a href="./LICENSE">
  <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Workday Canvas Kit is released under the Apache-2.0 license" />
</a>
[Form Field](/components/inputs/form-field/)
[ReadMe](./modules/docs/mdx/CONTRIBUTING.mdx)
`;

const output = `
<a href="https://github.com/Workday/canvas-kit/blob/master/LICENSE">
  <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Workday Canvas Kit is released under the Apache-2.0 license" />
</a>
[Form Field](?path=/docs/components-inputs-form-field--basic)
[ReadMe](https://github.com/Workday/canvas-kit/blob/master/modules/docs/mdx/CONTRIBUTING.mdx)
`;

// simple test for URL rewrites
// Yan can simply call `node .storybook/webpack-loader-redirect-mdx-to-github.js` on this file to verify
assert(
  webpackLoaderRedirectMDXToGithub.call({resourcePath: path.join(basePath, 'Readme.md')}, input) ===
    output,
  'Failed webpack-loader-redirect-mdx-to-github.js check'
);
module.exports = webpackLoaderRedirectMDXToGithub;
