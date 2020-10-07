// Definitely not perfect, but this will replace any relative links with absolute links
// Example:
// [Component Status](./COMPONENT_STATUS.md)
// [Component Status](https://github.com/Workday/canvas-kit/blob/master/COMPONENT_STATUS.md)

module.exports = function webpackLoaderRedirectMDXToGithub(source) {
  console.log(this.resourcePath);
  return source.replace(
    /(\[[^\]]+\])\(\./g,
    '$1(https://github.com/Workday/canvas-kit/blob/master'
  );
};
