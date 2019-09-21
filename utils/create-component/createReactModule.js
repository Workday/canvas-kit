const path = require('path');
const mkdirp = require('mkdirp');

const writeModuleFiles = require('./writeModuleFiles');

const packageJson = require('./templates/react/packageJson');
const component = require('./templates/react/component');
const index = require('./templates/react/index');
const stories = require('./templates/react/stories');
const readme = require('./templates/react/readme');
const tsconfig = require('./templates/react/tsconfig');

module.exports = (componentPath, name, description, unstable) => {
  console.log(`\nCreating @workday/canvas-kit-react-${name}`);

  const modulePath = path.join(componentPath, 'react');
  mkdirp(modulePath);

  const upperName = name; // TODO
  const rootPath = unstable ? '../../..' : '../..';
  const storyPath = unstable ? `Labs/${upperName}` : upperName;

  const files = {
    package: {
      path: 'package.json',
      contents: packageJson(name, description),
    },
    component: {
      path: `lib/${upperName}.tsx`,
      contents: component(name),
    },
    index: {
      path: 'index.ts',
      contents: index(name),
    },
    stories: {
      path: 'stories/stories.tsx',
      contents: stories(storyPath, name, rootPath),
    },
    readme: {
      path: 'README.md',
      contents: readme(name, unstable),
    },
    tsconfig: {
      path: 'tsconfig.json',
      contents: tsconfig.default(rootPath),
    },
    tsconfigCjs: {
      path: 'tsconfig.cjs.json',
      contents: tsconfig.cjs(),
    },
    tsconfigEs6: {
      path: 'tsconfig.es6.json',
      contents: tsconfig.es6(),
    },
  };

  // TODO: Check based on path and do this automatically
  mkdirp(path.join(modulePath, 'lib'));
  mkdirp(path.join(modulePath, 'stories'));

  writeModuleFiles(files, modulePath);
  // Add license file
};
