import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Radio.mdx';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

import {Basic as BasicExample} from './examples/Basic';
import {Alert as AlertExample} from './examples/Alert';
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
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  render: BasicExample,
};
export const Alert: Story = {
  render: AlertExample,
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
