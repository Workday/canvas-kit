const path = require('path');
const DocgenPlugin = require('./docgen-plugin');

const modulesPath = path.resolve(__dirname, '../modules');
const utilsPath = path.resolve(__dirname, '../utils');

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

  // Add `.ts` and `.tsx` as a resolvable extension.
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];

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

  config.plugins.push(new DocgenPlugin());

  return config;
};
