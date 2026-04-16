const {applyWholeSourceRawTransform} = require('@workday/canvas-kit-docs/webpack/whole-source-transform');

module.exports = function sourceAndPropTypeLoader(/** @type string */ source) {
  return applyWholeSourceRawTransform(source);
};
