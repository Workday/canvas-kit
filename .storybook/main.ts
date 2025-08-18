import path from 'node:path';
import remarkGfm from 'remark-gfm';
import ts from 'typescript';

import {StorybookConfig} from '@storybook/react-webpack5';
import {ExportedSymbol, Value} from '@workday/canvas-kit-docs/docgen/docTypes';
import getSpecifications from '../modules/docs/utils/get-specifications';
import {getDocParser} from '../modules/docs/docgen/createDocProgram';
// Drop the `/index.ts` if using the published package
import {styleTransformer, StylingWebpackPlugin} from '@workday/canvas-kit-styling-transform';
import stylingConfig from '../styling.config';
import {version} from '../lerna.json';

const modulesPath = path.resolve(__dirname, '../modules');
const processDocs = process.env.SKIP_DOCGEN !== 'true';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  staticDirs: ['../public'],
  stories: ['../modules/**/mdx/**/*.mdx', '../modules/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disabled because actions is SLOW
      },
    },
    './readme-panel/preset.js',
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
    builder: '@storybook/builder-webpack5',
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
  webpackFinal: async config => {
    const docsMap = new Map<string, ExportedSymbol<Value>[]>();

    const tsPlugin = new StylingWebpackPlugin({
      tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
      transformers: [
        processDocs
          ? program => {
              const docParser = getDocParser(program);
              return _context => {
                return node => {
                  if (ts.isSourceFile(node)) {
                    const fileName = node.fileName;
                    const symbols = docParser.getExportedSymbols(fileName);
                    docsMap.set(fileName, symbols);
                  }

                  return node;
                };
              };
            }
          : undefined,
        program => styleTransformer(program, {...stylingConfig, extractCSS: false}),
      ],
      postTransform(code, id) {
        let newCode = code.replace('%VERSION%', version);
        if (docsMap.get(id) && processDocs) {
          return (
            newCode +
            `\nconst __docs = ${JSON.stringify(docsMap.get(id))}
  if (window.__updateDocs) {
    window.__updateDocs?.(__docs)
  } else {
    window.__docs = (window.__docs || []).concat(__docs)
  }`
          );
        }
        return newCode;
      },
    });

    config.plugins?.push(tsPlugin);

    // Load the source code of story files to display in docs.
    config.module?.rules?.push({
      test: /\.stories\.tsx?$/,
      include: [modulesPath],
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {parser: 'typescript'},
        },
      ],
      enforce: 'pre',
    });

    config.module?.rules?.push({
      test: /.+\.tsx?$/,
      include: [modulesPath],
      exclude: /examples|stories|spec|codemod|docs/,
      use: [
        {
          // If you copy this code, change the path to
          // '@workday/canvas-kit-styling-transform/webpack-loader'. We have to use the direct path
          // because we don't build the JS files first.
          loader: require.resolve('@workday/canvas-kit-styling-transform/lib/webpack-loader.ts'),
          options: tsPlugin.getLoaderOptions(),
        },
      ],
      enforce: 'pre',
    });

    // Get the specifications object and replace with a real object in the spec.ts file
    if (processDocs) {
      const specs = await getSpecifications();

      config.module?.rules?.push({
        test: /.ts$/,
        include: [path.resolve(__dirname, '../modules/docs')],
        use: [
          {
            loader: require.resolve('string-replace-loader'),
            options: {
              search: '[/* SPEC_FILES_REPLACE_BY_WEBPACK */]',
              replace: JSON.stringify(specs, null, '  '),
            },
          },
        ],
      });
    }

    // Convert mdx links to point to github
    /**
     * This was added to tell webpack not to parse the typescript.js file in node_modules and suppress these warnings:
     * WARN Module not found: Error: Can't resolve 'perf_hooks' in 'node_modules/typescript/lib'
     * WARN resolve 'perf_hooks' in 'node_modules/typescript/lib
     *
     * These warnings relate to this open GitHub issue: https://github.com/microsoft/TypeScript/issues/39436
     * If you no longer see these warnings when this is config is removed, you can safely delete this config.
     */
    if (config.module) {
      config.module.noParse = [require.resolve('typescript/lib/typescript.js')];
    }

    config.module?.rules?.push({
      test: /\.mdx?$/,
      include: [path.resolve(__dirname, '..')],
      exclude: [/node_modules/],
      use: [
        {
          loader: path.resolve(__dirname, 'webpack-loader-redirect-mdx-to-github'),
        },
      ],
    });

    config.module?.rules?.push({
      test: /\.mdx?$/,
      include: [path.resolve(__dirname, '..')],
      use: [
        {
          loader: path.resolve(__dirname, 'mdx-code-block-rewrite'),
        },
      ],
    });

    // Load the whole example code of story files to display in docs.
    config.module?.rules?.push({
      test: /\/examples\/.*\.tsx?$/,
      include: [modulesPath],
      use: [
        {
          loader: path.resolve(__dirname, 'whole-source-loader'),
        },
      ],
      enforce: 'pre',
    });

    return config;
  },
  babel: async options => ({
    ...options,
    plugins: [...(options.plugins as []), '@babel/plugin-transform-modules-commonjs'],
    presets: [...(options.presets as []), ['@babel/preset-react', {runtime: 'automatic'}]],
  }),
};

export default config;
