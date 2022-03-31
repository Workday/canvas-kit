import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';

export interface PillAvatarProps extends AvatarProps {}

export const PillAvatar = createComponent('button')({
  displayName: 'Pill.Avatar',
  Component: ({children, ...elemProps}: PillAvatarProps, ref, Element) => {
    return (
      <Avatar size={18} ref={ref} {...elemProps}>
        {children}
      </Avatar>
    );
  },
});
