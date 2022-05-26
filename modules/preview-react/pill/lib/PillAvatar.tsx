import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';
import {usePillModel} from './usePillModel';

export interface PillAvatarProps extends AvatarProps {}

// When the component is created, it needs to be a button element to match AvatarProps.
// Once Avatar becomes a `createComponent` we can default the element type to a `div`
// and the types should be properly extracted
export const PillAvatar = createSubcomponent('button')({
  modelHook: usePillModel,
})<PillAvatarProps>((elemProps, Element, model) => {
  return (
    <Avatar
      style={{opacity: model.state.disabled ? '.7' : '1'}}
      as="div"
      size={18}
      altText=""
      {...elemProps}
      disabled={model.state.disabled}
    >
      {elemProps.children}
    </Avatar>
  );
});
