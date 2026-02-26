import {Meta, StoryObj} from '@storybook/react';

import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

import mdxDoc from './LoadingDots.mdx';
import {Accessible as AccessibleExample} from './examples/Accessible';
import {Basic as BasicExample} from './examples/Basic';
import {CustomColorAndAnimation as CustomColorAndAnimationExample} from './examples/CustomColorAndAnimation';
import {CustomShape as CustomShapeExample} from './examples/CustomShape';
import {Inverse as InverseExample} from './examples/Inverse';
import {RTL as RTLExample} from './examples/RTL';

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
