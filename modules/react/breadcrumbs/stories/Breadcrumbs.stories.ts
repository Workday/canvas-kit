import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Breadcrumbs.mdx';

import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

import {Basic as BasicExample} from './examples/Basic';
import {OverflowBreadcrumbs as OverflowBreadcrumbsExample} from './examples/Overflow';
import {RTLOverflowList as RTLOverflowListExample} from './examples/RTL';
import {CurrentItemTruncation as CurrentItemTruncationExample} from './examples/CurrentItemTruncation';
import {LinkTruncation as LinkTruncationExample} from './examples/LinkTruncation';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
  render: BasicExample,
};
export const OverflowBreadcrumbs: Story = {
  render: OverflowBreadcrumbsExample,
};
export const RTLOverflowList: Story = {
  render: RTLOverflowListExample,
};
export const CurrentItemTruncation: Story = {
  render: CurrentItemTruncationExample,
};
export const LinkTruncation: Story = {
  render: LinkTruncationExample,
};
