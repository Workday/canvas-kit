import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './LoadingDots.mdx';

import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

import {Basic as BasicExample} from './examples/Basic';
import {RTL as RTLExample} from './examples/RTL';
import {Accessible as AccessibleExample} from './examples/Accessible';
import {CustomShape as CustomShapeExample} from './examples/CustomShape';
import {CustomColorAndAnimation as CustomColorAndAnimationExample} from './examples/CustomColorAndAnimation';
import {Inverse as InverseExample} from './examples/Inverse';

export default {
  title: 'Components/Indicators/Loading Dots',
  component: LoadingDots,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
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
export const CustomShape: Story = {
  render: CustomShapeExample,
};
export const CustomColorAndAnimation: Story = {
  render: CustomColorAndAnimationExample,
};
export const Inverse: Story = {
  render: InverseExample,
};
