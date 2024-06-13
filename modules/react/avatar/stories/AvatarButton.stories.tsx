import * as React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import {Avatar} from '../index';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

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
  render: () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} onClick={handleAvatarButtonClick} />
    </div>
  ),
};

export const Dark: StoryObj = {
  name: 'Dark',
  render: () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar
        size={Avatar.Size.xxl}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Extra Large</h3>
      <Avatar
        size={Avatar.Size.xl}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Large</h3>
      <Avatar
        size={Avatar.Size.l}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Medium</h3>
      <Avatar
        size={Avatar.Size.m}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Small</h3>
      <Avatar
        size={Avatar.Size.s}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Extra Small</h3>
      <Avatar
        size={Avatar.Size.xs}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
    </div>
  ),
};

export const Image: StoryObj = {
  name: 'Image',
  render: () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Broken Link</h3>
      <Avatar url="/fake/path/to/image.png" onClick={handleAvatarButtonClick} />
    </div>
  ),
};
