import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './HtmlTable.mdx';

import {HtmlTable} from '@workday/canvas-kit-preview-react/html-table';
// Examples
import {Basic as BasicExample} from './examples/Basic';
import {BasicWithHeading as BasicWithHeadingExample} from './examples/BasicWithHeading';
import {FixedColumn as FixedColumnExample} from './examples/FixedColumn';
import {RightToLeft as RightToLeftExample} from './examples/RightToLeft';

export default {
  title: 'Preview/HtmlTable',
  component: HtmlTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof HtmlTable>;

type Story = StoryObj<typeof HtmlTable>;

export const Basic: Story = {
  render: BasicExample,
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
