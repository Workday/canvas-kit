import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from '../../../test-avatar.png';

export const ImageDiv = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar as="div" size="extraExtraLarge" url={testAvatar} />
    <h3>Extra Large</h3>
    <Avatar as="div" size="extraLarge" url={testAvatar} />
    <h3>Large</h3>
    <Avatar as="div" size="large" url={testAvatar} />
    <h3>Medium</h3>
    <Avatar as="div" size="medium" url={testAvatar} />
    <h3>Small</h3>
    <Avatar as="div" size="small" url={testAvatar} />
    <h3>Extra Small</h3>
    <Avatar as="div" size="extraSmall" url={testAvatar} />
  </div>
);
