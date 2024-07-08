import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

export const DarkButton = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar
      size={Avatar.Size.xxl}
      variant={Avatar.Variant.Dark}
      onClick={handleAvatarButtonClick}
    />
    <h3>Extra Large</h3>
    <Avatar size={Avatar.Size.xl} variant={Avatar.Variant.Dark} onClick={handleAvatarButtonClick} />
    <h3>Large</h3>
    <Avatar size={Avatar.Size.l} variant={Avatar.Variant.Dark} onClick={handleAvatarButtonClick} />
    <h3>Medium</h3>
    <Avatar size={Avatar.Size.m} variant={Avatar.Variant.Dark} onClick={handleAvatarButtonClick} />
    <h3>Small</h3>
    <Avatar size={Avatar.Size.s} variant={Avatar.Variant.Dark} onClick={handleAvatarButtonClick} />
    <h3>Extra Small</h3>
    <Avatar size={Avatar.Size.xs} variant={Avatar.Variant.Dark} onClick={handleAvatarButtonClick} />
  </div>
);
