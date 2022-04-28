import React from 'react';

import {createComponent, styled, useIsRTL} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ExpandableAvatarProps extends AvatarProps {}

const StyledAvatar = styled(Avatar)<{isRTL: boolean}>(({isRTL}) => ({
  marginRight: !isRTL ? space.xxs : 0,
  marginLeft: !isRTL ? 0 : space.xxs,
}));

export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: ({children, ...elemProps}: ExpandableAvatarProps, ref, Element) => {
    const isRTL = useIsRTL();
    return (
      <StyledAvatar as={Element} isRTL={isRTL} {...elemProps}>
        {children}
      </StyledAvatar>
    );
  },
});
