import * as React from 'react';

import {baseButtonStencil} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends ButtonProps {}

const deleteButtonStencil = createStencil({
  extends: baseButtonStencil,
  base: {
    // Base Styles
    [baseButtonStencil.vars.background]: brand.error.base,
    [baseButtonStencil.vars.border]: 'transparent',
    [baseButtonStencil.vars.borderRadius]: system.shape.round,
    [baseButtonStencil.vars.label]: brand.error.accent,
    [systemIconStencil.vars.color]: brand.error.accent,
    // Focus Styles
    '&:focus-visible, &.focus': {
      [baseButtonStencil.vars.background]: brand.error.base,
      [baseButtonStencil.vars.border]: 'transparent',
      [baseButtonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
      [baseButtonStencil.vars.boxShadowInner]: system.color.fg.inverse,
      [baseButtonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [baseButtonStencil.vars.background]: brand.error.dark,
      [baseButtonStencil.vars.border]: 'transparent',
      [baseButtonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
    },
    // Active Styles
    '&:active, &.active': {
      [baseButtonStencil.vars.background]: brand.error.darkest,
      [baseButtonStencil.vars.border]: 'transparent',
      [baseButtonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [baseButtonStencil.vars.background]: brand.error.base,
      [baseButtonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: brand.error.accent,
      [baseButtonStencil.vars.opacity]: '0.4',
    },
  },
});

/**
 * Use sparingly for destructive actions that will result in data loss, can’t be undone, or will
 * have significant consequences. They commonly appear in confirmation dialogs as the final
 * confirmation before deleting.
 */
export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: ({children, size, iconPosition, ...elemProps}: DeleteButtonProps, ref, Element) => {
    return (
      <Button
        as={Element}
        ref={ref}
        size={size}
        iconPosition={iconPosition}
        {...handleCsProp(elemProps, deleteButtonStencil({size, iconPosition}))}
      >
        {children}
      </Button>
    );
  },
});
