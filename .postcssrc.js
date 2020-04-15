const date = new Date();

module.exports = {
  map: true,
  plugins: {
    'postcss-discard-duplicates': {},
    autoprefixer: {},
    'css-mqpacker': {},
    'postcss-banner': {
      banner: `Copyright 2019-${date.getFullYear()} Workday, Inc.`,
    },
    'postcss-inline-svg': {},
  },
};
