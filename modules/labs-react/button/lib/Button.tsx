import * as React from 'react';

import {BaseButton, buttonVars} from './BaseButton';
import {
  createComponent,
  GrowthBehavior,
  cs,
  createModifiers,
  newTheme,
  cssVar,
  tokenTheme,
} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes, IconPositions} from './types';

import {CanvasSystemIcon} from '@workday/design-assets-types';
import chroma from 'chroma-js';

type ButtonVariant =
  | 'primary'
  | 'primaryInverse'
  | 'secondary'
  | 'secondaryInverse'
  | 'tertiary'
  | 'tertiaryInverse';

export interface ButtonContainerProps extends Partial<SystemIconProps>, GrowthBehavior {
  /**
   * Override default colors of a button. The default will depend on the button type
   */
  colors?: ButtonColors;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   */
  size?: ButtonSizes;
  /**
   * Whether the icon should received filled (colored background layer) or regular styles.
   * Corresponds to `toggled` in ToolbarIconButton
   */
  fillIcon?: boolean;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   */
  shouldMirrorIcon?: boolean;
  /**
   * Has three variants Primary, Secondary and Tertiary
   */
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface ButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

export const ButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-button-icon-start',
    end: 'canvas-button-icon-end',
    only: 'canvas-button-icon-only',
  },
  variant: {
    primary: cs({
      [buttonVars.default.background]: cssVar(tokenTheme.primaryColor),
      [buttonVars.default.border]: cssVar(tokenTheme.primaryColor),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
      [buttonVars.default.color]: cssVar(tokenTheme.primaryColorContrast),
      '&:hover': {
        [buttonVars.hover.background]: cssVar(newTheme.colors.primary.button.background.hover),
        [buttonVars.hover.border]: cssVar(newTheme.colors.primary.button.border.hover),
        [buttonVars.hover.color]: cssVar(newTheme.colors.primary.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.primary.icon.base),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(newTheme.colors.primary.button.background.active),
        [buttonVars.active.border]: cssVar(newTheme.colors.primary.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.primary.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(newTheme.colors.primary.button.background.focus),
        [buttonVars.focus.border]: cssVar(newTheme.colors.primary.button.border.focus),
        [buttonVars.focus.color]: cssVar(newTheme.colors.primary.button.color.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.primaryColorContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.primaryColor),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.primary.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.primary.icon.base),
      },
    }),
    primaryInverse: cs({
      [buttonVars.default.background]: cssVar(
        newTheme.colors.primaryInverse.button.background.base
      ),
      [buttonVars.default.border]: cssVar(newTheme.colors.primaryInverse.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
      [buttonVars.default.color]: cssVar(newTheme.colors.primaryInverse.button.color.base),
      '&:hover': {
        [buttonVars.hover.background]: cssVar(
          newTheme.colors.primaryInverse.button.background.hover
        ),
        [buttonVars.hover.color]: cssVar(newTheme.colors.primaryInverse.button.color.hover),
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(
          newTheme.colors.primaryInverse.button.background.active
        ),
        [buttonVars.active.border]: cssVar(newTheme.colors.primaryInverse.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.primaryInverse.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(
          newTheme.colors.primaryInverse.button.background.focus
        ),
        [buttonVars.focus.border]: cssVar(newTheme.colors.primaryInverse.button.border.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.darkContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.primaryColorContrast),
        [buttonVars.focus.color]: cssVar(newTheme.colors.primaryInverse.button.color.focus),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.primaryInverse.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.primaryInverse.icon.base),
      },
    }),
    secondary: cs({
      [buttonVars.default.background]: cssVar(newTheme.colors.secondary.button.background.base),
      [buttonVars.default.border]: cssVar(newTheme.colors.secondary.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
      [buttonVars.default.color]: cssVar(newTheme.colors.secondary.button.color.base),
      '&:hover': {
        [buttonVars.hover.background]: cssVar(newTheme.colors.secondary.button.background.hover),
        [buttonVars.hover.border]: cssVar(newTheme.colors.secondary.button.border.hover),
        [buttonVars.hover.color]: cssVar(newTheme.colors.secondary.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.secondary.icon.hover),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(newTheme.colors.secondary.button.background.active),
        [buttonVars.active.border]: cssVar(newTheme.colors.secondary.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.secondary.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(newTheme.colors.secondary.button.background.focus),
        [buttonVars.focus.border]: cssVar(newTheme.colors.secondary.button.border.focus),
        [buttonVars.focus.color]: cssVar(newTheme.colors.secondary.button.color.focus),
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(8, 117, 225) 0px 0px 0px 4px',
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.secondary.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.secondary.icon.base),
      },
    }),
    secondaryInverse: cs({
      [buttonVars.default.background]: cssVar(
        newTheme.colors.secondaryInverse.button.background.base
      ),
      [buttonVars.default.border]: cssVar(newTheme.colors.secondaryInverse.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
      [buttonVars.default.color]: cssVar(newTheme.colors.secondaryInverse.button.color.base),
      '&:hover': {
        [buttonVars.hover.background]: cssVar(
          newTheme.colors.secondaryInverse.button.background.hover
        ),
        [buttonVars.hover.border]: cssVar(newTheme.colors.secondaryInverse.button.border.hover),
        [buttonVars.hover.color]: cssVar(newTheme.colors.secondaryInverse.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.secondaryInverse.icon.hover),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(
          newTheme.colors.secondaryInverse.button.background.active
        ),
        [buttonVars.active.border]: cssVar(newTheme.colors.secondaryInverse.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.secondaryInverse.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(
          newTheme.colors.secondaryInverse.button.background.focus
        ),
        [buttonVars.focus.border]: cssVar(newTheme.colors.secondaryInverse.button.border.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.darkContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.secondaryColorContrast),
        [buttonVars.focus.color]: cssVar(newTheme.colors.secondaryInverse.button.color.focus),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.secondaryInverse.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.secondaryInverse.icon.base),
        '&:focus-visible': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.secondaryInverse.icon.focus),
        },
      },
    }),
    tertiary: cs({
      [buttonVars.default.background]: cssVar(newTheme.colors.tertiary.button.background.base),
      [buttonVars.default.border]: cssVar(newTheme.colors.tertiary.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.m),
      [buttonVars.default.color]: cssVar(newTheme.colors.tertiary.button.color.base),
      textDecoration: 'underline',
      '&:hover': {
        [buttonVars.hover.background]: cssVar(newTheme.colors.tertiary.button.background.hover),
        [buttonVars.hover.border]: cssVar(newTheme.colors.tertiary.button.border.hover),
        [buttonVars.hover.color]: cssVar(newTheme.colors.tertiary.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.tertiary.icon.hover),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(newTheme.colors.tertiary.button.background.active),
        [buttonVars.active.border]: cssVar(newTheme.colors.tertiary.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.tertiary.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(newTheme.colors.tertiary.button.background.focus),
        [buttonVars.focus.border]: cssVar(newTheme.colors.tertiary.button.border.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.tertiaryColorContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.primaryColor),
        [buttonVars.focus.color]: cssVar(newTheme.colors.tertiary.button.color.focus),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.tertiary.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.tertiary.icon.base),
      },
    }),
    tertiaryInverse: cs({
      [buttonVars.default.background]: cssVar(
        newTheme.colors.tertiaryInverse.button.background.base
      ),
      [buttonVars.default.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.m),
      [buttonVars.default.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.base),
      textDecoration: 'underline',
      '&:hover': {
        [buttonVars.hover.background]: cssVar(
          newTheme.colors.tertiaryInverse.button.background.hover
        ),
        [buttonVars.hover.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.hover),
        [buttonVars.hover.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.tertiaryInverse.icon.hover),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(
          newTheme.colors.tertiaryInverse.button.background.active
        ),
        [buttonVars.active.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(
          newTheme.colors.tertiaryInverse.button.background.focus
        ),
        [buttonVars.focus.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.darkContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.tertiaryColorContrast),
        [buttonVars.focus.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.focus),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.tertiaryInverse.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.tertiaryInverse.icon.base),
      },
    }),
  },
  size: {
    large: cs({
      fontSize: space.s,
      lineHeight: space.m,
      letterSpacing: '0.01rem',
      height: '48px',
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.xl,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: `${spaceNumbers.xl / 2}rem`,
        paddingInlineEnd: space.m,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.m,
        paddingInlineEnd: `${spaceNumbers.xl / 2}rem`,
      },
    }),
    medium: cs({
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.015rem',
      height: space.xl,
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.xl,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: `${spaceNumbers.xl / 2}rem`,
        paddingInlineEnd: space.m,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.m,
        paddingInlineEnd: `${spaceNumbers.xl / 2}rem`,
      },
    }),
    small: cs({
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.015rem',
      height: space.l,
      paddingInline: space.s,
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.l,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.s,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.s,
        paddingInlineEnd: space.xs,
      },
    }),
    extraSmall: cs({
      fontSize: '0.75rem',
      lineHeight: space.s,
      letterSpacing: '0.02rem',
      height: space.m,
      paddingInline: space.s,
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.m,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: space.xxs,
        paddingInlineEnd: space.xs,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.xxs,
      },
    }),
  },
});

export const Button = createComponent('button')({
  displayName: 'Button',
  Component: (
    {
      children,
      colors,
      icon,
      iconPosition,
      shouldMirrorIcon,
      size = 'medium',
      variant = 'primary',
      ...elemProps
    }: ButtonContainerProps,
    ref,
    Element
  ) => {
    return (
      <BaseButton
        as={Element}
        ref={ref}
        type="button"
        cs={[
          ButtonModifiers({
            size: size,
            iconPosition: iconPosition,
            variant: variant,
          }),
        ]}
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {children && <BaseButton.Label>{children}</BaseButton.Label>}

        {icon && iconPosition === 'only' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {icon && iconPosition === 'end' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </BaseButton>
    );
  },
});
