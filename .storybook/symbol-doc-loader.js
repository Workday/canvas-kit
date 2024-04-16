// @ts-check
const routes = require('./routes');
const {getOptions} = require('loader-utils');

const routeKeys = Object.keys(routes);

/** @typedef {import('webpack').loader.Loader} Loader */
/** @typedef {import('webpack').loader.LoaderContext} LoaderContext */

/**
 * @this {LoaderContext}
 * @param {Parameters<Loader>[0]} source
 */
function symbolDocLoader(source) {
  const {
    /** @type {any} */
    Doc,
  } = getOptions(this);

  const docs = Doc.parser.getExportedSymbols(this.resourcePath);

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
