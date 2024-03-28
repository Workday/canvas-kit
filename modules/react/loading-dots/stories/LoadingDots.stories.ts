import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './LoadingDots.mdx';

import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

import {Basic as BasicExample} from './examples/Basic';
import {RTL as RTLExample} from './examples/RTL';
import {Accessible as AccessibleExample} from './examples/Accessible';

export default {
  title: 'Components/Indicators/Loading Dots',
  component: LoadingDots,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof LoadingDots>;

type Story = StoryObj<typeof LoadingDots>;

export const Basic: Story = {
  render: BasicExample,
};
export const RTL: Story = {
  render: RTLExample,
};
export const Accessible: Story = {
  render: AccessibleExample,
};
