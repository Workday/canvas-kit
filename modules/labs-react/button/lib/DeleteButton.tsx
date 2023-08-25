import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, cssVar, newTheme} from '@workday/canvas-kit-react/common';

export type DeleteButtonVariant = 'primary' | 'inverse';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {}

const DeleteStyles = cs({
  [buttonVars.default.background]: cssVar(newTheme.colors.error.main),
  [buttonVars.default.border]: cssVar(newTheme.colors.error.main),
  [buttonVars.default.borderRadius]: cssVar(newTheme.borderRadius.circle),
  [buttonVars.default.color]: cssVar(newTheme.colors.error.contrast),
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(newTheme.colors.error.dark),
    [buttonVars.hover.border]: cssVar(newTheme.colors.error.dark),
    [buttonVars.hover.color]: cssVar(newTheme.colors.error.contrast),
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(newTheme.colors.error.darkest),
    [buttonVars.active.border]: cssVar(newTheme.colors.error.darkest),
    [buttonVars.active.color]: cssVar(newTheme.colors.error.contrast),
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: cssVar(newTheme.colors.error.main),
    [buttonVars.focus.border]: cssVar(newTheme.colors.error.main),
    [buttonVars.focus.color]: cssVar(newTheme.colors.error.contrast),
    [buttonVars.focus.boxShadowInner]: cssVar(newTheme.colors.primary.contrast),
    [buttonVars.focus.boxShadowOuter]: cssVar(newTheme.colors.primary.dark),
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
