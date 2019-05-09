import {configure, addDecorator} from '@storybook/react';
import {withOptions} from '@storybook/addon-options';
import {withKnobs} from '@storybook/addon-knobs/react';
import {themes} from '@storybook/components';
import {injectGlobal} from 'emotion';
import fonts from '../modules/canvas-kit-react-fonts';
import {commonColors, typeColors, fontFamily} from '../modules/canvas-kit-react-core';

const req = require.context('../modules', true, /stories.*\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withKnobs);

addDecorator(
  withOptions({
    name: 'Canvas Kit React',
    theme: {
      ...themes.normal,
      mainTextColor: typeColors.body,
      mainTextFace: fontFamily,
      mainBackground: commonColors.backgroundAlt,
    },
  })
);

configure(loadStories, module);
injectGlobal(...fonts);
