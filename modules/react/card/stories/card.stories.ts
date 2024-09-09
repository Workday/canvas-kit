import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './card.mdx';

import {Card} from '@workday/canvas-kit-react/card';

import {Basic as BasicExample} from './examples/Basic';

export default {
  title: 'Components/Containers/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: BasicExample,
};
