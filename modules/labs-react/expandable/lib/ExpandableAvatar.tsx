/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import React from 'react';

import {createComponent, ExtractProps, useIsRTL} from '@workday/canvas-kit-react/common';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ExpandableAvatarProps
  extends Omit<
    ExtractProps<typeof Avatar, never>,
    keyof React.ButtonHTMLAttributes<HTMLButtonElement>
  > {}

export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: ({...elemProps}: ExpandableAvatarProps, ref, Element) => {
    const margin = !useIsRTL() ? 'marginRight' : 'marginLeft';
    return <Avatar as={Element} css={{[margin]: space.xxs}} ref={ref} {...elemProps} />;
  },
});
