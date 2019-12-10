import {configure, addDecorator, addParameters, forceReRender} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import {withKnobs} from '@storybook/addon-knobs/react';
import {create} from '@storybook/theming';
import addons from '@storybook/addons';
import Events from '@storybook/core-events';
import {toId} from '@storybook/router';
import ReactDOM from 'react-dom';

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
const prefix = (phrase, prefix) => value => (value.indexOf(phrase) > -1 ? prefix + value : value);
const pipe = (...fns) => value => fns.reduce((result, fn) => fn(result), value);

function storySort(a, b) {
  const prefixFn = pipe(
    prefix('welcome-', '0'),
    prefix('getting-started', '0'),
    prefix('tokens-', '1'),
    prefix('components-', '2'),
    prefix('labs-', '3')
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
});

configure(loadStories, module);

function setCurrentStory(categorization, story) {
  clearCurrentStory();
  addons.getChannel().emit(Events.SET_CURRENT_STORY, {
    storyId: toId(categorization, story),
  });
  forceReRender();
}

function clearCurrentStory() {
  var root = document.querySelector('#root');
  ReactDOM.unmountComponentAtNode(root);
}

window.setCurrentStory = setCurrentStory;
