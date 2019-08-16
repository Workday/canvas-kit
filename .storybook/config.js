import {configure, addDecorator, addParameters} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs/react';
import {injectGlobal} from 'emotion';
import fonts from '../modules/fonts/react';
import {create} from '@storybook/theming';
import {commonColors, typeColors, fontFamily} from '../modules/core/react';

const req = require.context('../modules', true, /stories.*\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withKnobs);

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
