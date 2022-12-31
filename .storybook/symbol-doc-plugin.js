// @ts-check
const ts = require('typescript');
const {performance} = require('perf_hooks');
const crypto = require('crypto');

// we use TS files, so tell node to register them
require('ts-node').register({});

const {findDocs} = require('@workday/canvas-kit-docs/docgen/findDocs');

/** @typedef {import("webpack").Plugin} WebpackPlugin */
/** @typedef {import("webpack").Compiler} Compiler */

/** @type {ts.CompilerOptions} */
const defaultConfig = {};

/** @implements {WebpackPlugin} */
class SymbolDocPlugin {
  /** @type {ts.Program} */
  program;

  moduleCount = 0;

  /** @type {import('@workday/canvas-kit-docs/docgen/docTypes').ExportedSymbol[]} */
  docs = [];

  /** @type {string[]} */
  files = [];

  /**
   * @param {{
   *   tsconfigPath?: string
   * }} options
   */
  constructor({tsconfigPath} = {}) {
    this.tsconfigPath = tsconfigPath;
  }

  getConfig() {
    const tsconfigPath = this.tsconfigPath || ts.findConfigFile('.', ts.sys.fileExists);

    let config = defaultConfig;
    if (tsconfigPath) {
      const contents = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
      if (contents.config) {
        config = contents.config;
      }
    }

    return config;
  }

  /**
   * @param {string[]} [files]
   */
  updateProgram(files) {
    this.files = files || this.files;
    return (this.program = ts.createProgram(this.files, this.getConfig(), undefined, this.program));
  }

  /** @param {Compiler} compiler */
  apply(compiler) {
    const logger = compiler.getInfrastructureLogger('SymbolDocPlugin');
    const pathRegex = /modules.+\.tsx?$/;
    logger.info('apply');
    compiler.hooks.compilation.tap('SymbolDocPlugin', compilation => {
      logger.info('compilation');
      compilation.hooks.seal.tap('SymbolDocPlugin', () => {
        logger.info('seal');
        const modulesToProcess = [];
        compilation.modules.forEach(module => {
          // Skip ignored / external modules
          if (!module.built || module.external || !module.rawRequest) {
            // console.log('ignoring', module.userRequest);
            return;
          }
          if (pathRegex.test(module.request)) {
            modulesToProcess.push(module);
          }
        });
        logger.info('modules', modulesToProcess.length);

        if (modulesToProcess.length === 0) {
          // Webpack can seal with 0 modules for us to process, so we want to do
          // nothing when that happens.
          return;
        }

        // Get a list of all files to be processed
        /** @type {string[]} */
        const files = modulesToProcess.map(m => m.userRequest);

        let now = performance.now();

        // Webpack will call `seal` with no modules which isn't very useful. It will call seal again
        // with all modules processed later. We'll want to capture that one by only increasing the
        // modules count. Maybe later we'll be smarter about files being removed because that will
        // likely cause an error...
        if (this.moduleCount < modulesToProcess.length) {
          // We don't know how many modules there should be, but if the current
          // module count is bigger than `this.moduleCount`, it is probably the
          // entirety of all files that need to be processed. We'll

          // create a shared TS program of all TS files used by webpack
          logger.info('Creating program');
          this.updateProgram(files);

          this.moduleCount = modulesToProcess.length;
        } else {
          // when we save a watched file, Webpack will seal only those files.
          // Most likely that's a single file. We want to update our TS program
          // to see these new files
          logger.info('Updating program');
          this.updateProgram();
        }
        logger.info('this.moduleCount', this.moduleCount);
        logger.info('createProgram time', performance.now() - now, 'ms');
        now = performance.now();

        // /** @type {import('webpack').compilation.Module} */
        // const docsModule = modulesToProcess.find(m => m.userRequest.includes('/docs.ts'));
        // if (docsModule) {
        //   // replace the string
        //   // docsModule._source._value = docsModule._source._value.replace(
        //   //   /\[\s+\/\* DOCS_REPLACE_BY_WEBPACK \*\/\s+\]/m,
        //   //   JSON.stringify(docs, null, '  ')
        //   // );
        //   setTimeout(() => {
        //     compiler.inputFileSystem.purge(docsModule.userRequest);
        //     compiler.fileTimestamps.set(docsModule.userRequest, Date.now());
        //     compilation.rebuildModule(docsModule, (...args) => {
        //       console.log('done rebuilding');
        //     });
        //   }, 100);
        //   // hash += '0';
        //   // console.log('module', Object.keys(docsModule), Object.keys(docsModule._source));
        // }

        modulesToProcess.forEach(m => this.processModule(m));
        logger.info('docProcess time', performance.now() - now, 'ms');
        // fs.writeFileSync(
        //   'modules.json',
        //   JSON.stringify(modulesToProcess.map(v => v.userRequest, null, '  '))
        // );
      });
    });
  }
  /**
   *
   * @param {import('webpack').compilation.Module} module
   * @returns
   */
  processModule(module) {
    if (!module) return;

    const docs = findDocs(this.program, module.userRequest);

    if (!docs.length) return;

    let source =
      module._source._value +
      `
const __docs = ${JSON.stringify(docs, null, '  ')}
if (window.__updateDocs) {
  window.__updateDocs?.(__docs)
} else {
  window.__docs = (window.__docs || []).concat(__docs)
}
`;
    module._source._value = source;
  }
}

module.exports = SymbolDocPlugin;
