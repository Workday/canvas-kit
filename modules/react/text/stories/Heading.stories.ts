import {Meta, StoryObj} from '@storybook/react';

import {Heading} from '@workday/canvas-kit-react/text';

import mdxDoc from './Heading.mdx';
import {Basic as BasicExample} from './examples/Heading/Basic';

export default {
  title: 'Components/Text/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {
  render: BasicExample,
};
