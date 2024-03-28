import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './FormField.mdx';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

import {Alert as AlertExample} from './examples/Alert';
import {AlertLabel as AlertLabelExample} from './examples/AlertLabel';
import {Basic as BasicExample} from './examples/Basic';
import {CustomInputId as CustomInputIdExample} from './examples/CustomInputId';
import {Error as ErrorExample} from './examples/Error';
import {ErrorLabel as ErrorLabelExample} from './examples/ErrorLabel';
import {GroupingInputs as GroupingInputsExample} from './examples/GroupingInputs';
import {Grow as GrowExample} from './examples/Grow';
import {Hint as HintExample} from './examples/Hint';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {Required as RequiredExample} from './examples/Required';

export default {
  title: 'Components/Inputs/Form Field',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock, StatusIndicator},
    },
  },
} as Meta<typeof FormField>;

type Story = StoryObj<typeof FormField>;

export const Alert: Story = {
  render: AlertExample,
};
export const AlertLabel: Story = {
  render: AlertLabelExample,
};
export const Basic: Story = {
  render: BasicExample,
};
export const CustomInputId: Story = {
  render: CustomInputIdExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const ErrorLabel: Story = {
  render: ErrorLabelExample,
};
export const GroupingInputs: Story = {
  render: GroupingInputsExample,
};
export const Grow: Story = {
  render: GrowExample,
};
export const Hint: Story = {
  render: HintExample,
};
export const LabelPosition: Story = {
  render: LabelPositionExample,
};
export const Required: Story = {
  render: RequiredExample,
};
