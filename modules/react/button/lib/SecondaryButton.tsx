import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStyles, createModifiers} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '../../icon';

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

const secondaryStyles = createStyles({
  // Default Styles
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: base.blackPepper400,
  [buttonVars.default.borderRadius]: system.shape.round,
  [buttonVars.default.label]: base.blackPepper400,
  [systemIconStencil.vars.fillColor]: base.blackPepper400,
  // Focus Styles
  [buttonVars.focus.background]: 'transparent',
  [buttonVars.focus.border]: base.blackPepper400,
  [buttonVars.focus.label]: base.blackPepper400,
  [buttonVars.focus.boxShadowInner]: base.frenchVanilla100,
  [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
  '&:focus-visible, &.focus': {
    [systemIconStencil.vars.fillColor]: base.blackPepper400,
  },
  // Hover Styles
  [buttonVars.hover.background]: base.blackPepper400,
  [buttonVars.hover.border]: base.blackPepper400,
  [buttonVars.hover.label]: brand.primary.accent,
  '&:hover, &.hover': {
    [systemIconStencil.vars.fillColor]: brand.primary.accent,
  },
  // Active Styles
  [buttonVars.active.background]: base.blackPepper500,
  [buttonVars.active.border]: base.blackPepper500,
  [buttonVars.active.label]: brand.primary.accent,
  '&:active, &.active': {
    [systemIconStencil.vars.fillColor]: brand.primary.accent,
  },
  // Disabled Styles
  [buttonVars.disabled.background]: 'transparent',
  [buttonVars.disabled.border]: base.blackPepper400,
  [buttonVars.disabled.label]: base.blackPepper400,
  [buttonVars.disabled.opacity]: '0.4',
  '&:disabled, &.disabled': {
    [systemIconStencil.vars.fillColor]: base.blackPepper400,
  },
});

export const secondaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: base.frenchVanilla100,
      [buttonVars.default.label]: base.frenchVanilla100,
      [systemIconStencil.vars.fillColor]: base.frenchVanilla100,
      // Focus Styles
      [buttonVars.focus.background]: base.frenchVanilla100,
      [buttonVars.focus.border]: base.frenchVanilla100,
      [buttonVars.focus.label]: base.blackPepper400,
      [buttonVars.focus.boxShadowInner]: base.blackPepper400,
      [buttonVars.focus.boxShadowOuter]: base.frenchVanilla100,
      '&:focus-visible, &.focus': {
        [systemIconStencil.vars.fillColor]: base.blackPepper400,
      },
      // Hover Styles
      [buttonVars.hover.background]: base.soap300,
      [buttonVars.hover.border]: base.soap300,
      [buttonVars.hover.label]: base.blackPepper500,
      '&:hover, &.hover': {
        [systemIconStencil.vars.fillColor]: base.blackPepper500,
      },
      // Active Styles
      [buttonVars.active.background]: base.soap400,
      [buttonVars.active.border]: base.soap400,
      [buttonVars.active.label]: base.blackPepper500,
      '&:active, &.active': {
        [systemIconStencil.vars.fillColor]: base.blackPepper500,
      },
      // Disabled Styles
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: base.frenchVanilla100,
      [buttonVars.disabled.label]: base.frenchVanilla100,
      '&:disabled, &.disabled': {
        [systemIconStencil.vars.fillColor]: base.frenchVanilla100,
      },
    }),
  },
});

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: ({children, variant, ...elemProps}: SecondaryButtonProps, ref, Element) => {
    return (
      <Button
        as={Element}
        ref={ref}
        {...mergeStyles(elemProps, [secondaryStyles, secondaryButtonModifiers({variant: variant})])}
      >
        {children}
      </Button>
    );
  },
});
