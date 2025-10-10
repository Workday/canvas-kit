import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './CountBadge.mdx';

import {CountBadge} from '@workday/canvas-kit-react/badge';

import {Basic as BasicExample} from './examples/Basic';
import {Emphasis as EmphasisExample} from './examples/Emphasis';
import {Inverse as InverseExample} from './examples/Inverse';
import {CustomLimit as CustomLimitExample} from './examples/CustomLimit';
import {NotificationBadge as NotificationBadgeExample} from './examples/NotificationBadge';

export default {
  title: 'Components/Indicators/CountBadge',
  component: CountBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof CountBadge>;

type Story = StoryObj<typeof CountBadge>;

export const Basic: Story = {
  render: BasicExample,
};

export const Emphasis: Story = {
  render: EmphasisExample,
};

export const Inverse: Story = {
  render: InverseExample,
};

export const CustomLimit: Story = {
  render: CustomLimitExample,
};
export const NotificationBadge: Story = {
  render: NotificationBadgeExample,
};
