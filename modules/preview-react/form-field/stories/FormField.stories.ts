import {Meta, StoryObj} from '@storybook/react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import mdxDoc from './FormField.mdx';
// examples
import {Basic as BasicExample} from './examples/Basic';
import {Alert as AlertExample} from './examples/Alert';
import {Error as ErrorExample} from './examples/Error';
import {Disabled as DisabledExample} from './examples/Disabled';
import {LabelPositionHorizontalStart as LabelPositionHorizontalStartExample} from './examples/LabelPositionHorizontalStart';
import {LabelPositionHorizontalEnd as LabelPositionHorizontalEndExample} from './examples/LabelPositionHorizontalEnd';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';
import {Custom as CustomExample} from './examples/Custom';
import {CustomId as CustomIdExample} from './examples/CustomId';
import {AllFields as AllFieldsExample} from './examples/AllFields';
import {Hint as HintExample} from './examples/Hint';
import {FieldSet as FieldSetExample} from './examples/FieldSet';
import {Grow as GrowExample} from './examples/Grow';
import {ThemedError as ThemedErrorExample} from './examples/ThemedErrors';

export default {
  title: 'Preview/Inputs/Form Field',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof FormField>;

type Story = StoryObj<typeof FormField>;

export const Basic: Story = {
  render: BasicExample,
};
export const Alert: Story = {
  render: AlertExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const LabelPositionHorizontalStart: Story = {
  render: LabelPositionHorizontalStartExample,
};
export const LabelPositionHorizontalEnd: Story = {
  render: LabelPositionHorizontalEndExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const Required: Story = {
  render: RequiredExample,
};
export const Custom: Story = {
  render: CustomExample,
};
export const CustomId: Story = {
  render: CustomIdExample,
};
export const AllFields: Story = {
  render: AllFieldsExample,
};
export const Hint: Story = {
  render: HintExample,
};
export const FieldSet: Story = {
  render: FieldSetExample,
};
export const Grow: Story = {
  render: GrowExample,
};
export const ThemedError: Story = {
  render: ThemedErrorExample,
};
