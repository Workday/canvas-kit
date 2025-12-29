import {Meta, StoryObj} from '@storybook/react';

import {Select} from '@workday/canvas-kit-preview-react/select';

import mdxDoc from './Select.mdx';
import {AlertLeft as AlertExampleLeft} from './examples/Left Label/AlertLeft';
// Left Label Examples
import {DefaultLeft as DefaultLeftExample} from './examples/Left Label/DefaultLeft';
import {DefaultWithCustomOptionsLeft as DefaultWithCustomOptionsExampleLeft} from './examples/Left Label/DefaultWithCustomOptionsLeft';
import {DefaultWithSimpleOptionsLeft as DefaultWithSimpleOptionsExampleLeft} from './examples/Left Label/DefaultWithSimpleOptionsLeft';
import {DisabledLeft as DisabledExampleLeft} from './examples/Left Label/DisabledLeft';
import {ErrorLeft as ErrorExampleLeft} from './examples/Left Label/ErrorLeft';
import {GrowLeft as GrowExampleLeft} from './examples/Left Label/GrowLeft';
import {ScrollableLeft as ScrollableExampleLeft} from './examples/Left Label/ScrollableLeft';
import {Caution as CautionExample} from './examples/Top Label/Caution';
import {Default as DefaultExample} from './examples/Top Label/Default';
import {DefaultWithCustomOptions as DefaultWithCustomOptionsExample} from './examples/Top Label/DefaultWithCustomOptions';
import {DefaultWithSimpleOptions as DefaultWithSimpleOptionsExample} from './examples/Top Label/DefaultWithSimpleOptions';
import {Disabled as DisabledExample} from './examples/Top Label/Disabled';
import {Error as ErrorExample} from './examples/Top Label/Error';
import {Grow as GrowExample} from './examples/Top Label/Grow';
import {Scrollable as ScrollableExample} from './examples/Top Label/Scrollable';

export default {
  title: 'Preview/Select (deprecated)',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: DefaultExample,
};

export const DefaultWithSimpleOptions: Story = {
  render: DefaultWithSimpleOptionsExample,
};

export const DefaultWithCustomOptions: Story = {
  render: DefaultWithCustomOptionsExample,
};

export const Scrollable: Story = {
  render: ScrollableExample,
};

export const Disabled: Story = {
  render: DisabledExample,
};

export const Caution: Story = {
  render: CautionExample,
};

export const Error: Story = {
  render: ErrorExample,
};

export const Grow: Story = {
  render: GrowExample,
};

export const DefaultLeft: Story = {
  render: DefaultLeftExample,
};

export const DefaultWithSimpleOptionsLeft: Story = {
  render: DefaultWithSimpleOptionsExampleLeft,
};

export const DefaultWithCustomOptionsLeft: Story = {
  render: DefaultWithCustomOptionsExampleLeft,
};

export const ScrollableLeft: Story = {
  render: ScrollableExampleLeft,
};

export const DisabledLeft: Story = {
  render: DisabledExampleLeft,
};

export const AlertLeft: Story = {
  render: AlertExampleLeft,
};

export const ErrorLeft: Story = {
  render: ErrorExampleLeft,
};

export const GrowLeft: Story = {
  render: GrowExampleLeft,
};
