import {Meta} from '@storybook/react';
import React from 'react';

import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';

import mdxDoc from './ColorPicker.mdx';

export {IconButtonPopup} from './examples/IconButtonPopup';
export {ColorInputPopup} from './examples/ColorInputPopup';

// eslint-disable-next-line no-empty-function
const noop = () => {};

export default {
  title: 'Preview/Color Picker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;

export const Basic = () => <ColorPicker onColorChange={noop} />;
