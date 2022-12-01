const extractExports = require('@workday/canvas-kit-docs/webpack/extract-exports');

module.exports = function sourceAndPropTypeLoader(/** @type string */ source) {
  console.log('this', this.context);
  const raw = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  const exports = extractExports(source);

  // rewrite out example files so that we can attach the __RAW__ property
  // This will rewrite this:
  //  export default () => <div />;
  // to this:
  //  const Example = () => <div />;
  //  export default Example;
  //  Example.__RAW__ = 'export default () => <div />;';
  // We do this so that the whole source code can be used in Storybook examples
  const rewriteExampleSource = source.includes('export default (')
    ? source.replace('export default (', 'const Example = (') + '\nexport default Example;'
    : source;

  return `${rewriteExampleSource}
${exports.map(name => `${name}.__RAW__ = ${raw};`).join('\n')}
`;
};
