import {Meta, StoryObj} from '@storybook/react';

import {Card} from '@workday/canvas-kit-react/card';

import mdxDoc from './card.mdx';
import {Alt as AltExample} from './examples/Alt';
import {Basic as BasicExample} from './examples/Basic';
import {Tonal as TonalExample} from './examples/Tonal';

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

export const Alt: Story = {
  render: AltExample,
};

export const Tonal: Story = {
  render: TonalExample,
};
