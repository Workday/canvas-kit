import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends ButtonProps {}

const deleteStyles = createStyles({
  [buttonVars.default.background]: brand.error.base,
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: system.shape.round,
  [buttonVars.default.label]: brand.error.accent,
  [buttonVars.default.icon]: brand.error.accent,
  '&:hover, &.hover': {
    [buttonVars.hover.background]: brand.error.dark,
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.label]: brand.error.accent,
    [buttonVars.hover.icon]: brand.error.accent,
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: brand.error.base,
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.label]: brand.error.accent,
    [buttonVars.focus.icon]: brand.error.accent,
    [buttonVars.focus.boxShadowInner]: base.frenchVanilla100,
    [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
  },
  '&:active, &.active': {
    [buttonVars.active.background]: brand.error.darkest,
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.label]: brand.error.accent,
    [buttonVars.active.icon]: brand.error.accent,
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: brand.error.base,
    [buttonVars.disabled.label]: brand.error.accent,
    [buttonVars.disabled.icon]: brand.error.accent,
    [buttonVars.disabled.opacity]: '0.4',
  },
});

/**
 * Use sparingly for destructive actions that will result in data loss, can’t be undone, or will
 * have significant consequences. They commonly appear in confirmation dialogs as the final
 * confirmation before deleting.
 */
export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: ({children, size, ...elemProps}: DeleteButtonProps, ref, Element) => {
    return (
      <Button as={Element} ref={ref} size={size} {...mergeStyles(elemProps, [deleteStyles])}>
        {children}
      </Button>
    );
  },
});
