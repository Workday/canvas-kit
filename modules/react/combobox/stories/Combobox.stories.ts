import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Combobox.mdx';

import {Combobox} from '@workday/canvas-kit-react/combobox';
import {Autocomplete as AutocompleteExample} from './examples/Autocomplete';

export default {
  title: 'Features/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof Combobox>;

type Story = StoryObj<typeof Combobox>;

export const Docs: Story = {
  render: AutocompleteExample,
};
