import {Meta, StoryObj} from '@storybook/react';

import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';

import mdxDoc from './StatusIndicator.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Emphasis as EmphasisExample} from './examples/Emphasis';
import {Icon as IconExample} from './examples/Icon';
import {MaxWidth as MaxWidthExample} from './examples/MaxWidth';

export default {
  title: 'Components/Indicators/Status Indicator (deprecated)',
  component: StatusIndicator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof StatusIndicator>;

type Story = StoryObj<typeof StatusIndicator>;

export const Basic: Story = {
  render: BasicExample,
};
export const Icon: Story = {
  render: IconExample,
};
export const Emphasis: Story = {
  render: EmphasisExample,
};
export const MaxWidth: Story = {
  render: MaxWidthExample,
};
