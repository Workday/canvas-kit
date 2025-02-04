import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps, avatarStencil} from '@workday/canvas-kit-react/avatar';
import {usePillModel} from './usePillModel';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface PillAvatarProps extends AvatarProps {}

export const pillAvatarStencil = createStencil({
  extends: avatarStencil,
  base: {
    cursor: 'pointer',
    flex: '0 0 auto',
    [avatarStencil.vars.size]: px2rem(18),
  },
});

export const PillAvatar = createSubcomponent('div')({
  modelHook: usePillModel,
})<PillAvatarProps>(({...elemProps}: PillAvatarProps, Element, _model) => {
  return (
    <Avatar
      aria-hidden={true}
      as={Element}
      altText={''}
      {...mergeStyles(elemProps, pillAvatarStencil())}
    />
  );
});
