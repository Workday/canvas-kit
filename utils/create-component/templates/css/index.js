module.exports = name => `
@import "@workday/canvas-kit-css-core/index.scss";
@import "./lib/${name}.scss";
`;
