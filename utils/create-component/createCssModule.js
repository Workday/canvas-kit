const path = require('path');
const mkdirp = require('mkdirp');

const writeModuleFiles = require('./writeModuleFiles');

const packageJson = require('./templates/css/packageJson');
const component = require('./templates/css/component');
const index = require('./templates/css/index');
const stories = require('./templates/css/stories');
const readme = require('./templates/css/readme');

module.exports = (modulePath, name, description, unstable) => {
  const upperName = name; // TODO
  const storyPath = unstable ? `Labs/CSS/${upperName}` : `CSS/${upperName}`;

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
      contents: readme(name, unstable),
    },
  };

  mkdirp(path.join(modulePath, 'lib'));
  mkdirp(path.join(modulePath, 'stories'));

  writeModuleFiles(files, modulePath);
};
