import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Subtext.mdx';

import {Subtext} from '@workday/canvas-kit-react/text';

import {Basic as BasicExample} from './examples/Subtext/Basic';

export default {
  title: 'Components/Text/Subtext',
  component: Subtext,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Subtext>;

type Story = StoryObj<typeof Subtext>;

export const Basic: Story = {
  render: BasicExample,
};
