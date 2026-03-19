import {Meta, StoryObj} from '@storybook/react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

import mdxDoc from './StatusIndicator.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Emphasis as EmphasisExample} from './examples/Emphasis';
import {Icon as IconExample} from './examples/Icon';
import {Overflow as OverflowExample} from './examples/Overflow';
import {Variants as VariantsExample} from './examples/Variants';

export default {
  title: 'Preview/Status Indicator',
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
export const Emphasis: Story = {
  render: EmphasisExample,
};
export const Icon: Story = {
  render: IconExample,
};
export const Overflow: Story = {
  render: OverflowExample,
};
export const Variants: Story = {
  render: VariantsExample,
};
