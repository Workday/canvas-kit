import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, getTheme} from '@workday/canvas-kit-react/common';
import {borderRadius} from '@workday/canvas-kit-react/tokens';

export type DeleteButtonVariant = 'primary' | 'inverse';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {}

const theme = getTheme();

const DeleteStyles = cs({
  [buttonVars.default.background]: theme.canvas.palette.error.main,
  [buttonVars.default.border]: theme.canvas.palette.error.main,
  [buttonVars.default.borderRadius]: borderRadius.circle,
  [buttonVars.default.color]: theme.canvas.palette.error.contrast,
  '&:hover, &.hover': {
    [buttonVars.hover.background]: theme.canvas.palette.error.dark,
    [buttonVars.hover.border]: theme.canvas.palette.error.dark,
    [buttonVars.hover.color]: theme.canvas.palette.error.contrast,
  },
  '&:active, &.active': {
    [buttonVars.active.background]: theme.canvas.palette.error.darkest,
    [buttonVars.active.border]: theme.canvas.palette.error.darkest,
    [buttonVars.active.color]: theme.canvas.palette.error.contrast,
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: theme.canvas.palette.error.main,
    [buttonVars.focus.border]: theme.canvas.palette.error.main,
    [buttonVars.focus.color]: theme.canvas.palette.error.contrast,
    [buttonVars.focus.boxShadowInner]: theme.canvas.palette.error.contrast,
    [buttonVars.focus.boxShadowOuter]: theme.canvas.palette.error.main,
  },
});

export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: ({children, colors, size, ...elemProps}: DeleteButtonProps, ref, Element) => {
    return (
      <BaseButton
        as={Element}
        ref={ref}
        type="button"
        size={size}
        cs={[DeleteStyles]}
        {...elemProps}
      >
        {children}
      </BaseButton>
    );
  },
});
