import {configure, addDecorator, addParameters, forceReRender} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import {withKnobs} from '@storybook/addon-knobs/react';
import {create} from '@storybook/theming';
import addons from '@storybook/addons';
import Events from '@storybook/core-events';
import {toId} from '@storybook/router';
import ReactDOM from 'react-dom';

import {commonColors, typeColors, fontFamily} from '../modules/core/react';
import {InputProviderDecorator, FontsDecorator} from '../utils/storybook';
const req = require.context('../modules', true, /stories.*\.tsx?$/);

function loadStories() {
  const allExports = [];
  req.keys().forEach(fname => {
    const story = req(fname);
    if (story.default) allExports.push(story);
  });

  return allExports;
}

addDecorator(withKnobs);
addDecorator(InputProviderDecorator);
addDecorator(FontsDecorator);

addParameters({
  options: {
    theme: create({
      brandTitle: 'Canvas Kit',
      mainTextColor: typeColors.body,
      mainTextFace: fontFamily,
      mainBackground: commonColors.backgroundAlt,
    }),
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
