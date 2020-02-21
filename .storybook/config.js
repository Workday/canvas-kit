import {configure, addDecorator, addParameters} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import {withKnobs} from '@storybook/addon-knobs/react';
import {create} from '@storybook/theming';
import 'cypress-storybook/react';

import {commonColors, typeColors, fontFamily} from '../modules/core/react';
import {CanvasProviderDecorator, FontsDecorator} from '../utils/storybook';

const reqMDXWelcome = require.context('./stories', true, /\.mdx$/);
const reqMDX = require.context('../modules', true, /\.mdx$/);
const reqCSF = require.context('../modules', true, /stories.*\.tsx?$/);

const allReqs = [reqMDXWelcome, reqMDX, reqCSF];

function loadStories() {
  const allExports = [];

  allReqs.forEach(req => {
    req.keys().forEach(fname => {
      const story = req(fname);

      if (story.default) allExports.push(story);
    });
  });

  return allExports;
}

addDecorator(withKnobs);
addDecorator(FontsDecorator);
addDecorator(CanvasProviderDecorator);

/** If the string contains a phrase, prefix it. This is useful for making ordering sections */
const prefix = (phrase, prefix) => (/** @type {string} */ value) => {
  const index = value.indexOf(phrase);
  return index > -1 ? value.substr(0, index) + prefix + value.substr(index) : value;
};
const pipe = (...fns) => value => fns.reduce((result, fn) => fn(result), value);

function storySort(a, b) {
  const prefixFn = pipe(
    prefix('welcome-', '0'),
    prefix('getting-started', 'a'),
    prefix('tokens-', '1'),
    prefix('components-', '2'),
    prefix('labs-', '3'),
    prefix('default', 'aa'),
    prefix('visual-testing', 'zz')
  );

  const left = prefixFn(a[0]);
  const right = prefixFn(b[0]);

  return left === right ? 0 : left.localeCompare(right);
}

addParameters({
  options: {
    theme: create({
      brandTitle: 'Canvas Kit',
      mainTextColor: typeColors.body,
      mainTextFace: fontFamily,
      mainBackground: commonColors.backgroundAlt,
    }),
    storySort,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  readme: {
    codeTheme: 'github',
  },
  chromatic: {
    disable: true
  }
});

configure(loadStories, module);
