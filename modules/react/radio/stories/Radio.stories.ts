import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Radio.mdx';

import {Radio} from '@workday/canvas-kit-react/radio';

import {Caution as CautionExample} from './examples/Caution';
import {Basic as BasicExample} from './examples/Basic';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Inverse as InverseExample} from './examples/Inverse';
import {Error as ErrorExample} from './examples/Error';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {NoValue as NoValueExample} from './examples/NoValue';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';

export default {
  title: 'Components/Inputs/Radio (deprecated)',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Caution: Story = {
  render: CautionExample,
};
export const Basic: Story = {
  render: BasicExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const Inverse: Story = {
  render: InverseExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const LabelPosition: Story = {
  render: LabelPositionExample,
};
export const NoValue: Story = {
  render: NoValueExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const Required: Story = {
  render: RequiredExample,
};
