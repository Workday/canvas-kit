const path = require('path');
const DocgenPlugin = require('./docgen-plugin');

const modulesPath = path.resolve(__dirname, '../modules');

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
    '@storybook/preset-scss',
  ],
  webpackFinal: async config => {
    // Convert mdx links to point to github
    config.module.rules.push({
      test: /\.md$/,
      include: [path.resolve(__dirname, '..')],
      exclude: [/node_modules/],
      use: [
        {
          loader: path.resolve(__dirname, 'webpack-loader-redirect-mdx-to-github'),
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
