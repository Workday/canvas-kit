import {buttonStencil} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

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

const secondaryButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: system.color.bg.transparent.default,
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.border]: system.color.border.input.default,
    [buttonStencil.vars.label]: system.color.fg.strong,
    [systemIconStencil.vars.color]: 'currentColor',
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.bg.default,
      [buttonStencil.vars.label]: system.color.fg.stronger,
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      [buttonStencil.vars.label]: system.color.fg.stronger,
      [buttonStencil.vars.border]: system.color.border.input.strong,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.strong,
      [buttonStencil.vars.label]: system.color.fg.stronger,
      [buttonStencil.vars.border]: system.color.border.input.strong,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.transparent.default,
      [buttonStencil.vars.label]: system.color.fg.stronger,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: 'currentColor',
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // Default Styles
        [buttonStencil.vars.background]: 'transparent',
        [buttonStencil.vars.border]: system.color.border.inverse,
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: 'currentColor',
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.transparent.strong,
          [buttonStencil.vars.border]: system.color.border.inverse,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.translucent,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.color.border.inverse,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.transparent.stronger,
          [buttonStencil.vars.border]: system.color.border.inverse,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.border]: system.color.border.inverse,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: 'currentColor',
        },
      },
    },
  },
});

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: (
    {children, variant, size, iconPosition, grow, cs, ...elemProps}: SecondaryButtonProps,
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
        cs={[secondaryButtonStencil({variant, iconPosition, grow, size}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
