import {Meta, StoryObj} from '@storybook/react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';

import mdxDoc from './Switch.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Caution as CautionExample} from './examples/Caution';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Error as ErrorExample} from './examples/Error';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {RTL as RTLExample} from './examples/RTL';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';

export default {
  title: 'Preview/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

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
export const LabelPosition: Story = {
  render: LabelPositionExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const RTL: Story = {
  render: RTLExample,
};
