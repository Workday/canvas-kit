import {Meta, StoryObj} from '@storybook/react';

import {Dark as DarkExample} from './examples/Dark';
import {Light as LightExample} from './examples/Light';
import {Image as ImageExample} from './examples/Image';
import {NonSquareImage as NonSquareImageExample} from './examples/NonSquareImage';

import {Avatar} from '@workday/canvas-kit-react/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Indicators/Avatar',
  component: Avatar,
  parameters: {
    ReadmePath: 'react/avatar',
  },
};

export default meta;

export const Light: StoryObj = {
  name: 'Light',
  render: LightExample,
};

export const Dark: StoryObj = {
  name: 'Dark',
  render: DarkExample,
};

export const Image: StoryObj = {
  name: 'Image',
  render: ImageExample,
};

export const NonSquareImage: StoryObj = {
  name: 'Non-Square Image',
  render: NonSquareImageExample,
};
