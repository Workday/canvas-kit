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
export interface PrimaryButtonProps extends ButtonProps {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const primaryStyles = createStyles({
  // Default Styles
  [buttonVars.default.background]: cssVar(brand.primary.base, cssVar(base.blueberry400)),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.label]: cssVar(brand.primary.accent),
  [buttonVars.default.icon]: cssVar(brand.primary.accent),
  // Hover Styles
  [buttonVars.hover.background]: cssVar(brand.primary.dark),
  [buttonVars.hover.border]: 'transparent',
  [buttonVars.hover.label]: cssVar(brand.primary.accent),
  [buttonVars.hover.icon]: cssVar(brand.primary.accent),
  // Focus Styles
  [buttonVars.focus.background]: cssVar(brand.primary.base),
  [buttonVars.focus.border]: 'transparent',
  [buttonVars.focus.label]: cssVar(brand.primary.accent),
  [buttonVars.focus.icon]: cssVar(brand.primary.accent),
  [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100),
  [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
  // Active Styles
  [buttonVars.active.background]: cssVar(brand.primary.darkest),
  [buttonVars.active.border]: 'transparent',
  [buttonVars.active.label]: cssVar(brand.primary.accent),
  [buttonVars.active.icon]: cssVar(brand.primary.accent),
  // Disabled Styles
  [buttonVars.disabled.background]: cssVar(brand.primary.base),
  [buttonVars.disabled.border]: 'transparent',
  [buttonVars.disabled.label]: cssVar(brand.primary.accent),
  [buttonVars.disabled.opacity]: '0.4',
  [buttonVars.disabled.icon]: cssVar(brand.primary.accent),
});

export const primaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: cssVar(base.frenchVanilla100),
      [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
      [buttonVars.default.label]: cssVar(base.blackPepper400),
      [buttonVars.default.icon]: cssVar(base.blackPepper400),
      // Hover Styles
      [buttonVars.hover.background]: cssVar(base.soap300),
      [buttonVars.hover.label]: cssVar(base.blackPepper500),
      [buttonVars.hover.icon]: cssVar(base.blackPepper500),
      // Focus Styles
      [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
      [buttonVars.focus.label]: cssVar(base.blackPepper400),
      [buttonVars.focus.icon]: cssVar(base.blackPepper400),
      [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper400),
      [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
      // Active Styles
      [buttonVars.active.background]: cssVar(base.soap400),
      [buttonVars.active.label]: cssVar(base.blackPepper500),
      [buttonVars.active.icon]: cssVar(base.blackPepper500),
      // Disabled Styles
      [buttonVars.disabled.background]: cssVar(base.frenchVanilla100),
      [buttonVars.disabled.label]: cssVar(base.blackPepper400),
      [buttonVars.disabled.icon]: cssVar(base.blackPepper400),
    }),
  },
});

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {children, icon, cs, iconPosition, variant, size, ...elemProps}: PrimaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        size={size}
        icon={icon}
        iconPosition={iconPosition}
        cs={[primaryStyles, primaryButtonModifiers({variant: variant}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
