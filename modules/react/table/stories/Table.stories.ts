import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Table.mdx';

import {Table} from '@workday/canvas-kit-react/table';
// Examples
import {Basic as BasicExample} from './examples/Basic';
import {BasicWithHeading as BasicWithHeadingExample} from './examples/BasicWithHeading';
import {FixedColumn as FixedColumnExample} from './examples/FixedColumn';
import {RightToLeft as RightToLeftExample} from './examples/RightToLeft';
import {StandardTable as StandardTableExample} from './examples/StandardTable';

export default {
  title: 'Components/Containers/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: BasicExample,
};
export const StandardTable: Story = {
  render: StandardTableExample,
};
export const BasicWithHeading: Story = {
  render: BasicWithHeadingExample,
};
export const FixedColumn: Story = {
  render: FixedColumnExample,
};
export const RightToLeft: Story = {
  render: RightToLeftExample,
};
