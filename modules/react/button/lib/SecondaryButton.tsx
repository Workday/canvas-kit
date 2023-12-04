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
export interface SecondaryButtonProps extends ButtonProps {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const secondaryStyles = createStyles({
  // Default Styles
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.default.borderRadius]: cssVar(system.shape.round, '62.5rem'),
  [buttonVars.default.label]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.default.icon]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  // Hover Styles
  [buttonVars.hover.background]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.hover.border]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.hover.label]: cssVar(brand.primary.accent, 'rgba(255,255,255,1)'),
  [buttonVars.hover.icon]: cssVar(brand.primary.accent, 'rgba(255,255,255,1)'),
  // Focus Styles
  [buttonVars.focus.background]: 'transparent',
  [buttonVars.focus.border]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.focus.label]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.focus.icon]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
  [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline, 'rgba(8,117,226,1)'),
  // Active Styles
  [buttonVars.active.background]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
  [buttonVars.active.border]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
  [buttonVars.active.label]: cssVar(brand.primary.accent, 'rgba(255,255,255,1)'),
  [buttonVars.active.icon]: cssVar(brand.primary.accent, 'rgba(255,255,255,1)'),
  // Disabled Styles
  [buttonVars.disabled.background]: 'transparent',
  [buttonVars.disabled.border]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.disabled.label]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
  [buttonVars.disabled.opacity]: '0.4',
  [buttonVars.disabled.icon]: cssVar(base.blackPepper400, 'rgba(51,51,51,1)'),
});

export const secondaryButtonModifiers = createModifiers({
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      [buttonVars.default.label]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      [buttonVars.default.icon]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      // Hover Styles
      [buttonVars.hover.background]: cssVar(base.soap300, 'rgba(232,235,237,1)'),
      [buttonVars.hover.border]: cssVar(base.soap300, 'rgba(232,235,237,1)'),
      [buttonVars.hover.label]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      [buttonVars.hover.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      // Focus Styles
      [buttonVars.focus.background]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      [buttonVars.focus.border]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      [buttonVars.focus.label]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      [buttonVars.focus.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      // Active Styles
      [buttonVars.active.background]: cssVar(base.soap400, 'rgba(224,227,230,1)'),
      [buttonVars.active.border]: cssVar(base.soap400, 'rgba(224,227,230,1)'),
      [buttonVars.active.label]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      [buttonVars.active.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
      // Disabled Styles
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      [buttonVars.disabled.label]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
      [buttonVars.disabled.icon]: cssVar(base.frenchVanilla100, 'rgba(255,255,255,1)'),
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
