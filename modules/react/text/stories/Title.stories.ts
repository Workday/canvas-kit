import {Meta, StoryObj} from '@storybook/react';

import {Title} from '@workday/canvas-kit-react/text';

import mdxDoc from './Title.mdx';
import {Basic as BasicExample} from './examples/Title/Basic';

export default {
  title: 'Components/Text/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Basic: Story = {
  render: BasicExample,
};
