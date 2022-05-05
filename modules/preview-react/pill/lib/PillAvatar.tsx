import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps} from '@workday/canvas-kit-react/avatar';
import {PillModel} from './usePillModel';
import {PillModelContext} from './Pill';

export interface PillAvatarProps extends AvatarProps {
  model?: PillModel;
}

// When the component is create it needs to be a button element to play nicely with AvatarProps.
// Once Avatar becomes a `createComponent` we can default the element type to a `div`
// and the types should be properly extracted
export const PillAvatar = createComponent('button')({
  displayName: 'Pill.Avatar',
  Component: ({children, model, ...elemProps}: PillAvatarProps, ref) => {
    const {state} = useModelContext(PillModelContext, model);
    return (
      <Avatar
        style={{opacity: state.disabled ? '.7' : '1'}}
        as="div"
        size={18}
        ref={ref}
        {...elemProps}
        disabled={state.disabled}
      >
        {children}
      </Avatar>
    );
  },
});
