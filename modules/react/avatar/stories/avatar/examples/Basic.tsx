import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const Basic = () => (
  <div className={containerStyles}>
    <Avatar onClick={handleAvatarButtonClick} />
    <Avatar as="div" />
  </div>
);
