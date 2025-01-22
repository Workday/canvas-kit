import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';
import {usePillModel} from './usePillModel';

export interface PillAvatarProps extends AvatarProps {}

export const PillAvatar = createSubcomponent('div')({
  modelHook: usePillModel,
})<PillAvatarProps>(({...elemProps}: PillAvatarProps, Element, _model) => {
  return <Avatar size={18} as={Element} altText={''} {...elemProps} />;
});
