import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Light = () => (
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
);
