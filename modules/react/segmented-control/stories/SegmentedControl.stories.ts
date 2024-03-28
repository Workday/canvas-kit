import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './SegmentedControl.mdx';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

import {Basic as BasicExample} from './examples/Basic';

export default {
  title: 'Components/Buttons/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Basic: Story = {
  render: BasicExample,
};
