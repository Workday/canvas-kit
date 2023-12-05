import * as React from 'react';

import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  focusRing,
} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonSizes, IconPositions} from './types';
import {BaseButton, BaseButtonProps, getMinWidthStyles, getPaddingStyles} from './BaseButton';

const getPrimaryButtonColors = (variant: 'inverse' | undefined, theme: EmotionCanvasTheme) => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  switch (variant) {
    case undefined:
    default:
      return {
        default: {
          background: themePrimary.main,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
        },
        hover: {
          background: themePrimary.dark,
          label: themePrimary.contrast,
        },
        active: {
          background: themePrimary.darkest,
          label: themePrimary.contrast,
        },
        focus: {
          background: themePrimary.main,
          label: themePrimary.contrast,
        },
        disabled: {
          background: themePrimary.main,
          label: themePrimary.contrast,
        },
      };

    case 'inverse':
      return {
        default: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
        },
        hover: {
          background: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
        },
        active: {
          background: colors.soap400,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
        },
        focus: {
          background: colors.frenchVanilla100,
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,

          focusRing: focusRing(
            {
              separation: 1,
              innerColor: colors.blackPepper400,
              outerColor: colors.frenchVanilla100,
            },
            theme
          ),
        },
        // Identical to inverse 'default' styles. ButtonContainer will set opacity to 40%
        disabled: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
        },
      };
  }
};

export interface PrimaryButtonProps extends Themeable, GrowthBehavior, BaseButtonProps {
  /**
   * The variant of the PrimaryButton.
   */
  variant?: 'inverse';
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   */
  size?: ButtonSizes;
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
  children?: React.ReactNode;
}

/**
 * Primary Buttons are high emphasis. Use once per screen to draw attention to the highest priority
 * action. Multiple primary buttons make it confusing for the user to understand what action they
 * should take. Not all screens require a Primary Button.
 *
 * Primary Buttons have four sizes: `extraSmall`, `small`, `medium`, and `large`. Icons are
 * supported for every size and can be positioned at the `start` or `end` with the `iconPosition`
 * prop.
 */
export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {
      size = 'medium',
      iconPosition = 'start',
      variant,
      icon,
      shouldMirrorIcon = false,
      children,
      ...elemProps
    }: PrimaryButtonProps,
    ref,
    Element
  ) => {
    const theme = useTheme();
    return (
      <BaseButton
        ref={ref}
        size={size}
        colors={getPrimaryButtonColors(variant, theme)}
        padding={getPaddingStyles(children, size, icon, iconPosition)}
        minWidth={getMinWidthStyles(children, size)}
        as={Element}
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
