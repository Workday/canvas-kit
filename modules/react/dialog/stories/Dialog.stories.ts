import {Meta, StoryObj} from '@storybook/react';

import {Dialog} from '@workday/canvas-kit-react/dialog';

import mdxDoc from './Dialog.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Focus as FocusExample} from './examples/Focus';

export default {
  title: 'Components/Popups/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: BasicExample,
};
export const Focus: Story = {
  render: FocusExample,
};
