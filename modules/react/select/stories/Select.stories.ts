import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Select.mdx';

import {Select} from '@workday/canvas-kit-react/select';

import {Caution as CautionExample} from './examples/Caution';
import {Basic as BasicExample} from './examples/Basic';
import {Complex as ComplexExample} from './examples/Complex';
import {Controlled as ControlledExample} from './examples/Controlled';
import {Disabled as DisabledExample} from './examples/Disabled';
import {DisabledOptions as DisabledOptionsExample} from './examples/DisabledOption';
import {Error as ErrorExample} from './examples/Error';
import {Grow as GrowExample} from './examples/Grow';
import {LabelPosition as LabelPositionExample} from './examples/LabelPosition';
import {WithIcons as WithIconsExample} from './examples/WithIcons';
import {Required as RequiredExample} from './examples/Required';
import {MenuHeight as MenuHeightExample} from './examples/MenuHeight';
import {HoistedModel as HoistedModelExample} from './examples/HoistedModel';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {FetchingDynamicItems as FetchingDynamicItemsExample} from './examples/FetchingDynamicItems';
import {Placeholder as PlaceholderExample} from './examples/Placeholder';
import {InitialSelectedItem as InitialSelectedItemExample} from './examples/InitialSelectedItem';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Caution: Story = {
  render: CautionExample,
};
export const Basic: Story = {
  render: BasicExample,
};
export const Complex: Story = {
  render: ComplexExample,
};
export const Controlled: Story = {
  render: ControlledExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
export const DisabledOptions: Story = {
  render: DisabledOptionsExample,
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
export const WithIcons: Story = {
  render: WithIconsExample,
};
export const Required: Story = {
  render: RequiredExample,
};
export const MenuHeight: Story = {
  render: MenuHeightExample,
};
export const HoistedModel: Story = {
  render: HoistedModelExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const FetchingDynamicItems: Story = {
  render: FetchingDynamicItemsExample,
};
export const Placeholder: Story = {
  render: PlaceholderExample,
};
export const InitialSelectedItem: Story = {
  render: InitialSelectedItemExample,
};
