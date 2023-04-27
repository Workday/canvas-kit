const extractExports = require('./extract-exports');

module.exports = function injectModuleNameLoader(/** @type string */ source) {
  const exports = extractExports(source);

  // This will add a __IMPORT_NAME__ property that points to the module that's imported
  // For example "@workday/canvas-kit-react/tooltip"

  return `
  ${source}
  ${exports
    .map(name =>
      name
        ? `${name}.__IMPORT_NAME__ = "${this.resourcePath.replace(
            /(.+modules\/)((preview-|labs-)?react)\/([a-z-]+)\/(.+)/,
            '@workday/canvas-kit-$2/$4'
          )}";`
        : ''
    )
    .join('\n')}`;
};
