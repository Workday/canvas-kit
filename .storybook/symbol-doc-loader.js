// @ts-check
const {getOptions} = require('loader-utils');
const {validate} = require('schema-utils');
const ts = require('typescript');
const glob = require('glob');

// we use TS files, so tell node to register them
require('ts-node').register({});

const {DocParser} = require('@workday/canvas-kit-docs/docgen/docParser');
const {modelParser} = require('@workday/canvas-kit-docs/docgen/modelParser');

const schema = {
  type: 'object',
  properties: {
    glob: {
      type: '',
    },
    ignore: {
      type: 'array',
    },
  },
};

/**@type {string[]} */
let files = [];

/** @type {ts.CompilerOptions} */
const defaultConfig = {};

/**
 *
 * @param {string} [tsconfigPath]
 * @returns {ts.CompilerOptions}
 */
function getConfig(tsconfigPath) {
  tsconfigPath = tsconfigPath || ts.findConfigFile('.', ts.sys.fileExists);

  let config = defaultConfig;
  if (tsconfigPath) {
    const contents = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    if (contents.config) {
      // https://github.com/microsoft/TypeScript/issues/5276#issuecomment-149369652
      config = ts.convertCompilerOptionsFromJson(contents.config.compilerOptions, tsconfigPath)
        .options;
    }
  }

  return config;
}

// Tracks files that have been processed. If a file is already processed, it
// means the file has been updated and we need to update the Typescript program
// so the changes are reflected in our doc output. If we don't update the TS
// program, the docs will be processed with the outdated cache of the file
// contents.
const filesProcessedMap = new Map();

/** @type {ts.Program} */
let program;

/** @type {DocParser} */
let parser;

/** @type {ts.WatchOfConfigFile<ts.SemanticDiagnosticsBuilderProgram> } */
let watcher;

/** @typedef {import('webpack').loader.Loader} Loader */
/** @typedef {import('webpack').loader.LoaderContext} LoaderContext */

/**
 * @this {LoaderContext}
 * @param {Parameters<Loader>[0]} source
 */
function symbolDocLoader(source) {
  const options = getOptions(this);
  if (!program) {
    console.log('options:', options);
    files = glob.sync(options.glob, {
      ignore: options.ignore,
    });
    program = ts.createProgram(files, getConfig());
    parser = new DocParser(program, [modelParser]);
  }
  if (filesProcessedMap.has(this.resourcePath)) {
    // Update the program to force Typescript to reprocess our changed files. I
    // tried different and faster ways of doing this, but I couldn't figure out
    // a way to tell Typescript to incrementally update only the changed file.
    // Typescript only supports "incremental" via building and type-checking
    // where I only want a program - I don't need to type check or emit...
    program = ts.createProgram(files, getConfig(), undefined, program);
    parser = new DocParser(program, [modelParser]);
  }
  filesProcessedMap.set(this.resourcePath, true);

  const docs = parser.getExportedSymbols(this.resourcePath);

  return (
    source +
    `
  const __docs = ${JSON.stringify(docs, null, '  ')}
  if (window.__updateDocs) {
    window.__updateDocs?.(__docs)
  } else {
    window.__docs = (window.__docs || []).concat(__docs)
  }
  `
  );
}

module.exports = symbolDocLoader;
