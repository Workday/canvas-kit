import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './LoadingSparkles.mdx';
import {LoadingSparkles} from '@workday/canvas-kit-preview-react/loading-sparkles';

// examples
import {Basic as BasicExample} from './examples/Basic';
import {RTL as RTLExample} from './examples/RTL';

export default {
  title: 'Preview/Loading Sparkles (AI)',
  component: LoadingSparkles,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof LoadingSparkles>;

type Story = StoryObj<typeof LoadingSparkles>;

export const Basic: Story = {render: BasicExample};
export const RTL: Story = {render: RTLExample};
