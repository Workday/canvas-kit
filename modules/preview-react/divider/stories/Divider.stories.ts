import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Divider.mdx';

import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {Basic as BasicExample} from './examples/Basic';
import {CustomSpace as CustomSpaceExample} from './examples/CustomSpace';

export default {
  title: 'Preview/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
  render: BasicExample,
};
export const CustomSpace: Story = {
  render: CustomSpaceExample,
};
