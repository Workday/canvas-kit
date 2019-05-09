const path = require('path');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const modulesPath = path.resolve(__dirname, '../modules');
const utilsPath = path.resolve(__dirname, '../utils');

const babelLoader = {
  loader: 'babel-loader',
  options: {
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
};

const customRules = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [modulesPath, utilsPath],
    loader: 'happypack/loader?id=ts',
  },
  {
    test: /\.scss$/,
    include: modulesPath,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
        options: {
          insertAt: {
            before: '[data-emotion]',
          },
        },
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: require.resolve('./postcss.config.js'),
          },
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader', // compiles Sass to CSS
        options: {
          includePaths: [modulesPath],
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          insertAt: {
            before: '[data-emotion]',
          },
        },
      },
      'css-loader',
    ],
  },
  {
    test: /\.(jpe?g|png|gif|svg|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
];

module.exports = (baseConfig, env) => {
  // Exclude node_modules from js/babel loader
  baseConfig.module.rules[0].exclude = /node_modules/;

  // Custom rules
  baseConfig.module.rules = baseConfig.module.rules.concat(customRules);

  // Add `.ts` and `.tsx` as a resolvable extension.
  baseConfig.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];

  baseConfig.plugins.push(
    new HappyPack({
      id: 'ts',
      threads: 2,
      loaders: [
        babelLoader,
        {
          path: 'ts-loader',
          query: {
            happyPackMode: true,
            configFile: path.join(__dirname, './tsconfig.json'),
          },
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      tsconfig: path.join(__dirname, 'tsconfig.json'),
      tslint: path.join(__dirname, '../tslint.json'),
    })
  );

  return baseConfig;
};
