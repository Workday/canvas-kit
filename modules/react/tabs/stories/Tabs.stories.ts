import {Meta, StoryObj} from '@storybook/react';

import {Tabs} from '@workday/canvas-kit-react/tabs';

import mdxDoc from './Tabs.mdx';
import {AlternativeTabStop as AlternativeTabStopExample} from './examples/AlternativeTabStop';
import {Basic as BasicExample} from './examples/Basic';
import {DisabledTab as DisabledTabExample} from './examples/DisabledTab';
import {DynamicTabs as DynamicTabsExample} from './examples/DynamicTabs';
import {HoistedModel as HoistedModelExample} from './examples/HoistedModel';
import {Icons as IconsExample} from './examples/Icons';
import {NamedTabs as NamedTabsExample} from './examples/NamedTabs';
import {OverflowTabs as OverflowTabsExample} from './examples/OverflowTabs';
import {RightToLeft as RightToLeftExample} from './examples/RightToLeft';
import {SinglePanel as SinglePanelExample} from './examples/SinglePanel';

export default {
  title: 'Components/Containers/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: BasicExample,
};
export const NamedTabs: Story = {
  render: NamedTabsExample,
};
export const RightToLeft: Story = {
  render: RightToLeftExample,
};
export const OverflowTabs: Story = {
  render: OverflowTabsExample,
};
export const DisabledTab: Story = {
  render: DisabledTabExample,
};
export const Icons: Story = {
  render: IconsExample,
};
export const SinglePanel: Story = {
  render: SinglePanelExample,
};
export const AlternativeTabStop: Story = {
  render: AlternativeTabStopExample,
};
export const HoistedModel: Story = {
  render: HoistedModelExample,
};
export const DynamicTabs: Story = {
  render: DynamicTabsExample,
};
