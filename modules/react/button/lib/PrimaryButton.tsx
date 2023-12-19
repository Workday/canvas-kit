import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
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
  // Default Styles
  [buttonVars.default.background]: brand.primary.base,
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: system.shape.round,
  [buttonVars.default.label]: brand.primary.accent,
  [buttonVars.default.icon]: brand.primary.accent,
  // Hover Styles
  [buttonVars.hover.background]: brand.primary.dark,
  [buttonVars.hover.border]: 'transparent',
  [buttonVars.hover.label]: brand.primary.accent,
  [buttonVars.hover.icon]: brand.primary.accent,
  // Focus Styles
  [buttonVars.focus.background]: brand.primary.base,
  [buttonVars.focus.border]: 'transparent',
  [buttonVars.focus.label]: brand.primary.accent,
  [buttonVars.focus.icon]: brand.primary.accent,
  [buttonVars.focus.boxShadowInner]: base.frenchVanilla100,
  [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
  // Active Styles
  [buttonVars.active.background]: brand.primary.darkest,
  [buttonVars.active.border]: 'transparent',
  [buttonVars.active.label]: brand.primary.accent,
  [buttonVars.active.icon]: brand.primary.accent,
  // Disabled Styles
  [buttonVars.disabled.background]: brand.primary.base,
  [buttonVars.disabled.border]: 'transparent',
  [buttonVars.disabled.label]: brand.primary.accent,
  [buttonVars.disabled.opacity]: '0.4',
  [buttonVars.disabled.icon]: brand.primary.accent,
});

export const primaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: base.frenchVanilla100,
      [buttonVars.default.borderRadius]: system.shape.round,
      [buttonVars.default.label]: base.blackPepper400,
      [buttonVars.default.icon]: base.blackPepper400,
      // Hover Styles
      [buttonVars.hover.background]: base.soap300,
      [buttonVars.hover.label]: base.blackPepper500,
      [buttonVars.hover.icon]: base.blackPepper500,
      // Focus Styles
      [buttonVars.focus.background]: base.frenchVanilla100,
      [buttonVars.focus.label]: base.blackPepper400,
      [buttonVars.focus.icon]: base.blackPepper400,
      [buttonVars.focus.boxShadowInner]: base.blackPepper400,
      [buttonVars.focus.boxShadowOuter]: base.frenchVanilla100,
      // Active Styles
      [buttonVars.active.background]: base.soap400,
      [buttonVars.active.label]: base.blackPepper500,
      [buttonVars.active.icon]: base.blackPepper500,
      // Disabled Styles
      [buttonVars.disabled.background]: base.frenchVanilla100,
      [buttonVars.disabled.label]: base.blackPepper400,
      [buttonVars.disabled.icon]: base.blackPepper400,
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
