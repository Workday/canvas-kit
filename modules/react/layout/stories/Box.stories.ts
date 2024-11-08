import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Box.mdx';

import {Box} from '@workday/canvas-kit-react/layout';
// examples
import {Basic as BasicExample} from './examples/Box/Basic';

export default {
  title: 'Components/Layout/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Box>;

type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  render: BasicExample,
};
