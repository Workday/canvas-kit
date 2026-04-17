import {Meta, StoryObj} from '@storybook/react';

import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

import mdxDoc from './Breadcrumbs.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {CurrentItemTruncation as CurrentItemTruncationExample} from './examples/CurrentItemTruncation';
import {LinkTruncation as LinkTruncationExample} from './examples/LinkTruncation';
import {OverflowBreadcrumbs as OverflowBreadcrumbsExample} from './examples/Overflow';
import {RTLOverflowList as RTLOverflowListExample} from './examples/RTL';

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
  // @ts-ignore Storybook doesn't allow the use of props within components
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
