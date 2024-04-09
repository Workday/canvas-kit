import * as React from 'react';

import {baseButtonStencil} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '../../layout';

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
  extends: baseButtonStencil,
  base: {
    // Base Styles
    [baseButtonStencil.vars.background]: 'transparent',
    [baseButtonStencil.vars.border]: system.color.border.contrast.default,
    [baseButtonStencil.vars.borderRadius]: system.shape.round,
    [baseButtonStencil.vars.label]: system.color.fg.strong,
    [systemIconStencil.vars.color]: system.color.fg.strong,
    // Focus Styles
    '&:focus-visible, &.focus': {
      [baseButtonStencil.vars.background]: 'transparent',
      [baseButtonStencil.vars.border]: system.color.border.contrast.default,
      [baseButtonStencil.vars.label]: system.color.fg.strong,
      [baseButtonStencil.vars.boxShadowInner]: system.color.fg.inverse,
      [baseButtonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [baseButtonStencil.vars.background]: system.color.bg.contrast.default,
      [baseButtonStencil.vars.border]: system.color.border.contrast.default,
      [baseButtonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Active Styles
    '&:active, &.active': {
      [baseButtonStencil.vars.background]: system.color.bg.contrast.strong,
      [baseButtonStencil.vars.border]: system.color.border.contrast.strong,
      [baseButtonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [baseButtonStencil.vars.background]: 'transparent',
      [baseButtonStencil.vars.border]: system.color.border.contrast.default,
      [baseButtonStencil.vars.label]: system.color.fg.strong,
      [baseButtonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // Default Styles
        [baseButtonStencil.vars.background]: 'transparent',
        [baseButtonStencil.vars.border]: system.color.border.inverse,
        [baseButtonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
        // Focus Styles
        '&:focus-visible, &.focus': {
          [baseButtonStencil.vars.background]: system.color.bg.default,
          [baseButtonStencil.vars.border]: system.color.border.inverse,
          [baseButtonStencil.vars.label]: system.color.fg.strong,
          [baseButtonStencil.vars.boxShadowInner]: system.color.fg.strong,
          [baseButtonStencil.vars.boxShadowOuter]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.color.fg.strong,
        },
        // Hover Styles
        '&:hover, &.hover': {
          [baseButtonStencil.vars.background]: system.color.bg.alt.default,
          [baseButtonStencil.vars.border]: system.color.border.input.inverse,
          [baseButtonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Active Styles
        '&:active, &.active': {
          [baseButtonStencil.vars.background]: system.color.bg.alt.strong,
          [baseButtonStencil.vars.border]: base.soap400,
          [baseButtonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [baseButtonStencil.vars.background]: 'transparent',
          [baseButtonStencil.vars.border]: system.color.border.inverse,
          [baseButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
  },
});

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: (
    {children, variant, size, iconPosition, ...elemProps}: SecondaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        size={size}
        iconPosition={iconPosition}
        {...mergeStyles(elemProps, secondaryButtonStencil({size, variant, iconPosition}))}
      >
        {children}
      </Button>
    );
  },
});
