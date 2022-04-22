import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';

export interface ExpandableAvatarProps extends AvatarProps {}

export const ExpandableAvatar = createComponent('div')({
  displayName: 'Pill.Avatar',
  Component: ({children, ...elemProps}: ExpandableAvatarProps, ref, Element) => {
    return (
      <Avatar as={Element} {...elemProps}>
        {children}
      </Avatar>
    );
  },
});
