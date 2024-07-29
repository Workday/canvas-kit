import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from '../../test-avatar.png';

export const Image = () => (
  <div className="story">
    <h3>Working Images</h3>
    <Avatar size="extraExtraLarge" as="div" url={testAvatar} />
    <Avatar size="extraLarge" as="div" url={testAvatar} />
    <Avatar size="large" as="div" url={testAvatar} />
    <Avatar size="medium" as="div" url={testAvatar} />
    <Avatar size="small" as="div" url={testAvatar} />
    <Avatar size="extraSmall" as="div" url={testAvatar} />
    <h3>Broken Image</h3>
    <Avatar url="/fake/path/to/image.png" as="div" />
  </div>
);
