import {Meta, StoryObj} from '@storybook/react';
import mdxDoc from './SidePanel.mdx';

import {SidePanel} from '@workday/canvas-kit-labs-react/side-panel';
// Examples
import {Basic as BasicExample} from './examples/Basic';
import {HiddenName as HiddenNameExample} from './examples/HiddenName';
import {AlternatePanel as AlternatePanelExample} from './examples/Variant';
import {ExternalControl as ExternalControlExample} from './examples/ExternalControl';
import {RightOrigin as RightOriginExample} from './examples/RightOrigin';
import {AlwaysOpen as AlwaysOpenExample} from './examples/AlwaysOpen';
import {OnStateTransition as OnStateTransitionExample} from './examples/OnStateTransition';

export default {
  title: 'Labs/Side Panel (New)',
  component: SidePanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof SidePanel>;

type Story = StoryObj<typeof SidePanel>;

export const Basic: Story = {
  render: BasicExample,
};
export const HiddenName: Story = {
  render: HiddenNameExample,
};
export const AlternatePanel: Story = {
  render: AlternatePanelExample,
};
export const ExternalControl: Story = {
  render: ExternalControlExample,
};
export const RightOrigin: Story = {
  render: RightOriginExample,
};
export const AlwaysOpen: Story = {
  render: AlwaysOpenExample,
};
export const OnStateTransition: Story = {
  render: OnStateTransitionExample,
};
