import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {baseButtonStencil} from './BaseButton';
import {Button, ButtonProps} from './Button';
import {mergeStyles} from '../../layout';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface PrimaryButtonProps extends ButtonProps {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const primaryButtonStencil = createStencil({
  extends: baseButtonStencil,
  base: {
    // Base Styles
    [baseButtonStencil.vars.background]: brand.primary.base,
    // [baseButtonStencil.vars.border]: 'transparent',
    [baseButtonStencil.vars.borderRadius]: system.shape.round,
    [baseButtonStencil.vars.label]: brand.primary.accent,
    [systemIconStencil.vars.color]: brand.primary.accent,
    // Focus Styles
    '&:focus-visible, &.focus': {
      [baseButtonStencil.vars.background]: brand.primary.base,
      [baseButtonStencil.vars.label]: brand.primary.accent,
      [baseButtonStencil.vars.boxShadowInner]: system.color.border.inverse,
      [baseButtonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [baseButtonStencil.vars.background]: brand.primary.dark,
      [baseButtonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Active Styles
    '&:active, &.active': {
      [baseButtonStencil.vars.background]: brand.primary.darkest,
      [baseButtonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [baseButtonStencil.vars.background]: brand.primary.base,
      [baseButtonStencil.vars.label]: brand.primary.accent,
      [baseButtonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
  },
  modifiers: {
    variant: {
      // Inverse Styles
      inverse: {
        [baseButtonStencil.vars.background]: system.color.bg.default,
        [baseButtonStencil.vars.borderRadius]: system.shape.round,
        [baseButtonStencil.vars.label]: system.color.text.strong,
        [systemIconStencil.vars.color]: system.color.fg.strong,
        // Focus Styles
        '&:focus-visible, &.focus': {
          [baseButtonStencil.vars.background]: system.color.bg.default,
          [baseButtonStencil.vars.label]: system.color.fg.strong,
          [baseButtonStencil.vars.boxShadowInner]: system.color.fg.strong,
          [baseButtonStencil.vars.boxShadowOuter]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.color.fg.strong,
        },
        // Hover Styles
        '&:hover, &.hover': {
          [baseButtonStencil.vars.background]: system.color.bg.alt.default,
          [baseButtonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Active Styles
        '&:active, &.active': {
          [baseButtonStencil.vars.background]: system.color.bg.alt.strong,
          [baseButtonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [baseButtonStencil.vars.background]: system.color.bg.default,
          [baseButtonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: system.color.fg.strong,
        },
      },
    },
  },
});

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {children, variant, size, iconPosition, ...elemProps}: PrimaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        size={size}
        iconPosition={iconPosition}
        {...mergeStyles(elemProps, primaryButtonStencil({size, variant, iconPosition}))}
      >
        {children}
      </Button>
    );
  },
});
