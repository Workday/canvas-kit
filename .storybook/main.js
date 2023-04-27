const path = require('node:path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const modulesPath = path.resolve(__dirname, '../modules');
const getSpecifications = require('../modules/docs/utils/get-specifications');

const processDocs = process.env.SKIP_DOCGEN !== 'true';

module.exports = {
  stories: [
    '../modules/docs/mdx/**/*.mdx',
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
    './readme-panel/preset.js',
    '@storybook/addon-storysource',
    '@storybook/addon-postcss',
  ],
  typescript: {
    check: false,
    reactDocgen: false, // we'll handle this ourselves
  },
  webpackFinal: async config => {
    // Get the specifications object and replace with a real object in the spec.ts file
    if (processDocs) {
      const specs = await getSpecifications();

      config.module.rules.push({
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

      config.module.rules.push({
        test: /.+\.tsx?$/,
        include: [modulesPath],
        exclude: /examples|stories|spec|codemod|docs/,
        loaders: [
          {
            loader: path.resolve(__dirname, 'symbol-doc-loader'),
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
    config.module.noParse: [require.resolve('typescript/lib/typescript.js')],

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

    /**
     * Added this because Storybook 6.3 is on emotion 10, so we rewrote the imports to point to emotion 11
     * https://github.com/storybookjs/storybook/issues/13145
     */
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': '@emotion/react',
        'emotion-theming': '@emotion/react',
      },
    };

    // Update @storybook/addon-docs webpack rules to load all .mdx files in storybook
    const mdxRule = config.module.rules.find(rule => rule.test.toString() === /\.mdx$/.toString());
    mdxRule.use.find(loader => loader.loader.includes('mdx1-csf')).options['compilers'] = [
      createCompiler({}),
    ];

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
    plugins: [
      ...options.plugins,
      '@babel/plugin-transform-modules-commonjs',
      // Needed temporarily until https://github.com/storybookjs/storybook/issues/14805 is resolved
      ['@babel/plugin-proposal-private-property-in-object', {loose: true}],
    ],
    presets: [
      ...options.presets,
      ['@babel/preset-react', {runtime: 'classic'}, 'react-16-backwards-compatible-override'],
    ],
  }),
};
