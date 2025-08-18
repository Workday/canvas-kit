const path = require('node:path');
const remarkGfm = require('remark-gfm').default;

const modulesPath = path.resolve(__dirname, '../modules');
const getSpecifications = require('../modules/docs/utils/get-specifications');
import {StorybookConfig} from '@storybook/react-webpack5';
const {createDocProgram} = require('../modules/docs/docgen/createDocProgram');
const {version} = require('../lerna.json');

const processDocs = process.env.SKIP_DOCGEN !== 'true';

const Doc = createDocProgram();

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
            loader: require.resolve('string-replace-loader'),
            options: {
              search: '%VERSION%',
              replace: version,
            },
          },
          // loaders are run in reverse order. symbol-doc-loader needs to be done first
          {
            loader: path.resolve(__dirname, 'symbol-doc-loader'),
            options: {
              Doc,
            },
          },
          {
            loader: path.resolve(__dirname, 'style-transform-loader'),
            options: {
              Doc,
            },
          },
        ],
        enforce: 'pre',
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
    presets: [
      ...(options.presets as []),
      ['@babel/preset-react', {runtime: 'classic'}, 'react-16-backwards-compatible-override'],
    ],
  }),
};

export default config;
