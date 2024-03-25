import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStyles, createModifiers, createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
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

const primaryStyles = createStencil({
  base: {
    [buttonVars.default.background]: brand.primary.base,
    [buttonVars.default.border]: 'transparent',
    [buttonVars.default.borderRadius]: system.shape.round,
    [buttonVars.default.label]: brand.primary.accent,
    [systemIconStencil.vars.color]: brand.primary.accent,
    '&:focus-visible, &.focus': {
      [buttonVars.focus.background]: brand.primary.base,
      [buttonVars.focus.border]: 'transparent',
      [buttonVars.focus.label]: brand.primary.accent,
      [buttonVars.focus.boxShadowInner]: system.color.border.inverse,
      [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    '&:hover, &.hover': {
      [buttonVars.hover.background]: brand.primary.dark,
      [buttonVars.hover.border]: 'transparent',
      [buttonVars.hover.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    '&:active, &.active': {
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
  },
});

export const primaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      [buttonVars.default.background]: system.color.bg.default,
      [buttonVars.default.borderRadius]: system.shape.round,
      [buttonVars.default.label]: system.color.text.strong,
      [systemIconStencil.vars.color]: system.color.fg.strong,
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: system.color.bg.default,
        [buttonVars.focus.label]: system.color.fg.strong,
        [buttonVars.focus.boxShadowInner]: system.color.fg.strong,
        [buttonVars.focus.boxShadowOuter]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.strong,
      },
      '&:hover, &.hover': {
        [buttonVars.hover.background]: system.color.bg.alt.default,
        [buttonVars.hover.label]: system.color.fg.stronger,
        [systemIconStencil.vars.color]: system.color.fg.stronger,
      },
      '&:active, &.active': {
        [buttonVars.active.background]: system.color.bg.alt.strong,
        [buttonVars.active.label]: system.color.fg.stronger,
        [systemIconStencil.vars.color]: system.color.fg.stronger,
      },
      '&:disabled, &.disabled': {
        [buttonVars.disabled.background]: system.color.bg.default,
        [buttonVars.disabled.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: system.color.fg.strong,
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
        {...mergeStyles(elemProps, [primaryStyles(), primaryButtonModifiers({variant: variant})])}
      >
        {children}
      </Button>
    );
  },
});
