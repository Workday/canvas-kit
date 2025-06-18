import {type PluginOption} from 'vite';

import {parseSpecFile} from '@workday/canvas-kit-docs/utils/parseSpecFile';

/**
 * Inline specification metadata into MDX files
 */
export function vitePluginInlineSpecifications(): PluginOption {
  return {
    name: 'vite-plugin-inline-specifications',
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
  if (/.mdx?$/.test(id)) {
    const specRegEx = /<Specifications([\s\S]*?)file=[{'"]([^"'}]+)[}'"]([\s\S]*?)\/>/m;
    const specMatch = code.match(specRegEx);
    if (specMatch) {
      console.log('id', id, specMatch[2]);
      try {
        const spec = await parseSpecFile(specMatch[2]).then(contents => JSON.stringify(contents));
        return code.replace(
          specRegEx,
          (_match: string, pre: string, _file: string, post: string) => {
            return `<Specifications${pre} file="${specMatch[2]}" initialSpecs={${spec}}${post}/>`; //?
          }
        );
      } catch (e) {
        console.error('Could not parse spec file', specMatch[2]);
      }
    }
  }
};
