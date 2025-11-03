import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Checkbox.mdx';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';

import {Caution as CautionExample} from './examples/Caution';
import {Basic as BasicExample} from './examples/Basic';
import {Inverse as InverseExample} from './examples/Inverse';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Error as ErrorExample} from './examples/Error';
import {Indeterminate as IndeterminateExample} from './examples/Indeterminate';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Caution: Story = {
  render: CautionExample,
};
export const Basic: Story = {
  render: BasicExample,
};
export const Inverse: Story = {
  render: InverseExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const Indeterminate: Story = {
  render: IndeterminateExample,
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
