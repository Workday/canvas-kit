const path = require('path');
const DocgenPlugin = require('./docgen-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const modulesPath = path.resolve(__dirname, '../modules');
const welcomeSectionPath = path.resolve(__dirname, './');
const utilsPath = path.resolve(__dirname, '../utils');

module.exports = ({config, mode}) => {
  // This is so we get consistent results when loading .ts/tsx and .mdx files
  const babelPresetEnvConfig = [
    '@babel/preset-env',
    {
      useBuiltIns: 'entry',
      corejs: {
        version: 3,
        proposals: true,
      },
    },
  ];

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

  // Add `.ts` and `.tsx` as a resolvable extension.
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];

  // This is required for @storybook/addon-docs until we can upgrade to Storybook 6
  // If left out, then a dep of addon-docs, acorn-jsx, is shipped as ES6 which will cause issues in browsers like IE11\
  // See: https://github.com/storybookjs/storybook/issues/8884
  config.module.rules.push({
    test: /\.?js$/,
    include: new RegExp(`node_modules\\${path.sep}acorn-jsx`), // https://github.com/storybookjs/storybook/pull/9790/files#diff-3f9960d4367e0d7176bea0f6d79a54e7R55
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [[require.resolve('@babel/preset-env'), {modules: 'commonjs'}]],
        },
      },
    ],
  });

  // Load all module files and transpile using babel + ts
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [modulesPath, utilsPath],
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/preset-typescript', '@babel/preset-react', babelPresetEnvConfig],
      plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        '@babel/plugin-transform-modules-commonjs',
        [
          'emotion',
          {
            autoLabel: true,
            labelFormat: '[filename]__[local]',
          },
        ],
      ],
    },
  });

  config.module.rules.push({
    test: /\.mdx$/,
    include: [modulesPath, welcomeSectionPath],
    exclude: [/node_modules/],
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [babelPresetEnvConfig],
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        loader: '@mdx-js/loader',
        options: {compilers: [createCompiler()]},
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
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'ProgressPlugin');
  }

  return config;
};
