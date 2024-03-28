import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import {InformationHighlight} from '@workday/canvas-kit-docs';

import mdxDoc from './TextArea.mdx';

import {TextArea} from '@workday/canvas-kit-react/text-area';

import {Alert as AlertExample} from './examples/Alert';
import {Basic as BasicExample} from './examples/Basic';
import {Disabled as DisabledExample} from './examples/Disabled';
import {Error as ErrorExample} from './examples/Error';
import {Grow as GrowExample} from './examples/Grow';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {Placeholder as PlaceholderExample} from './examples/Placeholder';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';
import {ResizeConstraints as ResizeConstraintsExample} from './examples/ResizeConstraints';

export default {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock, InformationHighlight},
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
export const ResizeConstraints: Story = {
  render: ResizeConstraintsExample,
};
