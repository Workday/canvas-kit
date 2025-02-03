import mdx from '@mdx-js/rollup';
import {StorybookConfig} from '@storybook/react-vite';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import remarkGfm from 'remark-gfm';
import {createFilter, mergeConfig} from 'vite';

import {parseSpecFile} from '@workday/canvas-kit-docs/utils/parseSpecFile';
import extractExports from '@workday/canvas-kit-docs/webpack/extract-exports';

import {createDocProgram} from '../modules/docs/docgen/createDocProgram';

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const modulesPath = resolve(__dirname, '../modules');
const processDocs = process.env.SKIP_DOCGEN !== 'true';

console.log('creating doc program');
const Doc = createDocProgram();
console.log('finished doc program');

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  stories: ['../modules/**/mdx/**/*.mdx', '../modules/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disabled because actions is SLOW
      },
    },
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  typescript: {
    check: false,
    reactDocgen: false, // we'll handle this ourselves
  },
  // webpackFinal: async config => {
  //   // Get the specifications object and replace with a real object in the spec.ts file
  //   if (processDocs) {
  //     const specs = await getSpecifications();

  //     config.module?.rules?.push({
  //       test: /.ts$/,
  //       include: [resolve(__dirname, '../modules/docs')],
  //       use: [
  //         {
  //           loader: require.resolve('string-replace-loader'),
  //           options: {
  //             search: '[/* SPEC_FILES_REPLACE_BY_WEBPACK */]',
  //             replace: JSON.stringify(specs, null, '  '),
  //           },
  //         },
  //       ],
  //     });

  //     // Load the source code of story files to display in docs.
  //     config.module?.rules?.push({
  //       test: /\.stories\.tsx?$/,
  //       include: [modulesPath],
  //       use: [
  //         {
  //           loader: require.resolve('@storybook/source-loader'),
  //           options: {parser: 'typescript'},
  //         },
  //       ],
  //       enforce: 'pre',
  //     });

  //     config.module?.rules?.push({
  //       test: /.+\.tsx?$/,
  //       include: [modulesPath],
  //       exclude: /examples|stories|spec|codemod|docs/,
  //       use: [
  //         // loaders are run in reverse order. symbol-doc-loader needs to be done first
  //         {
  //           loader: resolve(__dirname, 'symbol-doc-loader'),
  //           options: {
  //             Doc,
  //           },
  //         },
  //         {
  //           loader: resolve(__dirname, 'style-transform-loader'),
  //           options: {
  //             Doc,
  //           },
  //         },
  //       ],
  //       enforce: 'pre',
  //     });
  //   }

  //   // Convert mdx links to point to github
  //   /**
  //    * This was added to tell webpack not to parse the typescript.js file in node_modules and suppress these warnings:
  //    * WARN Module not found: Error: Can't resolve 'perf_hooks' in 'node_modules/typescript/lib'
  //    * WARN resolve 'perf_hooks' in 'node_modules/typescript/lib
  //    *
  //    * These warnings relate to this open GitHub issue: https://github.com/microsoft/TypeScript/issues/39436
  //    * If you no longer see these warnings when this is config is removed, you can safely delete this config.
  //    */
  //   if (config.module) {
  //     config.module.noParse = [require.resolve('typescript/lib/typescript.js')];
  //   }

  //   config.module?.rules?.push({
  //     test: /\.mdx?$/,
  //     include: [resolve(__dirname, '..')],
  //     exclude: [/node_modules/],
  //     use: [
  //       {
  //         loader: resolve(__dirname, 'webpack-loader-redirect-mdx-to-github'),
  //       },
  //     ],
  //   });

  //   config.module?.rules?.push({
  //     test: /\.mdx?$/,
  //     include: [resolve(__dirname, '..')],
  //     use: [
  //       {
  //         loader: resolve(__dirname, 'mdx-code-block-rewrite'),
  //       },
  //     ],
  //   });

  //   // Load the whole example code of story files to display in docs.
  //   config.module?.rules?.push({
  //     test: /\/examples\/.*\.tsx?$/,
  //     include: [modulesPath],
  //     use: [
  //       {
  //         loader: resolve(__dirname, 'whole-source-loader'),
  //       },
  //     ],
  //     enforce: 'pre',
  //   });

  //   return config;
  // },
  viteFinal(config, options) {
    console.log(config);
    return mergeConfig(
      {
        plugins: [
          {
            name: 'vite-plugin-inline-specs',
            enforce: 'pre',
            sequential: true,
            async transform(code, id) {
              if (/.mdx?$/.test(id)) {
                const specRegEx = /\<Specifications(.+)file=[{'"]([^"'}]+)[}'"](.+)\/>/;
                const specMatch = code.match(specRegEx);
                if (specMatch) {
                  const spec = await parseSpecFile(specMatch[2]).then(contents =>
                    JSON.stringify(contents)
                  );
                  return code.replace(
                    specRegEx,
                    (_match: string, pre: string, _file: string, post: string) => {
                      return `<Specifications${pre}initialSpecs={${spec}}${post}/>`; //?
                    }
                  );
                }
              }
            },
          },
          {
            enforce: 'pre',
            ...mdx({
              include: '*.md',
              providerImportSource: '@mdx-js/react',
              remarkPlugins: [remarkGfm],
            }),
          },
          {
            name: 'vite-plugin-symbol-doc',
          },
          {
            name: 'vite-plugin-whole-source',
            enforce: 'pre',
            transform(code, id) {
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
                  ? code.replace('export default (', 'const Example = (') +
                    '\nexport default Example;'
                  : code;

                return `${rewriteExampleSource}
  ${exports.map(name => `${name}.__RAW__ = ${raw};`).join('\n')}
  `;
              }
            },
          },
          // This transform is replaced by the MDX transform that inlines the files for builds
          // {
          //   name: 'vite-plugin-spec-transform',
          //   resolveId(id) {
          //     // Handle only Cypress spec files
          //     if (/cypress\//.test(id)) {
          //       return id;
          //     }
          //   },
          //   async load(id) {
          //     if (/cypress\//.test(id)) {
          //       return `export default ${await parseSpecFile(id).then(contents => JSON.stringify(contents))}`;
          //     }
          //   },
          // },
        ],
      },
      config
    );
  },
  // babel: async options => ({
  //   ...options,
  //   plugins: [...(options.plugins as [])],
  //   presets: [...(options.presets as []), ['@babel/preset-react']],
  // }),
};

export default config;
