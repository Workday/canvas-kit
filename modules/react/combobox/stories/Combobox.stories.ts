import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Combobox.mdx';

import {Combobox} from '@workday/canvas-kit-react/combobox';
import {Autocomplete as AutocompleteExample} from './examples/Autocomplete';
import {SidebarOverflowExample as OverflowExample} from './examples/OverflowVerticalList';

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

export const Overflow: Story = {
  render: OverflowExample,
};
