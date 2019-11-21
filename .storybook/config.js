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
addDecorator(InputProviderDecorator);
addDecorator(FontsDecorator);

const sectionOrder = ['Welcome', 'Tokens', 'Components', 'Labs'];
const sectionRegex = /^([^|\/]*)/g;

/* a = Welcome|Getting Started b = Components|Buttons
  regex, get chars up to |
  Compare order to list of sections
    - if different, sort based on that
    - if same, use alpha
 */

addParameters({
  options: {
    theme: create({
      brandTitle: 'Canvas Kit',
      mainTextColor: typeColors.body,
      mainTextFace: fontFamily,
      mainBackground: commonColors.backgroundAlt,
    }),
    storySort: (a, b) => {
      const aMatch = a[1].kind.match(sectionRegex);
      const bMatch = b[1].kind.match(sectionRegex);

      if (aMatch && bMatch) {
        const aSection = aMatch[0];
        const bSection = bMatch[0];
        if (aSection !== bSection) {
          return sectionOrder.indexOf(aSection) - sectionOrder.indexOf(bSection);
        }
      }

      return a[1].id.localeCompare(b[1].id);
    },
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
