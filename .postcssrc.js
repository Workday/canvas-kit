module.exports = {
  map: true,
  plugins: {
    'postcss-discard-duplicates': {},
    autoprefixer: {},
    'css-mqpacker': {},
    'postcss-banner': {
      banner: 'Copyright 2020 Workday, Inc.',
    },
    'postcss-inline-svg': {},
  },
};
