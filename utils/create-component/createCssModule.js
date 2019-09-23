const path = require('path');
const mkdirp = require('mkdirp');
const cmd = require('node-cmd');

const writeModuleFiles = require('./writeModuleFiles');
const getTitleCaseName = require('./nameUtils').getTitleCaseName;

const packageJson = require('./templates/css/packageJson');
const component = require('./templates/css/component');
const index = require('./templates/css/index');
const stories = require('./templates/css/stories');
const readme = require('./templates/css/readme');

const cwd = process.cwd();

module.exports = (modulePath, name, description, unstable) => {
  console.log(`\nCreating @workday/canvas-kit-css-${name}\n`);

  mkdirp(modulePath);

  const titleCaseName = getTitleCaseName(name);
  const storyPath = unstable ? `Labs/CSS/${titleCaseName}` : `CSS/${titleCaseName}`;

  const files = {
    package: {
      path: 'package.json',
      contents: packageJson(name, description),
    },
    component: {
      path: `lib/${name}.scss`,
      contents: component(name),
    },
    index: {
      path: 'index.scss',
      contents: index(name),
    },
    stories: {
      path: 'stories/stories.tsx',
      contents: stories(storyPath),
    },
    readme: {
      path: 'README.md',
      contents: readme(titleCaseName, unstable),
    },
  };

  writeModuleFiles(files, modulePath);

  cmd.run(`cp ${cwd}/LICENSE ${modulePath}/LICENSE`);
};
