import {Meta, StoryObj} from '@storybook/react';

import {Box} from '@workday/canvas-kit-react/layout';

import mdxDoc from './Box.mdx';
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
