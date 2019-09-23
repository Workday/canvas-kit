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
  const moduleName = `@workday/canvas-kit-${unstable ? 'labs-' : ''}css-${name}`;

  console.log('\nCreating '.underline + `${moduleName}\n`.blue.underline);

  mkdirp(modulePath);

  const titleCaseName = getTitleCaseName(name);
  const storyPath = unstable ? `Labs/CSS/${titleCaseName}` : `CSS/${titleCaseName}`;

  const files = {
    package: {
      path: 'package.json',
      contents: packageJson(name, moduleName, description, unstable),
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
      contents: readme(name, titleCaseName, description, unstable),
    },
  };

  writeModuleFiles(files, modulePath);

  console.log('Copying License file to ' + `.${modulePath.replace(cwd, '')}/LICENSE`.cyan);
  cmd.run(`cp ${cwd}/LICENSE ${modulePath}/LICENSE`);
};
