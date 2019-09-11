import {configure, addDecorator, addParameters, forceReRender} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs/react';
import {injectGlobal} from 'emotion';
import fonts from '../modules/fonts/react';
import {create} from '@storybook/theming';
import addons from '@storybook/addons';
import Events from '@storybook/core-events';
import {toId} from '@storybook/router';
import ReactDOM from 'react-dom';

import {commonColors, typeColors, fontFamily} from '../modules/core/react';
import {InputProviderDecorator} from '../utils/storybook';
const req = require.context('../modules', true, /stories.*\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withKnobs);
addDecorator(InputProviderDecorator);

addParameters({
  options: {
    theme: create({
      brandTitle: 'Canvas Kit',
      mainTextColor: typeColors.body,
      mainTextFace: fontFamily,
      mainBackground: commonColors.backgroundAlt,
    }),
  },
});

addParameters({
  readme: {
    codeTheme: 'github',
  },
});

configure(loadStories, module);
injectGlobal(...fonts);

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
