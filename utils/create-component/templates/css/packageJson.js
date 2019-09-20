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
	"scripts": { TODO: ADD BUILD SCRIPTS },
	"keywords": [
		"canvas",
		"canvas-kit",
		"css",
		"components",
		"workday",
		"${name}"
	]
}
`;
