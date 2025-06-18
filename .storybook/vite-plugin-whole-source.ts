import {type PluginOption} from 'vite';

import extractExports from '@workday/canvas-kit-docs/webpack/extract-exports';

/**
 * Inline specification metadata into MDX files
 */
export function vitePluginWholeSource(): PluginOption {
  return {
    name: 'vite-plugin-whole-source',
    transform: {
      order: 'pre',
      handler: transform,
    },
  };
}

/**
 * Inline specification metadata into MDX files
 * @param code - The raw string of a file to transform
 * @param id - The filename of the file being transformed
 * @returns The transformed code
 */
export const transform = async (code: string, id: string) => {
  if (/\/examples\/.*\.tsx?$/.test(id)) {
    const raw = JSON.stringify(code)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');

    const exports = extractExports(code);
    // rewrite out example files so that we can attach the __RAW__ property
    // This will rewrite this:
    //  export default () => <div />;
    // to this:
    //  const Example = () => <div />;
    //  export default Example;
    //  Example.__RAW__ = 'export default () => <div />;';
    // We do this so that the whole source code can be used in Storybook examples
    const rewriteExampleSource = code.includes('export default (')
      ? code.replace('export default (', 'const Example = (') + '\nexport default Example;'
      : code;

    return `${rewriteExampleSource}
${exports.map(name => `${name}.__RAW__ = ${raw};`).join('\n')}
`;
  }
};
