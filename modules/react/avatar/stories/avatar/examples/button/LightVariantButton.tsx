import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

export const LightVariantButton = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar size="extraExtraLarge" onClick={handleAvatarButtonClick} />
    <h3>Extra Large</h3>
    <Avatar size="extraLarge" onClick={handleAvatarButtonClick} />
    <h3>Large</h3>
    <Avatar size="large" onClick={handleAvatarButtonClick} />
    <h3>Medium</h3>
    <Avatar size="medium" onClick={handleAvatarButtonClick} />
    <h3>Small</h3>
    <Avatar size="small" onClick={handleAvatarButtonClick} />
    <h3>Extra Small</h3>
    <Avatar size="extraSmall" onClick={handleAvatarButtonClick} />
  </div>
);
