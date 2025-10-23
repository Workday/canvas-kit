import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {buttonStencil} from './BaseButton';
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

const primaryButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: cssVar(brand.action.base, brand.primary.base),
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
    [systemIconStencil.vars.color]: 'currentColor',
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: cssVar(brand.action.base, brand.primary.base),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: cssVar(brand.action.dark, brand.primary.dark),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: cssVar(brand.action.darkest, brand.primary.darkest),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: cssVar(brand.action.base, brand.primary.base),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: 'currentColor',
    },
  },
  modifiers: {
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: cssVar(brand.action.lightest, brand.primary.lightest),
        [buttonStencil.vars.borderRadius]: system.shape.round,
        [buttonStencil.vars.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: 'currentColor',
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: cssVar(brand.action.lightest, brand.primary.lightest),
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.color.border.inverse,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: cssVar(brand.action.lighter, brand.primary.lightest),
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: cssVar(brand.action.light, brand.primary.light),
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: cssVar(brand.action.lightest, brand.primary.lightest),
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
        },
      },
    },
  },
});

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {children, variant, size, iconPosition, grow, cs, ...elemProps}: PrimaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        iconPosition={iconPosition}
        size={size}
        grow={grow}
        cs={[primaryButtonStencil({variant, iconPosition, grow, size}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
