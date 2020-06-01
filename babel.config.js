module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      plugins: ['emotion', '@babel/proposal-class-properties', '@babel/plugin-transform-runtime'],
    },
  },
};
