module.exports = (name, moduleName, description, unstable, public) => `
{
  "name": "${moduleName}",
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
    "url": "https://github.com/Workday/canvas-kit/tree/master/modules/${
      unstable ? '_labs/' : ''
    }${name}/css"
  },
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "build": "node ../../../${unstable ? '../' : ''}utils/css-build.js index.scss"
  }, ${
    public
      ? `
  "publishConfig": {
    "access": "public"
  },`
      : ``
  }
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
