import * as React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import {Avatar} from '../index';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

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
  render: () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xxl} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xl} />
      <h3>Large</h3>
      <Avatar as="div" size={Avatar.Size.l} />
      <h3>Medium</h3>
      <Avatar as="div" size={Avatar.Size.m} />
      <h3>Small</h3>
      <Avatar as="div" size={Avatar.Size.s} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={Avatar.Size.xs} />
    </div>
  ),
};

export const Dark: StoryObj = {
  name: 'Dark',
  render: () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xxl} variant={Avatar.Variant.Dark} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xl} variant={Avatar.Variant.Dark} />
      <h3>Large</h3>
      <Avatar as="div" size={Avatar.Size.l} variant={Avatar.Variant.Dark} />
      <h3>Medium</h3>
      <Avatar as="div" size={Avatar.Size.m} variant={Avatar.Variant.Dark} />
      <h3>Small</h3>
      <Avatar as="div" size={Avatar.Size.s} variant={Avatar.Variant.Dark} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={Avatar.Size.xs} variant={Avatar.Variant.Dark} />
    </div>
  ),
};

export const Image: StoryObj = {
  name: 'Image',
  render: () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xxl} url={testAvatar} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xl} url={testAvatar} />
      <h3>Large</h3>
      <Avatar as="div" size={Avatar.Size.l} url={testAvatar} />
      <h3>Medium</h3>
      <Avatar as="div" size={Avatar.Size.m} url={testAvatar} />
      <h3>Small</h3>
      <Avatar as="div" size={Avatar.Size.s} url={testAvatar} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={Avatar.Size.xs} url={testAvatar} />
    </div>
  ),
};

export const NonSquareImage: StoryObj = {
  name: 'Non-Square Image',
  render: () => (
    <div className="story">
      <h3>Original Rectangle Image</h3>
      <img alt="" src="https://placekitten.com/g/450/200" />
      <h3>Using Object Fit on a Rectangle Image</h3>
      <Avatar as="div" size={200} url="https://placekitten.com/g/450/200" objectFit="contain" />
      <h3>Original Square Image</h3>
      <img alt="" src="https://placekitten.com/g/450/450" />
      <h3>Using a Square Image</h3>
      <Avatar as="div" size={200} url="https://placekitten.com/g/450/450" />
    </div>
  ),
};
