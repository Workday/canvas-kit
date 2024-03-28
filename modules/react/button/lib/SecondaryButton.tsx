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
  [buttonVars.default.border]: system.color.border.contrast.default,
  [buttonVars.default.borderRadius]: system.shape.round,
  [buttonVars.default.label]: system.color.fg.strong,
  [systemIconStencil.vars.color]: system.color.fg.strong,
  // Focus Styles
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: 'transparent',
    [buttonVars.focus.border]: system.color.border.contrast.default,
    [buttonVars.focus.label]: system.color.fg.strong,
    [buttonVars.focus.boxShadowInner]: system.color.fg.inverse,
    [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
    [systemIconStencil.vars.color]: system.color.fg.strong,
  },
  // Hover Styles
  '&:hover, &.hover': {
    [buttonVars.hover.background]: system.color.bg.contrast.default,
    [buttonVars.hover.border]: system.color.border.contrast.default,
    [buttonVars.hover.label]: brand.primary.accent,
    [systemIconStencil.vars.color]: brand.primary.accent,
  },
  // Active Styles
  '&:active, &.active': {
    [buttonVars.active.background]: system.color.bg.contrast.strong,
    [buttonVars.active.border]: system.color.border.contrast.strong,
    [buttonVars.active.label]: brand.primary.accent,
    [systemIconStencil.vars.color]: brand.primary.accent,
  },
  // Disabled Styles
  '&:disabled, &.disabled': {
    [buttonVars.disabled.background]: 'transparent',
    [buttonVars.disabled.border]: system.color.border.contrast.default,
    [buttonVars.disabled.label]: system.color.fg.strong,
    [buttonVars.disabled.opacity]: '0.4',
    [systemIconStencil.vars.color]: system.color.fg.strong,
  },
});

export const secondaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: system.color.border.inverse,
      [buttonVars.default.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      // Focus Styles
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: system.color.bg.default,
        [buttonVars.focus.border]: system.color.border.inverse,
        [buttonVars.focus.label]: system.color.fg.strong,
        [buttonVars.focus.boxShadowInner]: system.color.fg.strong,
        [buttonVars.focus.boxShadowOuter]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.strong,
      },
      // Hover Styles
      '&:hover, &.hover': {
        [buttonVars.hover.background]: system.color.bg.alt.default,
        [buttonVars.hover.border]: base.soap300,
        [buttonVars.hover.label]: system.color.fg.stronger,
        [systemIconStencil.vars.color]: system.color.fg.stronger,
      },
      // Active Styles
      '&:active, &.active': {
        [buttonVars.active.background]: system.color.bg.alt.strong,
        [buttonVars.active.border]: system.color.bg.alt.strong,
        [buttonVars.active.label]: system.color.fg.stronger,
        [systemIconStencil.vars.color]: system.color.fg.stronger,
      },
      // Disabled Styles
      '&:disabled, &.disabled': {
        [buttonVars.disabled.background]: 'transparent',
        [buttonVars.disabled.border]: system.color.border.inverse,
        [buttonVars.disabled.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
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
