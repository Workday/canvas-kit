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
  [buttonVars.default.icon]: base.blackPepper400,
  [buttonVars.default.border]: base.blackPepper400,
  [buttonVars.default.borderRadius]: system.shape.round,
  [buttonVars.default.label]: base.blackPepper400,
  [buttonVars.default.icon]: base.blackPepper400,
  // Hover Styles
  [buttonVars.hover.background]: base.blackPepper400,
  [buttonVars.hover.border]: base.blackPepper400,
  [buttonVars.hover.label]: brand.primary.accent,
  [buttonVars.hover.icon]: brand.primary.accent,
  [buttonVars.hover.background]: base.blackPepper400,
  [buttonVars.hover.border]: base.blackPepper400,
  [buttonVars.hover.label]: brand.primary.accent,
  [buttonVars.hover.icon]: brand.primary.accent,
  // Focus Styles
  [buttonVars.focus.background]: 'transparent',
  [buttonVars.focus.border]: base.blackPepper400,
  [buttonVars.focus.label]: base.blackPepper400,
  [buttonVars.focus.icon]: base.blackPepper400,
  [buttonVars.focus.boxShadowInner]: base.frenchVanilla100,
  [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
  [buttonVars.focus.border]: base.blackPepper400,
  [buttonVars.focus.label]: base.blackPepper400,
  [buttonVars.focus.icon]: base.blackPepper400,
  [buttonVars.focus.boxShadowInner]: base.frenchVanilla100,
  [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
  // Active Styles
  [buttonVars.active.background]: base.blackPepper500,
  [buttonVars.active.border]: base.blackPepper500,
  [buttonVars.active.label]: brand.primary.accent,
  [buttonVars.active.icon]: brand.primary.accent,
  [buttonVars.active.background]: base.blackPepper500,
  [buttonVars.active.border]: base.blackPepper500,
  [buttonVars.active.label]: brand.primary.accent,
  [buttonVars.active.icon]: brand.primary.accent,
  // Disabled Styles
  [buttonVars.disabled.background]: 'transparent',
  [buttonVars.disabled.border]: base.blackPepper400,
  [buttonVars.disabled.label]: base.blackPepper400,
  [buttonVars.disabled.border]: base.blackPepper400,
  [buttonVars.disabled.label]: base.blackPepper400,
  [buttonVars.disabled.opacity]: '0.4',
  [buttonVars.disabled.icon]: base.blackPepper400,
  [buttonVars.disabled.icon]: base.blackPepper400,
});

export const secondaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: base.frenchVanilla100,
      [buttonVars.default.label]: base.frenchVanilla100,
      [buttonVars.default.icon]: base.frenchVanilla100,
      [buttonVars.default.border]: base.frenchVanilla100,
      [buttonVars.default.label]: base.frenchVanilla100,
      [buttonVars.default.icon]: base.frenchVanilla100,
      // Hover Styles
      [buttonVars.hover.background]: base.soap300,
      [buttonVars.hover.border]: base.soap300,
      [buttonVars.hover.label]: base.blackPepper500,
      [buttonVars.hover.icon]: base.blackPepper500,
      [buttonVars.hover.background]: base.soap300,
      [buttonVars.hover.border]: base.soap300,
      [buttonVars.hover.label]: base.blackPepper500,
      [buttonVars.hover.icon]: base.blackPepper500,
      // Focus Styles
      [buttonVars.focus.background]: base.frenchVanilla100,
      [buttonVars.focus.border]: base.frenchVanilla100,
      [buttonVars.focus.label]: base.blackPepper400,
      [buttonVars.focus.icon]: base.blackPepper400,
      [buttonVars.focus.boxShadowInner]: base.blackPepper400,
      [buttonVars.focus.boxShadowOuter]: base.frenchVanilla100,
      // Active Styles
      [buttonVars.active.background]: base.soap400,
      [buttonVars.active.border]: base.soap400,
      [buttonVars.active.label]: base.blackPepper500,
      [buttonVars.active.icon]: base.blackPepper500,
      [buttonVars.active.background]: base.soap400,
      [buttonVars.active.border]: base.soap400,
      [buttonVars.active.label]: base.blackPepper500,
      [buttonVars.active.icon]: base.blackPepper500,
      // Disabled Styles
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: base.frenchVanilla100,
      [buttonVars.disabled.label]: base.frenchVanilla100,
      [buttonVars.disabled.icon]: base.frenchVanilla100,
      [buttonVars.disabled.border]: base.frenchVanilla100,
      [buttonVars.disabled.label]: base.frenchVanilla100,
      [buttonVars.disabled.icon]: base.frenchVanilla100,
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
