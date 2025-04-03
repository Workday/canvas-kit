import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x2,
});

export const Image = () => (
  <div className={containerStyles}>
    <h3>Working Images</h3>
    <Avatar size="extraExtraLarge" altText="Avatar" as="div" url={testAvatar} />
    <Avatar size="extraLarge" altText="Avatar" as="div" url={testAvatar} />
    <Avatar size="large" altText="Avatar" as="div" url={testAvatar} />
    <Avatar size="medium" altText="Avatar" as="div" url={testAvatar} />
    <Avatar size="small" altText="Avatar" as="div" url={testAvatar} />
    <Avatar size="extraSmall" altText="Avatar" as="div" url={testAvatar} />
    <h3>Broken Image</h3>
    <Avatar url="/fake/path/to/image.png" altText="Avatar" as="div" />
  </div>
);
