const path = require('path');
const DocgenPlugin = require('./docgen-plugin');

const modulesPath = path.resolve(__dirname, '../modules');
const utilsPath = path.resolve(__dirname, '../utils');
const postcssConfigPath = path.resolve(__dirname, './postcss.config');

module.exports = ({config, mode}) => {
  // Exclude all node_modules from babel-loader
  config.module.rules
    .find(rule => /mjs\|jsx/.test(rule.test.toString()))
    .exclude.push(/node_modules/);

  // Filter out extraneous rules added by CRA (react-scripts)
  // react-scripts automatically adds js/ts matchers for a `src` folder which we don't use so these rules are moot
  config.module.rules = config.module.rules.filter(
    rule => !/js\|mjs\|jsx\|ts\|tsx/.test(rule.test.toString())
  );

  // Override CRA postcss presets
  config.module.rules.forEach(rule => {
    if (rule.test.toString().includes('scss|sass')) {
      delete rule.use[2].options.plugins;

      rule.use[2].options.config = {
        path: postcssConfigPath,
      };
    }
  });

  // Add `.ts` and `.tsx` as a resolvable extension.
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];

  // Load all module files and transpile using babel + ts
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [modulesPath, utilsPath],
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', {flow: false, typescript: true}]],
      plugins: [
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

  return config;
};
