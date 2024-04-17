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
export interface SecondaryButtonProps extends ButtonProps {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const secondaryButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: 'transparent',
    [buttonStencil.vars.border]: system.color.border.contrast.default,
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: system.color.fg.strong,
    [systemIconStencil.vars.color]: system.color.fg.strong,
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.boxShadowInner]: system.color.fg.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.contrast.default,
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.contrast.strong,
      [buttonStencil.vars.border]: system.color.border.contrast.strong,
      [buttonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // Default Styles
        [buttonStencil.vars.background]: 'transparent',
        [buttonStencil.vars.border]: system.color.border.inverse,
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowOuter]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.color.fg.strong,
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.alt.default,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.alt.strong,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.border]: system.color.border.inverse,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
  },
});

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: ({children, variant, ...elemProps}: SecondaryButtonProps, ref, Element) => {
    return (
      <Button as={Element} ref={ref} {...mergeStyles(elemProps, secondaryButtonStencil({variant}))}>
        {children}
      </Button>
    );
  },
});
