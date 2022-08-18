/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import React from 'react';

import {createComponent, ExtractProps, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ExpandableAvatarProps
  extends Omit<
    ExtractProps<typeof Avatar, never>,
    keyof React.ButtonHTMLAttributes<HTMLButtonElement>
  > {}

const StyledAvatar = styled(Avatar)<StyledType>({
  marginRight: space.xxs,
  flexShrink: 0,
});

// When the component is created, it needs to be a button element to match AvatarProps.
// Once Avatar becomes a `createComponent` we can default the element type to a `div`
// and the types should be properly extracted
export const ExpandableAvatar = createComponent('button')({
  displayName: 'Expandable.Avatar',
  Component: ({altText, ...elemProps}: ExpandableAvatarProps, ref, Element) => {
    return <StyledAvatar altText={undefined} as={'div'} ref={ref} size={32} {...elemProps} />;
  },
});
