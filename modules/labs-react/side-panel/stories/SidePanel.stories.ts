import {Meta, StoryObj} from '@storybook/react';

import {SidePanel} from '@workday/canvas-kit-labs-react/side-panel';

import mdxDoc from './SidePanel.mdx';
import {AlwaysOpen as AlwaysOpenExample} from './examples/AlwaysOpen';
// Examples
import {Basic as BasicExample} from './examples/Basic';
import {ExternalControl as ExternalControlExample} from './examples/ExternalControl';
import {Heading as HeadingExample} from './examples/Heading';
import {OnStateTransition as OnStateTransitionExample} from './examples/OnStateTransition';
import {RightOrigin as RightOriginExample} from './examples/RightOrigin';
import {AlternatePanel as AlternatePanelExample} from './examples/Variant';

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
export const Heading: Story = {
  render: HeadingExample,
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
