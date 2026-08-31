import mkdirp from 'mkdirp';
import {exec} from 'node:child_process';

import {consoleMessage} from './consoleUtils.js';
import {getPascalCaseName, getTitleCaseName} from './nameUtils.js';
import ssr from './templates/react/SSR.js';
import componentContent from './templates/react/component.content.js';
import component from './templates/react/component.js';
import componentTarget from './templates/react/component.target.js';
import subcomponentContentHook from './templates/react/hook.content.js';
import hooksIndex from './templates/react/hook.index.js';
import subcomponentTargetHook from './templates/react/hook.target.js';
import index from './templates/react/index.js';
import model from './templates/react/model.js';
import readme from './templates/react/readme.js';
import basicStories from './templates/react/stories.basic.js';
import mdxStories from './templates/react/stories.mdx.js';
import openStories from './templates/react/stories.open.js';
import testingStories from './templates/react/stories.visualTesting.js';
import tsconfig from './templates/react/tsconfig.js';
import writeModuleFiles from './writeModuleFiles.js';

const cwd = process.cwd();

const createReactComponent = (modulePath, name, description, prerelease, category) => {
  const moduleName = `@workday/canvas-kit-${prerelease && prerelease + '-'}react/${name}`;

  consoleMessage('\nCreating', `${moduleName}\n`);

  mkdirp.sync(modulePath);

  const prereleaseTitle = prerelease && prerelease.charAt(0).toUpperCase() + prerelease.slice(1);
  const pascalCaseName = getPascalCaseName(name);
  const titleCaseName = getTitleCaseName(name);
  const rootPath = '../../..';
  const storyPath = `${prereleaseTitle || `Components/${category}`}/${titleCaseName}`;
  const testingStoryPath = `Testing/${prereleaseTitle || category}/${titleCaseName}`;

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
    mdxStories: {
      path: `stories/${pascalCaseName}.stories.mdx`,
      contents: mdxStories(
        moduleName,
        storyPath,
        pascalCaseName,
        titleCaseName,
        prerelease,
        description
      ),
    },
    basicStories: {
      path: `stories/examples/Basic.tsx`,
      contents: basicStories(moduleName, pascalCaseName),
    },
    openStories: {
      path: `stories/examples/Open.tsx`,
      contents: openStories(moduleName, pascalCaseName),
    },
    testingStories: {
      path: `stories/visual-testing/stories_${pascalCaseName}.tsx`,
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

export default createReactComponent;
