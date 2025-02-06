import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Tooltip.mdx';

import {Tooltip} from '@workday/canvas-kit-react/tooltip';

import {Default as DefaultExample} from './examples/Default';
import {CustomContent as CustomContentExample} from './examples/CustomContent';
import {DelayedTooltip as DelayedTooltipExample} from './examples/DelayedTooltip';
import {DescriptionType as DescriptionTypeExample} from './examples/DescriptionType';
import {DescribeType as DescribeTypeExample} from './examples/DescribeType';
import {Muted as MutedExample} from './examples/Muted';
import {Placements as PlacementsExample} from './examples/Placements';
import {Ellipsis as EllipsisExample} from './examples/Ellipsis';
import {LineClamp as LineClampExample} from './examples/LineClamp';
import {UseTooltip as UseTooltipExample} from './examples/UseTooltip';

export default {
  title: 'Components/Popups/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: DefaultExample,
};
export const CustomContent: Story = {
  render: CustomContentExample,
};
export const DelayedTooltip: Story = {
  render: DelayedTooltipExample,
};
export const DescriptionType: Story = {
  render: DescriptionTypeExample,
};
export const DescribeType: Story = {
  render: DescribeTypeExample,
};
export const Muted: Story = {
  render: MutedExample,
};
export const Placements: Story = {
  render: PlacementsExample,
};
export const Ellipsis: Story = {
  render: EllipsisExample,
};
export const LineClamp: Story = {
  render: LineClampExample,
};
export const UseTooltip: Story = {
  render: UseTooltipExample,
};
