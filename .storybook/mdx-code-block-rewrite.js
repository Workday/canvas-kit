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
  const hasSource = /import {.*Source[,\s}]/.test(source);
  const imports = [];
  if (!hasMeta) imports.push('Meta');
  if (!hasCanvas) imports.push('Canvas');
  if (!hasStory) imports.push('Story');
  if (!hasArgsTable) imports.push('ArgsTable');
  if (!hasSource) imports.push('Source');

  return (
    (imports.length && hasSpecialBlocks
      ? `import {${imports.join(',')}} from '@storybook/addon-docs';\n\n`
      : '') + source.replace(/\<PropsTable of=/g, '<ArgsTable of=')
  );
};
