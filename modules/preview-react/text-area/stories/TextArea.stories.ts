import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './TextArea.mdx';

import {TextArea} from '@workday/canvas-kit-preview-react/text-area';

import {Alert as AlertExample} from './examples/Alert';
import {Basic as BasicExample} from './examples/Basic';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Error as ErrorExample} from './examples/Error';
import {Grow as GrowExample} from './examples/Grow';
import {LabelPositionVertical as LabelPositionVerticalExample} from './examples/LabelPositionVertical';
import {LabelPositionHorizontal as LabelPositionHorizontalExample} from './examples/LabelPositionHorizontal';
import {HiddenLabel as HiddenLabelExample} from './examples/HiddenLabel';
import {Placeholder as PlaceholderExample} from './examples/Placeholder';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';
import {ResizeConstraints as ResizeConstraintsExample} from './examples/ResizeConstraints';

export default {
  title: 'Preview/Inputs/Text Area (deprecated)',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Alert: Story = {
  render: AlertExample,
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
export const LabelPositionVertical: Story = {
  render: LabelPositionVerticalExample,
};
export const LabelPositionHorizontal: Story = {
  render: LabelPositionHorizontalExample,
};
export const HiddenLabel: Story = {
  render: HiddenLabelExample,
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
export const ResizeConstraints: Story = {
  render: ResizeConstraintsExample,
};
