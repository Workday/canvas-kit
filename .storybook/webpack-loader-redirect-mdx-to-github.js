const path = require('path');

const basePath = path.resolve(__dirname, '../');

module.exports = function webpackLoaderRedirectMDXToGithub(source) {
  const {resourcePath} = this;
  return source.replace(/\[([^\]]+)\]\((\.\.?[^\)]+)\)/g, function replacer(match, p1, p2) {
    // extract the directory from the resourcePath given by Webpack
    const {dir} = path.parse(resourcePath);

    const newPath = path.relative(basePath, path.resolve(dir, p2));

    return `[${p1}](https://github.com/Workday/canvas-kit/blob/master/${newPath})`;
  });
};
