import {Meta, StoryObj} from '@storybook/react';

import {Combobox} from '@workday/canvas-kit-react/combobox';

import mdxDoc from './Combobox.mdx';
import {Autocomplete as AutocompleteExample} from './examples/Autocomplete';

export default {
  title: 'Features/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Combobox>;

type Story = StoryObj<typeof Combobox>;

export const Autocomplete: Story = {
  render: AutocompleteExample,
};
