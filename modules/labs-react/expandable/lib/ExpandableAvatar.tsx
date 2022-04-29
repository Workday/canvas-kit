import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ExpandableAvatarProps extends AvatarProps {}

const StyledAvatar = styled(Avatar)({
  marginRight: space.xxs,
});

export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: ({children, ...elemProps}: ExpandableAvatarProps, ref, Element) => {
    return (
      <StyledAvatar as={Element} {...elemProps}>
        {children}
      </StyledAvatar>
    );
  },
});
