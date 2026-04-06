import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './Radio.mdx';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

import {Basic as BasicExample} from './examples/Basic';
import {Caution as CautionExample} from './examples/Caution';
import {Error as ErrorExample} from './examples/Error';
import {Inverse as InverseExample} from './examples/Inverse';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {NoValue as NoValueExample} from './examples/NoValue';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Required as RequiredExample} from './examples/Required';
import {Custom as CustomExample} from './examples/Custom';
import {StandaloneRadio as StandaloneRadioExample} from './examples/StandaloneRadio';

export default {
  title: 'Preview/Inputs/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  render: BasicExample,
};
export const Caution: Story = {
  render: CautionExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const Inverse: Story = {
  render: InverseExample,
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
export const Disabled: Story = {
  render: DisabledExample,
};
export const Required: Story = {
  render: RequiredExample,
};
export const Custom: Story = {
  render: CustomExample,
};
export const StandaloneRadio: Story = {
  render: StandaloneRadioExample,
};
