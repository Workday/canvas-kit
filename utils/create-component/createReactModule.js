const mkdirp = require('mkdirp');
const {exec} = require('child_process');

require('colors');

const writeModuleFiles = require('./writeModuleFiles');

const {getCamelCaseName, getPascalCaseName, getTitleCaseName} = require('./nameUtils');

const packageJson = require('./templates/react/packageJson');
const model = require('./templates/react/model');
const component = require('./templates/react/component');
const componentTarget = require('./templates/react/component.target');
const componentContent = require('./templates/react/component.content');
const index = require('./templates/react/index');
const stories = require('./templates/react/stories');
const testingStories = require('./templates/react/stories_VisualTesting');
const ssr = require('./templates/react/SSR');
const readme = require('./templates/react/readme');
const tsconfig = require('./templates/react/tsconfig');

const cwd = process.cwd();

module.exports = (modulePath, name, description, unstable, public, category) => {
  const moduleName = `@workday/canvas-kit-${unstable ? 'labs-' : ''}react-${name}`;

  console.log('\nCreating ' + `${moduleName}\n`.blue.underline);

  mkdirp.sync(modulePath);

  const camelCaseName = getCamelCaseName(name);
  const pascalCaseName = getPascalCaseName(name);
  const titleCaseName = getTitleCaseName(name);
  const rootPath = unstable ? '../../../..' : '../../..';
  const storyPath = `${unstable ? 'Labs/' : `Components/${category}/`}${titleCaseName}/React`;
  const testingStoryPath = `Testing/React/${unstable ? 'Labs' : category}/${titleCaseName}`;

  const files = {
    package: {
      path: 'package.json',
      contents: packageJson(name, moduleName, description, unstable, public),
    },
    model: {
      path: `lib/use${pascalCaseName}Model.tsx`,
      contents: model(camelCaseName, pascalCaseName),
    },
    component: {
      path: `lib/${pascalCaseName}.tsx`,
      contents: component(pascalCaseName),
    },
    componentTarget: {
      path: `lib/${pascalCaseName}.Target.tsx`,
      contents: componentTarget(camelCaseName, pascalCaseName),
    },
    componentContent: {
      path: `lib/${pascalCaseName}.Content.tsx`,
      contents: componentContent(pascalCaseName),
    },
    index: {
      path: 'index.ts',
      contents: index(pascalCaseName),
    },
    stories: {
      path: 'stories/stories.tsx',
      contents: stories(moduleName, storyPath, pascalCaseName, rootPath),
    },
    testingStories: {
      path: 'stories/stories_VisualTesting.tsx',
      contents: testingStories(moduleName, testingStoryPath, pascalCaseName, rootPath),
    },
    ssr: {
      path: 'spec/SSR.spec.tsx',
      contents: ssr(pascalCaseName),
    },
    readme: {
      path: 'README.md',
      contents: readme(name, description, unstable),
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
    tsconfigSpec: {
      path: 'spec/tsconfig.json',
      contents: tsconfig.spec(),
    },
  };

  writeModuleFiles(files, modulePath);

  console.log('Copying License file to ' + `.${modulePath.replace(cwd, '')}/LICENSE`.cyan);
  exec(`cp ${cwd}/LICENSE ${modulePath}/LICENSE`);
};
