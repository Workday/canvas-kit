import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './card.mdx';

import {Card} from '@workday/canvas-kit-react/card';

import {Basic as BasicExample} from './examples/Basic';
import {Depth as DepthExample} from './examples/Depth';
import {Padding as PaddingExample} from './examples/Padding';

export default {
  title: 'Components/Containers/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: BasicExample,
};
export const Depth: Story = {
  render: DepthExample,
};
export const Padding: Story = {
  render: PaddingExample,
};
