import {Meta, StoryObj} from '@storybook/react';

import {SidePanel} from '@workday/canvas-kit-preview-react/side-panel';

import mdxDoc from './SidePanel.mdx';
import {AlwaysOpen as AlwaysOpenExample} from './examples/AlwaysOpen';
// Examples
import {Basic as BasicExample} from './examples/Basic';
import {ExternalControl as ExternalControlExample} from './examples/ExternalControl';
import {HiddenName as HiddenNameExample} from './examples/HiddenName';
import {OnExpandedChange as OnExpandedChangeExample} from './examples/OnExpandedChange';
import {OnStateTransition as OnStateTransitionExample} from './examples/OnStateTransition';
import {RightOrigin as RightOriginExample} from './examples/RightOrigin';
import {AlternatePanel as AlternatePanelExample} from './examples/Variant';

export default {
  title: 'Preview/Side Panel (Deprecated)',
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
export const OnExpandedChange: Story = {
  render: OnExpandedChangeExample,
};
export const OnStateTransition: Story = {
  render: OnStateTransitionExample,
};
