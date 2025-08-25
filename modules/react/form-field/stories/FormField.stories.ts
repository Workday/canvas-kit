import {Meta, StoryObj} from '@storybook/react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import mdxDoc from './FormField.mdx';
// examples
import {Basic as BasicExample} from './examples/Basic';
import {Caution as CautionExample} from './examples/Caution';
import {Error as ErrorExample} from './examples/Error';
import {Disabled as DisabledExample} from './examples/Disabled';
import {HiddenLabel as HiddenLabelExample} from './examples/HiddenLabel';
import {LabelPositionHorizontalStart as LabelPositionHorizontalStartExample} from './examples/LabelPositionHorizontalStart';
import {LabelPositionHorizontalEnd as LabelPositionHorizontalEndExample} from './examples/LabelPositionHorizontalEnd';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {Required as RequiredExample} from './examples/Required';
import {Custom as CustomExample} from './examples/Custom';
import {CustomId as CustomIdExample} from './examples/CustomId';
import {AllFields as AllFieldsExample} from './examples/AllFields';
import {Hint as HintExample} from './examples/Hint';
import {Grow as GrowExample} from './examples/Grow';
import {ThemedError as ThemedErrorExample} from './examples/ThemedErrors';
import {GroupedInputs as GroupedInputsExample} from './examples/GroupedInputs';

export default {
  title: 'Components/Inputs/Form Field',
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
export const Caution: Story = {
  render: CautionExample,
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
export const Grow: Story = {
  render: GrowExample,
};
export const ThemedError: Story = {
  render: ThemedErrorExample,
};

export const GroupedInputs: Story = {
  render: GroupedInputsExample,
};

export const HiddenLabel: Story = {
  render: HiddenLabelExample,
};
