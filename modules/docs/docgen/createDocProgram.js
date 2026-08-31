// @ts-check
import glob from 'glob';
import path from 'path';
import ts from 'typescript';

// // we use TS files, so tell node to register them
// require('ts-node').register({});

import {DocParser} from './docParser';

/** @type {ts.CompilerOptions} */
const defaultTSConfig = {};

/** @typedef {{glob: string, ignore: string[] | string, plugins: string[]}} Config */

/** @type {Config} */
const defaultConfig = {
  glob: '**/*.{ts,tsx}',
  ignore: [],
  plugins: [],
};

/**
 * Find the tsconfig.json file closest to the directory of the `basePath`.
 * @param {string} [basePath] Defaults to the cwd
 * @returns {ts.CompilerOptions}
 */
function getTSConfig(basePath = '.') {
  const tsconfigPath = ts.findConfigFile(basePath, ts.sys.fileExists);

  let config = defaultTSConfig;
  if (tsconfigPath) {
    const contents = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    if (contents.config) {
      // https://github.com/microsoft/TypeScript/issues/5276#issuecomment-149369652
      config = ts.convertCompilerOptionsFromJson(
        contents.config.compilerOptions,
        tsconfigPath
      ).options;
    }
  }

  return config;
}

/**
 * @return {{path: string, config: Config}}
 */
function getConfig() {
  const path = ts.findConfigFile(__dirname, ts.sys.fileExists, 'doc.config.json') || '.';
  const contents = path && ts.sys.readFile(path);

  return (contents && {path, config: JSON.parse(contents)}) || {path: '.', config: defaultConfig};
}

/**
 * Try to get the plugin from the import where ever it might be
 * @param {unknown} input
 * @returns {import('./docParser').ParserPlugin}
 */
function getPluginFn(input) {
  if (!input) {
    return () => undefined;
  }
  if (typeof input === 'function') {
    // @ts-ignore
    return input;
  }
  // @ts-ignore
  if (typeof input.default === 'function') {
    // @ts-ignore
    return input.default;
  }
  if (typeof input === 'object') {
    for (const key in input) {
      if (typeof input[key] === 'function') {
        return input[key];
      }
    }
  }

  return () => undefined;
}

/**
 * @param {string} basePath
 * @param {Config} config
 * @return {import('./docParser').ParserPlugin[]}
 */
function getPlugins(basePath, config) {
  return config.plugins
    .map(plugin => {
      // figure out the relative path between this file location and the plugin location relative to
      // the config location
      return require(path.dirname(basePath) + '/' + plugin);
    })
    .map(getPluginFn);
}

/**
 * @param {string} basePath
 * @param {Config} config
 * @returns {string[]}
 */
function getFiles(basePath, config) {
  const absolutePath = path.join(__dirname, path.relative(__dirname, path.dirname(basePath)));
  return glob.sync(absolutePath + '/' + config.glob, {ignore: config.ignore || undefined});
}

export function createDocProgram() {
  const {path, config} = getConfig();
  const tsConfig = getTSConfig(path);

  const plugins = getPlugins(path, config);
  let files = getFiles(path, config);
  const program = ts.createProgram(files, tsConfig);
  const parser = new DocParser(program, plugins);

  const Doc = {
    parser,
    program,
    update() {
      files = getFiles(path, config);
      // Update the program to force Typescript to reprocess our changed files. I
      // tried different and faster ways of doing this, but I couldn't figure out
      // a way to tell Typescript to incrementally update only the changed file.
      // Typescript only supports "incremental" via building and type-checking
      // where I only want a program - I don't need to type check or emit...
      Doc.program = ts.createProgram(files, tsConfig, undefined, program);
      Doc.parser = new DocParser(program, plugins);

      return Doc.parser;
    },
  };

  return Doc;
}

/**
 * Gets a configured DocParser. It does not create a TypeScript program and is suitable for watch
 * programs.
 * @param {ts.Program} program
 */
export function getDocParser(program) {
  const {path, config} = getConfig();

  const plugins = getPlugins(path, config);
  return new DocParser(program, plugins);
}

/**
 * Create a DocParser suitable for watchable mode. The `program` will be the program from a
 * TypeScript BuildProgram. The `update` method updates the docParser with the updated program that
 * has updated files.
 */
export function createWatchDocProgram() {
  const {path, config} = getConfig();
  const plugins = getPlugins(path, config);

  /** @type {DocParser} */
  let parser; // = new DocParser(program, plugins);

  /**
   * @param {ts.Program} program The updated program from the BuildProgram
   */
  return program => new DocParser(program, plugins);
}
