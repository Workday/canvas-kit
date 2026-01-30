import {Meta, StoryObj} from '@storybook/react';

import {Pagination} from '@workday/canvas-kit-react/pagination';

import {Basic as BasicExample} from './examples/Basic';
import {CustomRange as CustomRangeExample} from './examples/CustomRange';
import {GoToForm as GoToFormExample} from './examples/GoToForm';
import {HoistedModel as HoistedModelExample} from './examples/HoistedModel';
import {JumpControls as JumpControlsExample} from './examples/JumpControls';
import {RTL as RTLExample} from './examples/RTL';
import {ResponsiveRange as ResponsiveRangeExample} from './examples/ResponsiveRange';
import mdxDoc from './pagination.mdx';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  render: BasicExample,
};
export const CustomRange: Story = {
  render: CustomRangeExample,
};
export const JumpControls: Story = {
  render: JumpControlsExample,
};
export const GoToForm: Story = {
  render: GoToFormExample,
};
export const HoistedModel: Story = {
  render: HoistedModelExample,
};
export const ResponsiveRange: Story = {
  render: ResponsiveRangeExample,
};
export const RTL: Story = {
  render: RTLExample,
};
