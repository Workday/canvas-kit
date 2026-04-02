import {Meta, StoryObj} from '@storybook/react';

import {Skeleton} from '@workday/canvas-kit-react/skeleton';

import mdxDoc from './Skeleton.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Color as ColorExample} from './examples/Color';
import {Header as HeaderExample} from './examples/Header';
import {Shape as ShapeExample} from './examples/Shape';
import {Simulation as SimulationExample} from './examples/Simulation';
import {Text as TextExample} from './examples/Text';

export default {
  title: 'Components/Indicators/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  render: BasicExample,
};
export const Color: Story = {
  render: ColorExample,
};
export const Header: Story = {
  render: HeaderExample,
};
export const Shape: Story = {
  render: ShapeExample,
};
export const Simulation: Story = {
  render: SimulationExample,
};
export const Text: Story = {
  render: TextExample,
};
