import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './pagination.mdx';

import {Pagination} from '@workday/canvas-kit-react/pagination';

import {Basic as BasicExample} from './examples/Basic';
import {CustomRange as CustomRangeExample} from './examples/CustomRange';
import {JumpControls as JumpControlsExample} from './examples/JumpControls';
import {GoToForm as GoToFormExample} from './examples/GoToForm';
import {HoistedModel as HoistedModelExample} from './examples/HoistedModel';
import {ResponsiveRange as ResponsiveRangeExample} from './examples/ResponsiveRange';
import {RTL as RTLExample} from './examples/RTL';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
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
