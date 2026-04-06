import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './SegmentedControl.mdx';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

import {Basic as BasicExample} from './examples/Basic';

export default {
  title: 'Components/Buttons/Segmented Control (deprecated)',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Basic: Story = {
  render: BasicExample,
};
