import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Testing.mdx';

import {Basic} from './examples/Basic';

export default {
  title: 'Hooks and Utilities/Testing',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta;

type Story = StoryObj;

export const Docs: Story = {
  render: Basic,
};
