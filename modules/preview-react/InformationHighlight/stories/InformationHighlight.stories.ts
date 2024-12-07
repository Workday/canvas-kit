import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './InformationHighlight.mdx';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {Basic as BasicExample} from './examples/Basic';
import {Body as BodyExample} from './examples/Body';
import {Heading as HeadingExample} from './examples/Heading';
import {AttentionLow as AttentionLowExample} from './examples/attentionLow';
import {CautionLow as CautionLowExample} from './examples/cautionLow';
import {InformationalLow as InformationalLowExample} from './examples/informationalLow';
import {AttentionHigh as AttentionHighExample} from './examples/attentionHigh';
import {CautionHigh as CautionHighExample} from './examples/cautionHigh';
import {InformationalHigh as InformationalHighExample} from './examples/informationalHigh';
import {IconAttentionHigh as IconAttentionHighExample} from './examples/customIconAttentionHigh';
import {IconAttentionLow as IconAttentionLowExample} from './examples/customIconAttentionLow';
import {RTL as RTLExample} from './examples/RTL';

export default {
  title: 'Preview/Information Highlight',
  component: InformationHighlight,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof InformationHighlight>;

type Story = StoryObj<typeof InformationHighlight>;

export const Basic: Story = {
  render: BasicExample,
};
export const Body: Story = {
  render: BodyExample,
};
export const Heading: Story = {
  render: HeadingExample,
};
export const AttentionLow: Story = {
  render: AttentionLowExample,
};
export const CautionLow: Story = {
  render: CautionLowExample,
};
export const InformationalLow: Story = {
  render: InformationalLowExample,
};
export const AttentionHigh: Story = {
  render: AttentionHighExample,
};
export const CautionHigh: Story = {
  render: CautionHighExample,
};
export const InformationalHigh: Story = {
  render: InformationalHighExample,
};
export const IconAttentionHigh: Story = {
  render: IconAttentionHighExample,
};
export const IconAttentionLow: Story = {
  render: IconAttentionLowExample,
};

export const RTL: Story = {
  render: RTLExample,
};
