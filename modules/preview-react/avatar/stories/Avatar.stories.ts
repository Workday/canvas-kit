import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Avatar.mdx';

import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

import {Basic as BasicExample} from './examples/Basic';

export default {
  title: 'Preview/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: BasicExample,
};
