import * as React from 'react';

import {BaseButton, buttonVars} from './BaseButton';
import {
  createComponent,
  GrowthBehavior,
  cs,
  createVars,
  createModifiers,
  newTheme,
  cssVar,
} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {space, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes, IconPositions} from './types';

import {CanvasSystemIcon} from '@workday/design-assets-types';

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
      [buttonVars.default.background]: cssVar(newTheme.colors.primary.button.background.base),
      [buttonVars.default.border]: cssVar(newTheme.colors.primary.button.border.base),
      [buttonVars.default.color]: cssVar(newTheme.colors.primary.button.color.base),
      '&:hover': {
        [buttonVars.hover.background]: cssVar(newTheme.colors.primary.button.background.hover),
        [buttonVars.hover.border]: cssVar(newTheme.colors.primary.button.border.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.primary.icon.base),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(newTheme.colors.primary.button.background.active),
        [buttonVars.active.border]: cssVar(newTheme.colors.primary.button.border.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(newTheme.colors.primary.button.background.focus),
        [buttonVars.focus.border]: cssVar(newTheme.colors.primary.button.border.focus),
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
        [buttonVars.focus.color]: cssVar(newTheme.colors.primaryInverse.button.color.focus),
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.primaryInverse.icon.base),
      },
    }),
    secondary: cs({
      [buttonVars.default.background]: cssVar(newTheme.colors.secondary.button.background.base),
      [buttonVars.default.color]: cssVar(newTheme.colors.secondary.button.color.base),
      [buttonVars.default.border]: cssVar(newTheme.colors.secondary.button.border.base),
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
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.secondary.icon.base),
      },
    }),
    secondaryInverse: cs({
      [buttonVars.default.background]: cssVar(
        newTheme.colors.secondaryInverse.button.background.base
      ),
      [buttonVars.default.color]: cssVar(newTheme.colors.secondaryInverse.button.color.base),
      [buttonVars.default.border]: cssVar(newTheme.colors.secondaryInverse.button.border.base),
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
        [buttonVars.focus.color]: cssVar(newTheme.colors.secondaryInverse.button.color.focus),
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.secondaryInverse.icon.base),
      },
    }),
    tertiary: cs({
      backgroundColor: cssVar(newTheme.colors.alert.dark),
    }),
    tertiaryInverse: cs({
      backgroundColor: cssVar(newTheme.colors.alert.dark),
    }),
  },
  size: {
    large: cs({
      ...type.levels.body.small,
      fontWeight: cssVar(newTheme.fontWeights.bold),
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
      ...type.levels.subtext.large,
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
      ...type.levels.subtext.large,
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
      ...type.levels.subtext.medium,
      fontWeight: cssVar(newTheme.fontWeights.bold),
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
