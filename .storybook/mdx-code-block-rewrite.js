const path = require('path');
const {storyNameFromExport} = require('@storybook/csf');

// This loader replaces example code blocks with Storybook specific tags
// before:
// <ExampleCodeBlock code={MyComponent} />
// after:
// <Canvas><Story name="MyComponent" story={MyComponent} parameters={{storySource: { source: MyComponent.__RAW__ }}}
// __RAW__ comes from the `whole-source-loader
module.exports = function rewriteExampleCodeBlock(source) {
  const hasSpecialBlocks = /<(Meta|ExampleCodeBlock|PropsTable)/.test(source);
  const hasMeta = /import {.*Meta[,\s}]/.test(source);
  const hasCanvas = /import {.*Canvas[,\s}]/.test(source);
  const hasStory = /import {.*Story[,\s}]/.test(source);
  const hasArgsTable = /import {.*ArgsTable[,\s}]/.test(source);
  const imports = [];
  if (!hasMeta) imports.push('Meta');
  if (!hasCanvas) imports.push('Canvas');
  if (!hasStory) imports.push('Story');
  if (!hasArgsTable) imports.push('ArgsTable');
  return (
    (imports.length && hasSpecialBlocks
      ? `import {${imports.join(',')}} from '@storybook/addon-docs/blocks';\n\n`
      : '') +
    source
      .replace(/\<ExampleCodeBlock code={([A-Za-z0-9]+)} \/\>/g, function replacer(match, p1, p2) {
        return `<Canvas><Story name="${storyNameFromExport(
          p1
        )}" parameters={{storySource: {source: ${p1}.__RAW__}}}><${p1} /></Story></Canvas>`;
      })
      .replace(/\<PropsTable of=/g, '<ArgsTable of=')
  );
};
