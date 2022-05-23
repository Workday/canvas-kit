const docGen = require('react-docgen-typescript');
const {
  generateDocgenCodeBlock,
} = require('@storybook/react-docgen-typescript-plugin/dist/generateDocgenCodeBlock.js');
const ts = require('typescript');
const path = require('path');
const tsconfigPath = path.join(__dirname, '../tsconfig.json');
const fs = require('fs');

const propFilter = (fileName, prop, component) => {
  // `PropTables.tsx` files are okay to pass through
  if (fileName.includes('PropTables.tsx')) {
    return true;
  }

  if (prop.declarations) {
    // filter out props that come from node_modules or style props
    return !prop.declarations.some(
      d => d.fileName.includes('react/layout/lib/utils') || d.fileName.includes('node_modules')
    );
  }

  return false;
};

function getConfig(tsconfigPath) {
  const basePath = path.dirname(tsconfigPath);
  const {config, error} = ts.readConfigFile(tsconfigPath, filename =>
    fs.readFileSync(filename, 'utf8')
  );

  const {options, errors} = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
    {},
    tsconfigPath
  );

  return options;
}

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
            getConfig(tsconfigPath)
          );
          moduleCount = modulesToProcess.length;
        }

        modulesToProcess.forEach(m => processModule(m, tsProgram));
      });
    });
  }
}

const processModule = (module, tsProgram) => {
  if (!module) return;

  const componentDocs = docGen
    .withCustomConfig(tsconfigPath, {
      shouldExtractValuesFromUnion: true, // Make sure Storybook recognizes the enums for controls: https://github.com/storybookjs/storybook/blob/8d7fa4249cc73f315cfc15ebd8c6f0d574f341d5/addons/docs/src/lib/convert/proptypes/convert.ts#L44-L60
      propFilter: (prop, component) => propFilter(module.userRequest, prop, component),
    })
    // Using `parseWithProgramProvider` because `.parse` would create a new TS program with each module
    // which is much slower
    .parseWithProgramProvider(module.userRequest, () => tsProgram);

  if (!componentDocs.length) return;

  // `as` shows up as required, but it is not. This fixes it
  componentDocs.forEach(d => {
    if (d.props.as) {
      d.props.as.required = false;
      // More useful than `ElementType<any>`
      d.props.as.type.name =
        '"symbol" | "object" | "small" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 156 more ... | React.ComponentType<any>';
    }
    if (d.props.ref) {
      // More useful than default output
      d.props.ref.type.name = 'React.Ref<any>';
    }
  });

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
