import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './SegmentedControl.mdx';

import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

import {Basic as BasicExample} from './examples/Basic';
import {Disabled as DisabledExample} from './examples/Disabled';
import {TextAndIcon as TextAndIconExample} from './examples/TextAndIcon';
import {TextOnly as TextOnlyExample} from './examples/TextOnly';
import {Sizes as SizesExample} from './examples/Sizes';
import {Vertical as VerticalExample} from './examples/Vertical';
import {RTL as RTLExample} from './examples/RTL';
import {Dynamic as DynamicExample} from './examples/Dynamic';

export default {
  title: 'Preview/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Basic: Story = {
  render: BasicExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const TextAndIcon: Story = {
  render: TextAndIconExample,
};
export const TextOnly: Story = {
  render: TextOnlyExample,
};
export const Sizes: Story = {
  render: SizesExample,
};
export const Vertical: Story = {
  render: VerticalExample,
};
export const RTL: Story = {
  render: RTLExample,
};
export const Dynamic: Story = {
  render: DynamicExample,
};
