import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Dark = () => (
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
);
