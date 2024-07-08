import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

export const ImageButton = () => (
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
);
