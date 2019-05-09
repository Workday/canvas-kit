const plugins = {
  'postcss-discard-duplicates': {},
  autoprefixer: {
    browsers:
      '> 5%, last 2 firefox versions, last 2 chrome versions, last 2 safari versions, last 2 edge versions, ie 11',
  },
  'postcss-inline-svg': {},
};

module.exports = {
  plugins,
};
