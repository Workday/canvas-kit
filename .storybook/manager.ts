import React from 'react';
import {addons} from '@storybook/manager-api';
// import canvasTheme from './theme';
import {Label} from './Label';
import { themes } from '@storybook/theming';

// addons.setConfig({
  
// });

addons.setConfig({
  theme: themes.dark,
  sidebar: {
    renderLabel: Label,
  },
});
