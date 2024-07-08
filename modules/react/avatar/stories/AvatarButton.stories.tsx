import {Meta, StoryObj} from '@storybook/react';

import {Avatar} from '@workday/canvas-kit-react/avatar';
import {DarkButton} from './examples/DarkButton';
import {LightButton} from './examples/LightButton';
import {ImageButton} from './examples/ImageButton';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Indicators/Avatar/Avatar Button',
  component: Avatar,
  parameters: {
    ReadmePath: 'react/avatar',
  },
};

export default meta;

export const Light: StoryObj = {
  name: 'Light',
  render: DarkButton,
};

export const Dark: StoryObj = {
  name: 'Dark',
  render: LightButton,
};

export const Image: StoryObj = {
  name: 'Image',
  render: ImageButton,
};
