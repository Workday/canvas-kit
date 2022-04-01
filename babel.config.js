module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      plugins: [
        'emotion',
        ['@babel/proposal-class-properties', {loose: true}], // https://github.com/storybookjs/storybook/issues/14805 and https://github.com/storybookjs/storybook/issues/14805#issuecomment-889504884
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
