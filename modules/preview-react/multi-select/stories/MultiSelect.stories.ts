import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './MultiSelect.mdx';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {Basic as BasicExample} from './examples/Basic';
import {Complex as ComplexExample} from './examples/Complex';

export default {
  title: 'Preview/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof MultiSelect>;

type Story = StoryObj<typeof MultiSelect>;

export const Basic: Story = {
  render: BasicExample,
};

export const Complex: Story = {
  render: BasicExample,
};
