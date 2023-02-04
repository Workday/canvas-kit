// @ts-check
const {createDocProgram} = require('../modules/docs/docgen/createDocProgram');
const routes = require('./routes');

const routeKeys = Object.keys(routes);

// Tracks files that have been processed. If a file is already processed, it
// means the file has been updated and we need to update the Typescript program
// so the changes are reflected in our doc output. If we don't update the TS
// program, the docs will be processed with the outdated cache of the file
// contents.
const filesProcessedMap = new Map();

/** @typedef {import('webpack').loader.Loader} Loader */
/** @typedef {import('webpack').loader.LoaderContext} LoaderContext */

let {parser, update} = createDocProgram();

/**
 * @this {LoaderContext}
 * @param {Parameters<Loader>[0]} source
 */
function symbolDocLoader(source) {
  if (filesProcessedMap.has(this.resourcePath)) {
    parser = update();
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
  `.replace(/\[([^\]]+)\]\((\/[^\)]+)\)/g, function replacer(_match, p1, p2) {
      // replace all Markdown links from doc site links to Storybook links
      const [url, hash] = p2.split('#');
      if (routeKeys.includes(url)) {
        return `[${p1}](?path=/docs/${routes[url]}${hash ? '#' + hash : ''})`;
      }
      // no match, return original
      return `[${p1}](${p2})`;
    })
  );
}

module.exports = symbolDocLoader;
