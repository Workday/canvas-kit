import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const Image = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar as="div" size={Avatar.Size.xxl} url={testAvatar} />
    <h3>Extra Large</h3>
    <Avatar as="div" size={Avatar.Size.xl} url={testAvatar} />
    <h3>Large</h3>
    <Avatar as="div" size={Avatar.Size.l} url={testAvatar} />
    <h3>Medium</h3>
    <Avatar as="div" size={Avatar.Size.m} url={testAvatar} />
    <h3>Small</h3>
    <Avatar as="div" size={Avatar.Size.s} url={testAvatar} />
    <h3>Extra Small</h3>
    <Avatar as="div" size={Avatar.Size.xs} url={testAvatar} />
  </div>
);
