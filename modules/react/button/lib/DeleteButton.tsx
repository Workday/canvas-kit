import * as React from 'react';

import {buttonStencil} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends ButtonProps {}

const deleteButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: brand.error.base,
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: brand.error.accent,
    [systemIconStencil.vars.color]: brand.error.accent,
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: brand.error.base,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
      [buttonStencil.vars.boxShadowInner]: system.color.fg.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: brand.error.dark,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: brand.error.darkest,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: brand.error.base,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
    },
  },
});

/**
 * Use sparingly for destructive actions that will result in data loss, can’t be undone, or will
 * have significant consequences. They commonly appear in confirmation dialogs as the final
 * confirmation before being deleted.
 */
export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: ({children, ...elemProps}: DeleteButtonProps, ref, Element) => {
    return (
      <Button as={Element} ref={ref} {...mergeStyles(elemProps, deleteButtonStencil())}>
        {children}
      </Button>
    );
  },
});
