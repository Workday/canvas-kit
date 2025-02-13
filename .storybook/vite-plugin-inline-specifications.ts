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
        const specRegEx = /\<Specifications(.+)file=[{'"]([^"'}]+)[}'"](.+)\/>/;
        const specMatch = code.match(specRegEx);
        if (specMatch) {
          const spec = await parseSpecFile(specMatch[2]).then(contents => JSON.stringify(contents));
          return code.replace(
            specRegEx,
            (_match: string, pre: string, _file: string, post: string) => {
              return `<Specifications${pre}initialSpecs={${spec}}${post}/>`; //?
            }
          );
        }
      }
    },
  };
}
