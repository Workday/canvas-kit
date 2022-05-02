import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';

export interface PillAvatarProps extends AvatarProps {}

// When the component is create it needs to be a button element to play nicely with AvatarProps.
// Once Avatar becomes a `createComponent` we can default the element type to a `div`
// and the types should be properly extracted
export const PillAvatar = createComponent('button')({
  displayName: 'Pill.Avatar',
  Component: ({children, ...elemProps}: PillAvatarProps, ref) => {
    return (
      <Avatar as="div" size={20} ref={ref} {...elemProps}>
        {children}
      </Avatar>
    );
  },
});
