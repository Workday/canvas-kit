module.exports = (name, description) => `
{
  "name": "@workday/canvas-kit-css-${name}",
  "version": "0.0.0",
  "description": "${description}",
  "author": "Workday, Inc. (https://www.workday.com)",
  "license": "Apache-2.0",
  "files": [
    "dist",
    "lib",
    "index.scss"
  ],
  "style": "dist/canvas-kit-css-${name}.min.css",
  "main": "dist/canvas-kit-css-${name}.min.css",
  "repository": {
    "type": "git",
    "url": "https://github.com/Workday/canvas-kit/tree/master/modules/${name}/css"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "node ../../../utils/css-build.js index.scss"
  },
  "keywords": [
    "canvas",
    "canvas-kit",
    "css",
    "scss",
    "sass",
    "components",
    "workday",
    "${name}"
  ]
}
`;
