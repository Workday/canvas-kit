import {Meta} from '@storybook/react';

import mdxDoc from './KBD.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {RTL as RTLExample} from './examples/RTL';

export default {
  title: 'Labs/KBD',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Basic = {
  render: BasicExample,
};

export const RTL = {
  render: RTLExample,
};
