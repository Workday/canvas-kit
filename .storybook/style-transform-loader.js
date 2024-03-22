// @ts-check
const {getOptions} = require('loader-utils');
const {transform} = require('@workday/canvas-kit-styling-transform/testing');

/** @typedef {import('webpack').loader.Loader} Loader */
/** @typedef {import('webpack').loader.LoaderContext} LoaderContext */

/**
 * @this {LoaderContext}
 * @param {Parameters<Loader>[0]} source
 */
function styleTransformLoader(source) {
  const {
    /** @type {any} */
    Doc,
  } = getOptions(this);

  return transform(Doc.program, this.resourcePath);
}

module.exports = styleTransformLoader;
