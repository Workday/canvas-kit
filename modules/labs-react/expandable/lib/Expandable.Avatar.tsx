import React from 'react';

import {createComponent, useIsRTL} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ExpandableAvatarProps extends AvatarProps {}

export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: ({children, ...elemProps}: ExpandableAvatarProps, ref, Element) => {
    const isRTL = useIsRTL();
    const margin = isRTL ? 'marginLeft' : 'marginRight';
    return (
      <Avatar as={Element} style={{[margin]: space.xxs}} {...elemProps}>
        {children}
      </Avatar>
    );
  },
});
