const {
  generateDocgenCodeBlock,
} = require('@storybook/react-docgen-typescript-plugin/dist/generateDocgenCodeBlock.js');
const ts = require('typescript');

const {getComponentDocs, getConfig} = require('./docgen-parse-file');

// Cache the tsProgram for faster updates This prevents JSDoc updates from reflecting in the doc
// source, but that already didn't work Creating a new tsProgram takes about 1.5s. Skipping brings
// down hot reload times from 2s to 500ms. That's worthwhile.
let tsProgram;
let moduleCount = 0;

class DocgenPlugin {
  apply(compiler) {
    const pathRegex = /modules.+\.tsx/;
    compiler.hooks.compilation.tap('DocgenPlugin', compilation => {
      compilation.hooks.seal.tap('DocgenPlugin', () => {
        const modulesToProcess = [];
        compilation.modules.forEach(module => {
          // Skip ignored / external modules
          if (!module.built || module.external || !module.rawRequest) {
            return;
          }
          if (pathRegex.test(module.request)) {
            modulesToProcess.push(module);
          }
        });

        if (moduleCount !== modulesToProcess.length) {
          // create a shared TS program of all TS files used by webpack
          tsProgram = ts.createProgram(
            modulesToProcess.map(v => v.userRequest),
            getConfig()
          );
          moduleCount = modulesToProcess.length;
          console.log('moduleCount', moduleCount);
        }

        modulesToProcess.forEach(m => processModule(m, tsProgram));
      });
    });
  }
}

const processModule = (module, tsProgram) => {
  if (!module) return;

  const componentDocs = getComponentDocs(module.userRequest, tsProgram);

  if (!componentDocs.length) return;

  let source = module._source._value;
  source +=
    '\n' +
    generateDocgenCodeBlock({
      filename: module.userRequest,
      source: module.userRequest,
      componentDocs,
      docgenCollectionName: 'STORYBOOK_REACT_CLASSES',
      setDisplayName: true,
      savePropValueAsString: true,
      typePropName: 'type',
    }).substring(module.userRequest.length) +
    '\n';
  module._source._value = source;
};
module.exports = DocgenPlugin;
