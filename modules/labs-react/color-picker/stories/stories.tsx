/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {ColorPicker} from '@workday/canvas-kit-labs-react/color-picker';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

export default {
  title: 'Labs/Color Picker/React',
  decorators: [withReadme(README)],
  component: ColorPicker,
};

export const Default = () => (
  <ColorPicker>
    <ColorPicker.Swatch color="red" />
  </ColorPicker>
);
