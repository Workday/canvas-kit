import {Meta} from '@storybook/react';

import mdxDoc from './Assets.mdx';
import {ExpressiveBasic} from './examples/ExpressiveBasic';
import {ExpressiveCustomStyles} from './examples/ExpressiveCustomStyles';
import {SystemBasic} from './examples/SystemBasic';
import {SystemCustomStyles} from './examples/SystemCustomStyles';

export default {
  title: 'Assets/Icon Components',
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

export const ExpressiveIcons = {
  name: 'Expressive Icons (new)',
  render: ExpressiveBasic,
};

export const ExpressiveIconsCustomStyles = {
  render: ExpressiveCustomStyles,
};
