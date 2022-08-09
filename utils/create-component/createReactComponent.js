const mkdirp = require('mkdirp');
const {exec} = require('child_process');
const {consoleMessage} = require('./consoleUtils');

const writeModuleFiles = require('./writeModuleFiles');

const {getCamelCaseName, getPascalCaseName, getTitleCaseName} = require('./nameUtils');

const model = require('./templates/react/model');
const component = require('./templates/react/component');
const componentTarget = require('./templates/react/component.target');
const componentContent = require('./templates/react/component.content');
const subcomponentContentHook = require('./templates/react/hook.content');
const subcomponentTargetHook = require('./templates/react/hook.target');
const index = require('./templates/react/index');
const hooksIndex = require('./templates/react/hook.index');
const stories = require('./templates/react/stories');
const testingStories = require('./templates/react/stories_VisualTesting');
const ssr = require('./templates/react/SSR');
const readme = require('./templates/react/readme');
const tsconfig = require('./templates/react/tsconfig');

const cwd = process.cwd();

module.exports = (modulePath, name, description, prerelease, category) => {
  const moduleName = `@workday/canvas-kit-${prerelease && prerelease + '-'}react/${name}`;

  consoleMessage('\nCreating', `${moduleName}\n`);

  mkdirp.sync(modulePath);

  const prereleaseTitle = prerelease && prerelease.charAt(0).toUpperCase() + prerelease.slice(1);
  const camelCaseName = getCamelCaseName(name);
  const pascalCaseName = getPascalCaseName(name);
  const titleCaseName = getTitleCaseName(name);
  const rootPath = '../../..';
  const storyPath = `${prereleaseTitle || `Components/${category}`}/${titleCaseName}/React`;
  const testingStoryPath = `Testing/React/${prereleaseTitle || category}/${titleCaseName}`;

  const files = {
    model: {
      path: `lib/hooks/use${pascalCaseName}Model.tsx`,
      contents: model(pascalCaseName),
    },
    component: {
      path: `lib/${pascalCaseName}.tsx`,
      contents: component(pascalCaseName, titleCaseName),
    },
    componentTarget: {
      path: `lib/${pascalCaseName}Target.tsx`,
      contents: componentTarget(pascalCaseName),
    },
    componentContent: {
      path: `lib/${pascalCaseName}Content.tsx`,
      contents: componentContent(pascalCaseName),
    },
    hookContent: {
      path: `lib/hooks/use${pascalCaseName}Content.tsx`,
      contents: subcomponentContentHook(pascalCaseName),
    },
    hookTarget: {
      path: `lib/hooks/use${pascalCaseName}Target.tsx`,
      contents: subcomponentTargetHook(pascalCaseName),
    },
    hookIndex: {
      path: `lib/hooks/index.ts`,
      contents: hooksIndex(pascalCaseName),
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
      contents: readme(name, description, prerelease),
    },
    tsconfigSpec: {
      path: 'spec/tsconfig.json',
      contents: tsconfig.spec(`../${rootPath}`),
    },
    tsconfigStories: {
      path: 'stories/tsconfig.json',
      contents: tsconfig.stories(`../${rootPath}`),
    },
  };

  writeModuleFiles(files, modulePath);

  consoleMessage('\nCopying License file to', `.${modulePath.replace(cwd, '')}/LICENSE`);
  exec(`cp ${cwd}/LICENSE ${modulePath}/LICENSE`);
};
