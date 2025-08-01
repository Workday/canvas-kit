import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './MultiSelect.mdx';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {Basic as BasicExample} from './examples/Basic';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Error as ErrorExample} from './examples/Error';
import {Icons as IconsExample} from './examples/Icons';
import {InitialSelectedItems as InitialSelectedItemsExample} from './examples/InitialSelectedItems';
import {Complex as ComplexExample} from './examples/Complex';
import {Controlled as ControlledExample} from './examples/Controlled';
import {Searching as SearchingExample} from './examples/Searching';

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

export const Disabled: Story = {
  render: DisabledExample,
};

export const Error: Story = {
  render: ErrorExample,
};

export const Icons: Story = {
  render: IconsExample,
};

export const InitialSelectedItems: Story = {
  render: InitialSelectedItemsExample,
};

export const Complex: Story = {
  render: ComplexExample,
};

export const Controlled: Story = {
  render: ControlledExample,
};

export const Searching: Story = {
  render: SearchingExample,
};
