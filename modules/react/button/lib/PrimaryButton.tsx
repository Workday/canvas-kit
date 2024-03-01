import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStyles, createModifiers} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';

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

const primaryStyles = createStyles({
  [buttonVars.default.background]: brand.primary.base,
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: system.shape.round,
  [buttonVars.default.label]: brand.primary.accent,
  [systemIconStencil.vars.color]: brand.primary.accent,
  '&:focus-visible, .focus': {
    [buttonVars.focus.background]: brand.primary.base,
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.label]: brand.primary.accent,
    [buttonVars.focus.boxShadowInner]: base.frenchVanilla100,
    [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
    [systemIconStencil.vars.color]: brand.primary.accent,
  },
  '&:hover, &.hover': {
    [buttonVars.hover.background]: brand.primary.dark,
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.label]: brand.primary.accent,
    [systemIconStencil.vars.color]: brand.primary.accent,
  },

  '&:acitve, &.acitve': {
    [buttonVars.active.background]: brand.primary.darkest,
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.label]: brand.primary.accent,
    [systemIconStencil.vars.color]: brand.primary.accent,
  },
  '&:disabled, &.disabled': {
    [buttonVars.disabled.background]: brand.primary.base,
    [buttonVars.disabled.border]: 'transparent',
    [buttonVars.disabled.label]: brand.primary.accent,
    [buttonVars.disabled.opacity]: '0.4',
    [systemIconStencil.vars.color]: brand.primary.accent,
  },
});

export const primaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      [buttonVars.default.background]: base.frenchVanilla100,
      [buttonVars.default.borderRadius]: system.shape.round,
      [buttonVars.default.label]: base.blackPepper400,
      [systemIconStencil.vars.color]: base.blackPepper400,
      '&:focus-visible, .focus': {
        [buttonVars.focus.background]: base.frenchVanilla100,
        [buttonVars.focus.label]: base.blackPepper400,
        [buttonVars.focus.boxShadowInner]: base.blackPepper400,
        [buttonVars.focus.boxShadowOuter]: base.frenchVanilla100,
        [systemIconStencil.vars.color]: base.blackPepper400,
      },
      '&:hover, .hover': {
        [buttonVars.hover.background]: base.soap300,
        [buttonVars.hover.label]: base.blackPepper500,
        [systemIconStencil.vars.color]: base.blackPepper500,
      },
      '&:active, .active': {
        [buttonVars.active.background]: base.soap400,
        [buttonVars.active.label]: base.blackPepper500,
        [systemIconStencil.vars.color]: base.blackPepper500,
      },
      '&:disabled, .disabled': {
        [buttonVars.disabled.background]: base.frenchVanilla100,
        [buttonVars.disabled.label]: base.blackPepper400,
        [systemIconStencil.vars.color]: base.blackPepper400,
      },
    }),
  },
});

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: ({children, variant, ...elemProps}: PrimaryButtonProps, ref, Element) => {
    return (
      <Button
        as={Element}
        ref={ref}
        {...mergeStyles(elemProps, [primaryStyles, primaryButtonModifiers({variant: variant})])}
      >
        {children}
      </Button>
    );
  },
});
