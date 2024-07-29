import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from '../../test-avatar.png';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

export const Button = () => (
  <div className="story">
    <Avatar size="extraLarge" variant="dark" onClick={handleAvatarButtonClick} />
    <Avatar size="extraLarge" onClick={handleAvatarButtonClick} />
    <Avatar size="extraLarge" url={testAvatar} onClick={handleAvatarButtonClick} />
  </div>
);
