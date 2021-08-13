const path = require('path');

const routes = require('./routes');

const basePath = path.resolve(__dirname, '../');

module.exports = function webpackLoaderRedirectMDXToGithub(source) {
  const {resourcePath} = this;
  const routeKeys = Object.keys(routes);

  // find absolute paths that match something in routes
  return source
    .replace(/\[([^\]]+)\]\((\/[^\)]+)\)/g, function replacer(match, p1, p2) {
      const [url, hash] = p2.split('#');
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
    });
};
