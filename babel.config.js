module.exports = {
  env: {
    test: {
<<<<<<< HEAD
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {runtime: 'classic'}],
      ],
      plugins: ['emotion', '@babel/proposal-class-properties', '@babel/plugin-transform-runtime'],
=======
      presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      plugins: [
        'emotion',
        ['@babel/proposal-class-properties', {loose: true}], // https://github.com/storybookjs/storybook/issues/14805 and https://github.com/storybookjs/storybook/issues/14805#issuecomment-889504884
        '@babel/plugin-transform-runtime',
      ],
>>>>>>> 69f28d82a0291ed45c2c9d3ef92e437d69033471
    },
  },
};
