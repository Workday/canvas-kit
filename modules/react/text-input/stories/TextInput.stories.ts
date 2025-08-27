import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './TextInput.mdx';

import {TextInput} from '@workday/canvas-kit-react/text-input';

import {Caution as CautionExample} from './examples/Caution';
import {Basic as BasicExample} from './examples/Basic';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Error as ErrorExample} from './examples/Error';
import {Grow as GrowExample} from './examples/Grow';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {Placeholder as PlaceholderExample} from './examples/Placeholder';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';
import {Icons as IconsExample} from './examples/Icons';

export default {
  title: 'Components/Inputs/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Caution: Story = {
  render: CautionExample,
};
export const Basic: Story = {
  render: BasicExample,
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
export const Placeholder: Story = {
  render: PlaceholderExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const Required: Story = {
  render: RequiredExample,
};
export const Icons: Story = {
  render: IconsExample,
};
