import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from '../../../test-avatar.png';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

export const ImageButton = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar size="extraExtraLarge" url={testAvatar} onClick={handleAvatarButtonClick} />
    <h3>Extra Large</h3>
    <Avatar size="extraLarge" url={testAvatar} onClick={handleAvatarButtonClick} />
    <h3>Large</h3>
    <Avatar size="large" url={testAvatar} onClick={handleAvatarButtonClick} />
    <h3>Medium</h3>
    <Avatar size="medium" url={testAvatar} onClick={handleAvatarButtonClick} />
    <h3>Small</h3>
    <Avatar size="small" url={testAvatar} onClick={handleAvatarButtonClick} />
    <h3>Extra Small</h3>
    <Avatar size="extraSmall" url={testAvatar} onClick={handleAvatarButtonClick} />
    <h3>Broken Link</h3>
    <Avatar url="/fake/path/to/image.png" onClick={handleAvatarButtonClick} />
  </div>
);
