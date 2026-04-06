import {Meta} from '@storybook/react';

import mdxDoc from './Assets.mdx';
import {SystemBasic} from './examples/SystemBasic';
import {SystemCustomStyles} from './examples/SystemCustomStyles';

export default {
  title: 'Assets/Preview/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const SystemIcons = {
  render: SystemBasic,
};

export const SystemIconsCustomStyles = {
  render: SystemCustomStyles,
};
