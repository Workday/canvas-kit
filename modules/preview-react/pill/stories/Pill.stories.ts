import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './Pill.mdx';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// examples
import {WithReadOnly as WithReadOnlyExample} from './examples/WithReadOnly';
import {WithAvatar as WithAvatarExample} from './examples/WithAvatar';
import {Basic as BasicExample} from './examples/Basic';
import {WithCount as WithCountExample} from './examples/WithCount';
import {WithRemovable as WithRemovableExample} from './examples/WithRemovable';
import {WithList as WithListExample} from './examples/WithList';
import {CustomStyles as CustomStylesExample} from './examples/CustomStyles';

export default {
  title: 'Preview/Pill',
  component: Pill,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Pill>;

type Story = StoryObj<typeof Pill>;

export const WithReadOnly: Story = {
  render: WithReadOnlyExample,
};
export const WithAvatar: Story = {
  render: WithAvatarExample,
};
export const Basic: Story = {
  render: BasicExample,
};
export const WithCount: Story = {
  render: WithCountExample,
};
export const WithRemovable: Story = {
  render: WithRemovableExample,
};
export const WithList: Story = {
  render: WithListExample,
};

export const CustomStyles: Story = {
  render: CustomStylesExample,
};
