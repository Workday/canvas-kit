import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Testing.mdx';

import {Testing} from '@workday/canvas-kit-react/testing';
import {Basic as BasicExample} from './examples/Basic';

export default {
  title: 'Hooks and Utilities/Testing',
  component: Testing,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof Testing>;

type Story = StoryObj<typeof Testing>;

export const Basic: Story = {
  render: BasicExample,
};
