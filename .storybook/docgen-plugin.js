const docGen = require('react-docgen-typescript');
const docGenLoader = require('react-docgen-typescript-loader/dist/generateDocgenCodeBlock.js');
const ts = require('typescript');
const path = require('path');
const tsconfigPath = path.join(__dirname, './tsconfig.json');

const propFilter = prop => {
  if (prop.parent) {
    return !prop.parent.fileName.includes('node_modules');
  }

  return true;
};

class DocgenPlugin {
  apply(compiler) {
    const pathRegex = RegExp(`modules.+\.tsx`);
    compiler.hooks.compilation.tap('DocgenPlugin', compilation => {
      compilation.hooks.seal.tap('DocgenPlugin', modules => {
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
        const tsProgram = ts.createProgram(modulesToProcess.map(v => v.userRequest), {
          jsx: ts.JsxEmit.React,
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.Latest,
        });
        modulesToProcess.forEach(m => processModule(m, tsProgram));
      });
    });
  }
}

processModule = (module, tsProgram) => {
  if (!module) return;

  const componentDocs = docGen
    .withCustomConfig(tsconfigPath, {propFilter: propFilter})
    .parseWithProgramProvider(module.userRequest, () => tsProgram);

  if (!componentDocs.length) return;

  let source = module._source._value;
  source +=
    '\n' +
    docGenLoader
      .default({
        filename: module.userRequest,
        source: module.userRequest,
        componentDocs,
        docgenCollectionName: 'STORYBOOK_REACT_CLASSES',
        setDisplayName: true,
      })
      .substring(module.userRequest.length) +
    '\n';
  module._source._value = source;
};
module.exports = DocgenPlugin;
