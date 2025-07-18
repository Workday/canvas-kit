import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './TextInput.mdx';

import {TextInput} from '@workday/canvas-kit-preview-react/text-input';

import {Basic as BasicExample} from './examples/Basic';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Grow as GrowExample} from './examples/Grow';
import {LabelPositionHorizontal as LabelPositionHorizontalExample} from './examples/LabelPositionHorizontal';
import {LabelPositionVertical as LabelPositionVerticalExample} from './examples/LabelPositionVertical';
import {Placeholder as PlaceholderExample} from './examples/Placeholder';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';
import {Hidden as HiddenExample} from './examples/Hidden';
import {ReadOnly as ReadOnlyExample} from './examples/ReadOnly';
import {Password as PasswordExample} from './examples/Password';
import {HiddenLabel as HiddenLabelExample} from './examples/HiddenLabel';
import {ThemedAlert as ThemedAlertExample} from './examples/ThemedAlert';
import {ThemedError as ThemedErrorExample} from './examples/ThemedError';
import {Error as ErrorExample} from './examples/Error';
import {Alert as AlertExample} from './examples/Alert';

export default {
  title: 'Preview/Inputs/Text Input (deprecated)',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  render: BasicExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const Grow: Story = {
  render: GrowExample,
};
export const LabelPositionHorizontal: Story = {
  render: LabelPositionHorizontalExample,
};
export const LabelPositionVertical: Story = {
  render: LabelPositionVerticalExample,
};
export const Placeholder: Story = {
  render: PlaceholderExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const Required: Story = {
  render: RequiredExample,
};
export const HiddenInput: Story = {
  render: HiddenExample,
};
export const ReadOnly: Story = {
  render: ReadOnlyExample,
};
export const Password: Story = {
  render: PasswordExample,
};
export const HiddenLabel: Story = {
  render: HiddenLabelExample,
};
export const ThemedAlert: Story = {
  render: ThemedAlertExample,
};
export const ThemedError: Story = {
  render: ThemedErrorExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const Alert: Story = {
  render: AlertExample,
};
