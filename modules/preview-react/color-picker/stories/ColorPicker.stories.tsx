import {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';

import {ColorInputPopup as ColorInputPopupExample} from './examples/ColorInputPopup';
import {IconButtonPopup as IconButtonPopupExample} from './examples/IconButtonPopup';

// eslint-disable-next-line no-empty-function
const noop = () => {};

const meta: Meta<typeof ColorPicker> = {
  title: 'Preview/Color Picker',
  component: ColorPicker,
  parameters: {
    ReadmePath: 'preview-react/color-picker',
  },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <ColorPicker onColorChange={noop} />,
};

export const IconButtonPopup: StoryObj = {
  name: 'Icon button Popup',
  render: IconButtonPopupExample,
};

export const ColorInputPopup: StoryObj = {
  name: 'Color Input Popup',
  render: ColorInputPopupExample,
};
