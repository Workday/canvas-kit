const path = require('path');
const mkdirp = require('mkdirp');
const cmd = require('node-cmd');

const writeModuleFiles = require('./writeModuleFiles');
const getPascalCaseName = require('./nameUtils').getPascalCaseName;
const getTitleCaseName = require('./nameUtils').getTitleCaseName;

const packageJson = require('./templates/react/packageJson');
const component = require('./templates/react/component');
const index = require('./templates/react/index');
const stories = require('./templates/react/stories');
const readme = require('./templates/react/readme');
const tsconfig = require('./templates/react/tsconfig');

const cwd = process.cwd();

module.exports = (modulePath, name, description, unstable) => {
  console.log(`\nCreating @workday/canvas-kit-react-${name}\n`);

  mkdirp(modulePath);

  const pascalCaseName = getPascalCaseName(name);
  const titleCaseName = getTitleCaseName(name);
  const rootPath = unstable ? '../../..' : '../..';
  const storyPath = unstable ? `Labs/${titleCaseName}` : titleCaseName;

  const files = {
    package: {
      path: 'package.json',
      contents: packageJson(name, description),
    },
    component: {
      path: `lib/${pascalCaseName}.tsx`,
      contents: component(pascalCaseName),
    },
    index: {
      path: 'index.ts',
      contents: index(pascalCaseName),
    },
    stories: {
      path: 'stories/stories.tsx',
      contents: stories(storyPath, pascalCaseName, rootPath),
    },
    readme: {
      path: 'README.md',
      contents: readme(titleCaseName, unstable),
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

  writeModuleFiles(files, modulePath);

  cmd.run(`cp ${cwd}/LICENSE ${modulePath}/LICENSE`);
};
