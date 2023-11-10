import * as React from 'react';

import {buttonVars} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
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
  [buttonVars.default.background]: cssVar(brand.primary.base, cssVar(base.blueberry400, '#0875e1')),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.round, '62.5rem'),
  [buttonVars.default.label]: cssVar(brand.primary.accent, '#ffffff'),
  [buttonVars.default.icon]: cssVar(brand.primary.accent, '#ffffff'),
  // Hover Styles
  [buttonVars.hover.background]: cssVar(brand.primary.dark, 'rgba(0,92,184,1)'),
  [buttonVars.hover.border]: 'transparent',
  [buttonVars.hover.label]: cssVar(brand.primary.accent, '#ffffff'),
  [buttonVars.hover.icon]: cssVar(brand.primary.accent, '#ffffff'),
  // Focus Styles
  [buttonVars.focus.background]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
  [buttonVars.focus.border]: 'transparent',
  [buttonVars.focus.label]: cssVar(brand.primary.accent, '#ffffff'),
  [buttonVars.focus.icon]: cssVar(brand.primary.accent, '#ffffff'),
  [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100, '#ffffff'),
  [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline, 'rgba(8,117,226,1)'),
  // Active Styles
  [buttonVars.active.background]: cssVar(brand.primary.darkest, 'rgba(0,66,133,1)'),
  [buttonVars.active.border]: 'transparent',
  [buttonVars.active.label]: cssVar(brand.primary.accent, '#ffffff'),
  [buttonVars.active.icon]: cssVar(brand.primary.accent, '#ffffff'),
  // Disabled Styles
  [buttonVars.disabled.background]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
  [buttonVars.disabled.border]: 'transparent',
  [buttonVars.disabled.label]: cssVar(brand.primary.accent, '#ffffff'),
  [buttonVars.disabled.opacity]: '0.4',
  [buttonVars.disabled.icon]: cssVar(brand.primary.accent, '#ffffff'),
});

export const primaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: cssVar(base.frenchVanilla100, '#ffffff'),
      [buttonVars.default.borderRadius]: cssVar(system.shape.round, '62.5rem'),
      [buttonVars.default.label]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
      [buttonVars.default.icon]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
      // Hover Styles
      [buttonVars.hover.background]: cssVar(base.soap300, 'rgba(232,235,237,1)'),
      [buttonVars.hover.label]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      [buttonVars.hover.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      // Focus Styles
      [buttonVars.focus.background]: cssVar(base.frenchVanilla100, '#ffffff'),
      [buttonVars.focus.label]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
      [buttonVars.focus.icon]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
      [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
      [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100, '#ffffff'),
      // Active Styles
      [buttonVars.active.background]: cssVar(base.soap400, 'rgba(224,227,230,1)'),
      [buttonVars.active.label]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      [buttonVars.active.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      // Disabled Styles
      [buttonVars.disabled.background]: cssVar(base.frenchVanilla100, '#ffffff'),
      [buttonVars.disabled.label]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
      [buttonVars.disabled.icon]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
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
