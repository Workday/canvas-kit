// @ts-check
const {getOptions} = require('loader-utils');
const {transform} = require('@workday/canvas-kit-styling-transform/testing');

/** @typedef {import('webpack').loader.Loader} Loader */
/** @typedef {import('webpack').loader.LoaderContext} LoaderContext */

// Tracks files that have been processed. If a file is already processed, it
// means the file has been updated and we need to update the Typescript program
// so the changes are reflected in our doc output. If we don't update the TS
// program, the docs will be processed with the outdated cache of the file
// contents.
const filesProcessedMap = new Map();

/**
 * @this {LoaderContext}
 * @param {Parameters<Loader>[0]} source
 */
function styleTransformLoader(source) {
  const {
    /** @type {any} */
    Doc,
  } = getOptions(this);

  if (filesProcessedMap.has(this.resourcePath)) {
    Doc.update();
  }
  filesProcessedMap.set(this.resourcePath, true);

  return transform(Doc.program, this.resourcePath);
}

module.exports = styleTransformLoader;
