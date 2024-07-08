import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

export const LightButton = () => (
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
);
