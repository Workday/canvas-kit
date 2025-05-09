import {type PluginOption} from 'vite';

import {parseSpecFile} from '@workday/canvas-kit-docs/utils/parseSpecFile';

/**
 * Inlines specification metadata into MDX files
 */
export function vitePluginInlineSpecifications(): PluginOption {
  return {
    name: 'vite-plugin-inline-specifications',
    enforce: 'pre',
    sequential: true,
    async transform(code, id) {
      if (/.mdx?$/.test(id)) {
        const specRegEx = /<Specifications([\s\S]*?)file=[{'"]([^"'}]+)[}'"]([\s\S]*?)\/>/m;
        const specMatch = code.match(specRegEx);
        if (specMatch) {
          console.log('id', id, specMatch[2]);
          const spec = await parseSpecFile(specMatch[2]).then(contents => JSON.stringify(contents));
          return code.replace(
            specRegEx,
            (_match: string, pre: string, _file: string, post: string) => {
              return `<Specifications${pre} file="${specMatch[2]}" initialSpecs={${spec}}${post}/>`; //?
            }
          );
        }
      }
    },
  };
}
