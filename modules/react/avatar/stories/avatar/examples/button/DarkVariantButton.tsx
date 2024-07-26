import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

export const DarkVariantButton = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar size="extraExtraLarge" variant="dark" onClick={handleAvatarButtonClick} />
    <h3>Extra Large</h3>
    <Avatar size="extraLarge" variant="dark" onClick={handleAvatarButtonClick} />
    <h3>Large</h3>
    <Avatar size="large" variant="dark" onClick={handleAvatarButtonClick} />
    <h3>Medium</h3>
    <Avatar size="medium" variant="dark" onClick={handleAvatarButtonClick} />
    <h3>Small</h3>
    <Avatar size="small" variant="dark" onClick={handleAvatarButtonClick} />
    <h3>Extra Small</h3>
    <Avatar size="extraSmall" variant="dark" onClick={handleAvatarButtonClick} />
  </div>
);
