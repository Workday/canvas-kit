import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
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
  [buttonVars.default.background]: cssVar(brand.error.base, '#de2e21'),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.round, '62.5rem'),
  [buttonVars.default.label]: cssVar(brand.error.accent, '#ffffff'),
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(brand.error.dark, '#a31b12'),
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.label]: cssVar(brand.error.accent, '#ffffff'),
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: cssVar(brand.error.base, '#de2e21'),
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.label]: cssVar(brand.error.accent, '#ffffff'),
    [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100, '#ffffff'),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline, '#0875e1'),
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(brand.error.darkest, 'rgba(128,22,14,1)'),
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.label]: cssVar(brand.error.accent, '#ffffff'),
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: cssVar(brand.error.light, '#fcc9c5'),
    [buttonVars.disabled.label]: cssVar(brand.error.accent, '#ffffff'),
    opacity: 1,
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
