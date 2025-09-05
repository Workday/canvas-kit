import React from 'react';
import {addons} from '@storybook/manager-api';
import canvasTheme from './theme';
import {Label} from './Label';

addons.setConfig({
  theme: canvasTheme,
  sidebar: {
    renderLabel: Label,
  },
});
