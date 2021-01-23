const path = require('path');

module.exports = function webpackLoaderRedirectMDXToGithub(source) {
  const {resourcePath} = this;
  return source.replace(/\[([^\]]+)\]\((\.\.?[^\)]+)\)/g, function replacer(match, p1, p2) {
    // extract the directory from the resourcePath given by Webpack
    const {dir} = path.parse(resourcePath);

    // We can't determine the root directory of the project since everyone might set a different base URL
    // The most common relative linking is between modules, so we'll split on that
    const [_, modulePath] = dir.split('modules');
    const newPath = modulePath
      ? '/modules' + path.resolve(`${modulePath}`, p2)
      : path.resolve('/', p2);

    return `[${p1}](https://github.com/Workday/canvas-kit/blob/master${newPath})`;
  });
};
