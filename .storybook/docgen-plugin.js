const docGen = require('react-docgen-typescript');
const docGenLoader = require('react-docgen-typescript-loader/dist/generateDocgenCodeBlock.js');
const ts = require('typescript');
const path = require('path');
const tsconfigPath = path.join(__dirname, './tsconfig.json');

const propFilter = (fileName, prop, component) => {
  // `PropTables.tsx` files are okay to pass through
  if (fileName.includes('PropTables.tsx')) {
    return true;
  }

  if (prop.declarations) {
    // filter out props that come from node_modules or style props
    return !prop.declarations.some(
      d => d.fileName.includes('labs-react/common/lib/utils') || d.fileName.includes('node_modules')
    );
  }

  return false;
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

        const tsProgram = ts.createProgram(
          modulesToProcess.map(v => v.userRequest),
          {
            jsx: ts.JsxEmit.React,
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.Latest,
          }
        );
        modulesToProcess.forEach(m => processModule(m, tsProgram));
      });
    });
  }
}

const processModule = (module, tsProgram) => {
  if (!module) return;

  const componentDocs = docGen
    .withCustomConfig(tsconfigPath, {
      propFilter: (prop, component) => propFilter(module.userRequest, prop, component),
    })
    .parseWithProgramProvider(module.userRequest, () => tsProgram);

  if (!componentDocs.length) return;

  // `as` shows up as required, but it is not. This fixes it
  componentDocs.forEach(d => {
    if (d.props.as) {
      d.props.as.required = false;
    }
  });

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
