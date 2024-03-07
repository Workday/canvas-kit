module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-typescript', ['@babel/preset-react']],
      plugins: [
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
