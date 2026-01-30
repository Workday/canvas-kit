import {Meta, StoryObj} from '@storybook/react';

import {ColorPreview} from '@workday/canvas-kit-react/color-picker';

import mdxDoc from './ColorPreview.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';

export default {
  title: 'Components/Inputs/Color Picker/Color Preview',
  component: ColorPreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof ColorPreview>;

type Story = StoryObj<typeof ColorPreview>;

export const Basic: Story = {
  render: BasicExample,
};
export const LabelPosition: Story = {
  render: LabelPositionExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
