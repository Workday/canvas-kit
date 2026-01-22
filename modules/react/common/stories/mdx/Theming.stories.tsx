import {Meta} from '@storybook/react';
import mdxDoc from './Theming.mdx';

import {Theming as ThemingExample} from './examples/Theming';
import {RTL as RTLExample} from './examples/RTL';

export default {
  title: 'Features/Theming',
  // tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Theming = {
  render: ThemingExample,
};

export const RTL = {
  render: RTLExample,
};
