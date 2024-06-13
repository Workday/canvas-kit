import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Banner.mdx';

import {Banner} from '@workday/canvas-kit-react/banner';

import {ActionText as ActionTextExample} from './examples/ActionText';
import {Basic as BasicExample} from './examples/Basic';
import {Error as ErrorExample} from './examples/Error';
import {IconBanner as IconBannerExample} from './examples/IconBanner';
import {Sticky as StickyExample} from './examples/Sticky';
import {ThemedAlert as ThemedAlertExample} from './examples/ThemedAlert';
import {ThemedError as ThemedErrorExample} from './examples/ThemedError';
import {RefForwarding as RefForwardingExample} from './examples/RefForwarding';
import {StickyAnimation as StickyAnimationExample} from './examples/StickyAnimation';
import {StickyRTL as StickyRTLExample} from './examples/StickyRTL';

export default {
  title: 'Components/Indicators/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const ActionText: Story = {
  render: ActionTextExample,
};
export const Basic: Story = {
  render: BasicExample,
};
export const Error: Story = {
  render: ErrorExample,
};
export const IconBanner: Story = {
  render: IconBannerExample,
};
export const Sticky: Story = {
  render: StickyExample,
};
export const ThemedAlert: Story = {
  render: ThemedAlertExample,
};
export const ThemedError: Story = {
  render: ThemedErrorExample,
};
export const RefForwarding: Story = {
  render: RefForwardingExample,
};
export const StickyAnimation: Story = {
  render: StickyAnimationExample,
};
export const StickyRTL: Story = {
  render: StickyRTLExample,
};
