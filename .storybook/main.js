const path = require('path');
const DocgenPlugin = require('./docgen-plugin');

const modulesPath = path.resolve(__dirname, '../modules');
const getSpecifications = require('../modules/docs/utils/get-specifications');

module.exports = {
  stories: [
    './stories/*.stories.mdx',
    '../modules/**/*.stories.mdx',
    '../modules/**/stories*.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disabled because actions is SLOW
      },
    },
    'storybook-readme',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async config => {
    // Get the specifications object and replace with a real object in the spec.ts file
    const specs = await getSpecifications();
    // modules/specifications/lib/specs.ts
    config.module.rules.push({
      test: /specs\.ts$/,
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

    // Convert mdx links to point to github
    config.module.rules.push({
      test: /\.mdx?$/,
      include: [path.resolve(__dirname, '..')],
      exclude: [/node_modules/],
      use: [
        {
          loader: path.resolve(__dirname, 'webpack-loader-redirect-mdx-to-github'),
        },
        {
          loader: path.resolve(__dirname, 'mdx-code-block-rewrite'),
        },
      ],
    });

    // Load the source code of story files to display in docs.
    config.module.rules.push({
      test: /stories.*\.tsx?$/,
      include: [modulesPath],
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {parser: 'typescript'},
        },
      ],
      enforce: 'pre',
    });

    // Load the whole example code of story files to display in docs.
    config.module.rules.push({
      test: /examples\/.*\.tsx?$/,
      include: [modulesPath],
      loaders: [
        {
          loader: path.resolve(__dirname, 'whole-source-loader'),
        },
      ],
      enforce: 'pre',
    });

    // Load our scss files with postscss.
    // Note: This is the same as @storybook/preset-scss, but with postcss added.
    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {importLoaders: 2},
        },
        'postcss-loader',
        'sass-loader',
      ],
      include: modulesPath,
    });

    config.plugins.push(new DocgenPlugin());

    // Remove progress updates to reduce log lines in Travis
    // See: https://github.com/storybookjs/storybook/issues/2029
    if (process.env.TRAVIS) {
      config.plugins = config.plugins.filter(
        plugin => plugin.constructor.name !== 'ProgressPlugin'
      );
    }

    return config;
  },
  babel: async options => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-transform-modules-commonjs'],
  }),
};
