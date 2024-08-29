import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

export interface ExpandableAvatarProps extends AvatarProps {}

const expandableAvatarStyles = createStyles({
  marginRight: system.space.x2,
  flexShrink: 0,
});

// When the component is created, it needs to be a button element to match AvatarProps.
// Once Avatar becomes a `createComponent` we can default the element type to a `div`
// and the types should be properly extracted
export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: ({altText, ...elemProps}: ExpandableAvatarProps, ref, Element) => {
    return (
      <Avatar
        cs={expandableAvatarStyles}
        as={Element}
        altText={altText}
        ref={ref}
        size="medium"
        {...elemProps}
      />
    );
  },
});
