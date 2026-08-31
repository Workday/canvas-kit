import {Meta, StoryObj} from '@storybook/react';

import {Flex} from '@workday/canvas-kit-react/layout';

import mdxDoc from './Flex.mdx';
// examples
import {Basic as BasicExample} from './examples/Flex/Basic';

export default {
  title: 'Components/Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Flex>;

type Story = StoryObj<typeof Flex>;

export const Basic: Story = {
  render: BasicExample,
};
