import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar, createModifiers} from '@workday/canvas-kit-styling';
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
  [buttonVars.default.border]: cssVar(base.blackPepper400),
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.label]: cssVar(base.blackPepper400),
  [buttonVars.default.icon]: cssVar(base.blackPepper400),
  // Hover Styles
  [buttonVars.hover.background]: cssVar(base.blackPepper400),
  [buttonVars.hover.border]: cssVar(base.blackPepper400),
  [buttonVars.hover.label]: cssVar(brand.primary.accent),
  [buttonVars.hover.icon]: cssVar(brand.primary.accent),
  // Focus Styles
  [buttonVars.focus.background]: 'transparent',
  [buttonVars.focus.border]: cssVar(base.blackPepper400),
  [buttonVars.focus.label]: cssVar(base.blackPepper400),
  [buttonVars.focus.icon]: cssVar(base.blackPepper400),
  [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100),
  [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
  // Active Styles
  [buttonVars.active.background]: cssVar(base.blackPepper500),
  [buttonVars.active.border]: cssVar(base.blackPepper500),
  [buttonVars.active.label]: cssVar(brand.primary.accent),
  [buttonVars.active.icon]: cssVar(brand.primary.accent),
  // Disabled Styles
  [buttonVars.disabled.background]: 'transparent',
  [buttonVars.disabled.border]: cssVar(base.blackPepper400),
  [buttonVars.disabled.label]: cssVar(base.blackPepper400),
  [buttonVars.disabled.opacity]: '0.4',
  [buttonVars.disabled.icon]: cssVar(base.blackPepper400),
});

export const secondaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: cssVar(base.frenchVanilla100),
      [buttonVars.default.label]: cssVar(base.frenchVanilla100),
      [buttonVars.default.icon]: cssVar(base.frenchVanilla100),
      // Hover Styles
      [buttonVars.hover.background]: cssVar(base.soap300),
      [buttonVars.hover.border]: cssVar(base.soap300),
      [buttonVars.hover.label]: cssVar(base.blackPepper500),
      [buttonVars.hover.icon]: cssVar(base.blackPepper500),
      // Focus Styles
      [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
      [buttonVars.focus.border]: cssVar(base.frenchVanilla100),
      [buttonVars.focus.label]: cssVar(base.blackPepper500),
      [buttonVars.focus.icon]: cssVar(base.blackPepper500),
      [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper500),
      [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
      // Active Styles
      [buttonVars.active.background]: cssVar(base.soap400),
      [buttonVars.active.border]: cssVar(base.soap400),
      [buttonVars.active.label]: cssVar(base.blackPepper500),
      [buttonVars.active.icon]: cssVar(base.blackPepper500),
      // Disabled Styles
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: cssVar(base.frenchVanilla100),
      [buttonVars.disabled.label]: cssVar(base.frenchVanilla100),
      [buttonVars.disabled.icon]: cssVar(base.frenchVanilla100),
    }),
  },
});

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: (
    {children, icon, cs, iconPosition, variant, ...elemProps}: SecondaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        icon={icon}
        iconPosition={iconPosition}
        cs={[secondaryStyles, secondaryButtonModifiers({variant: variant}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
