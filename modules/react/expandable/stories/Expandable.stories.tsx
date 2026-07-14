import {Meta, StoryObj} from '@storybook/react';

import {Expandable} from '@workday/canvas-kit-react/expandable';

import mdxDoc from './Expandable.mdx';
import {Avatar as AvatarExample} from './examples/Avatar';
import {Depth as DepthExample} from './examples/Depth';
import {EndIcon as EndIconExample} from './examples/EndIcon';
import {HoistedModel as HoistedModelExample} from './examples/HoistedModel';
import {LongTitle as LongTitleExample} from './examples/LongTitle';
import {RTL as RTLExample} from './examples/RTL';
// examples
import {StartIcon as StartIconExample} from './examples/StartIcon';

export default {
  title: 'Components/Containers/Expandable',
  component: Expandable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Expandable>;

type Story = StoryObj<typeof Expandable>;

export const StartIcon: Story = {
  render: StartIconExample,
};
export const EndIcon: Story = {
  render: EndIconExample,
};
export const Avatar: Story = {
  render: AvatarExample,
};
export const Depth: Story = {
  render: DepthExample,
};
export const RTL: Story = {
  render: RTLExample,
};
export const LongTitle: Story = {
  render: LongTitleExample,
};
export const HoistedModel: Story = {
  render: HoistedModelExample,
};
