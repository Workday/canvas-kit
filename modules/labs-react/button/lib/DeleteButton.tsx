import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, newTheme} from '@workday/canvas-kit-react/common';
import {cs, cssVar} from '@workday/canvas-kit-styling';

export type DeleteButtonVariant = 'primary' | 'inverse';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {}

const DeleteStyles = cs({
  [buttonVars.default.background]: cssVar(newTheme.colors.error.main),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(newTheme.borderRadius.circle),
  [buttonVars.default.color]: cssVar(newTheme.colors.error.contrast),
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(newTheme.colors.error.dark),
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.color]: cssVar(newTheme.colors.error.contrast),
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: cssVar(newTheme.colors.error.main),
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.color]: cssVar(newTheme.colors.error.contrast),
    [buttonVars.focus.boxShadowInner]: cssVar(newTheme.colors.primary.contrast),
    [buttonVars.focus.boxShadowOuter]: cssVar(newTheme.colors.primary.dark),
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(newTheme.colors.error.darkest),
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.color]: cssVar(newTheme.colors.error.contrast),
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: cssVar(newTheme.colors.error.light),
    [buttonVars.disabled.color]: cssVar(newTheme.colors.error.contrast),
    opacity: 1,
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
