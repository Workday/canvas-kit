import {Meta, StoryObj} from '@storybook/react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

import mdxDoc from './SelectionGroup.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Caution as CautionExample} from './examples/Caution';
import {ColumnWidth as ColumnWidthExample} from './examples/ColumnWidth';
import {ContentWidth as ContentWidthExample} from './examples/ContentWidth';
import {Disabled as DisabledExample} from './examples/Disabled';
import {EqualWidth as EqualWidthExample} from './examples/EqualWidth';
import {Error as ErrorExample} from './examples/Error';
import {MultiSelect as MultiSelectExample} from './examples/MultiSelect';
import {RTL as RTLExample} from './examples/RTL';
import {SingleSelect as SingleSelectExample} from './examples/SingleSelect';

export default {
  title: 'Labs/Selection Group',
  component: SelectionGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof SelectionGroup>;

type Story = StoryObj<typeof SelectionGroup>;

export const Basic: Story = {
  render: BasicExample,
};
export const SingleSelect: Story = {
  render: SingleSelectExample,
};
export const MultiSelect: Story = {
  render: MultiSelectExample,
};
export const ContentWidth: Story = {
  render: ContentWidthExample,
};
export const EqualWidth: Story = {
  render: EqualWidthExample,
};
export const ColumnWidth: Story = {
  render: ColumnWidthExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const Caution: Story = {
  render: CautionExample,
};
export const RTL: Story = {
  render: RTLExample,
};
