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

export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: ({...elemProps}: ExpandableAvatarProps, ref, Element) => {
    return <StyledAvatar altText={undefined} as={Element} ref={ref} size={32} {...elemProps} />;
  },
});
