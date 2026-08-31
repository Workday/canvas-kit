import {Meta, StoryObj} from '@storybook/react';

import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';

import mdxDoc from './InformationHighlight.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Body as BodyExample} from './examples/Body';
import {Caution as CautionExamples} from './examples/Caution';
import {Critical as CriticalExamples} from './examples/Critical';
import {IconCritical as IconCriticalExamples} from './examples/CustomIconCritical';
import {Heading as HeadingExample} from './examples/Heading';
import {Informational as InformationalExamples} from './examples/Informational';
import {RTL as RTLExample} from './examples/RTL';

export default {
  title: 'Components/Indicators/Information Highlight',
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
export const Critical: Story = {
  render: CriticalExamples,
};
export const Caution: Story = {
  render: CautionExamples,
};
export const Informational: Story = {
  render: InformationalExamples,
};
export const IconCritical: Story = {
  render: IconCriticalExamples,
};
export const RTL: Story = {
  render: RTLExample,
};
