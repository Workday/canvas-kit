import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './ColorInput.mdx';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';

import {Caution as CautionExample} from './examples/Caution';
import {Basic as BasicExample} from './examples/Basic';
import {Checked as CheckedExample} from './examples/Checked';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Error as ErrorExample} from './examples/Error';
import {Grow as GrowExample} from './examples/Grow';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';
import {ValidColorChange as ValidColorChangeExample} from './examples/ValidColorChange';

export default {
  title: 'Components/Inputs/Color Picker/Color Input',
  component: ColorInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof ColorInput>;

type Story = StoryObj<typeof ColorInput>;

export const Caution: Story = {
  render: CautionExample,
};
export const Basic: Story = {
  render: BasicExample,
};
export const Checked: Story = {
  render: CheckedExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const Grow: Story = {
  render: GrowExample,
};
export const LabelPosition: Story = {
  render: LabelPositionExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const Required: Story = {
  render: RequiredExample,
};
export const ValidColorChange: Story = {
  render: ValidColorChangeExample,
};
