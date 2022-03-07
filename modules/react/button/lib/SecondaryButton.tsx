import * as React from 'react';

import {colors, space} from '@workday/canvas-kit-react/tokens';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  focusRing,
} from '@workday/canvas-kit-react/common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors, ButtonSizes, IconPositions} from './types';
import {Button, getMinWidthStyles, getPaddingStyles} from './Button';

export interface SecondaryButtonProps extends Themeable, GrowthBehavior {
  /**
   * The variant of the SecondaryButton.
   * @default undefined
   */
  variant?: 'inverse' | undefined;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * The data label of the Button.
   * Note: not displayed at `small` size
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `left` or `right`.
   * If no value is provided, it defaults to `left`.
   * @default 'left'
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
  children?: React.ReactNode;
}

// Button sizes where data labels are enabled
const dataLabelSizes = ['medium', 'large'];

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: (
    {
      size = 'medium',
      iconPosition = 'start',
      variant,
      dataLabel,
      icon,
      shouldMirrorIcon = false,
      children,
      ...elemProps
    }: SecondaryButtonProps,
    ref,
    Element
  ) => {
    const balancingMargin = size === 'large' ? space.xxs : space.xxxs;
    const theme = useTheme();

    return (
      <Button
        ref={ref}
        size={size}
        colors={getSecondaryButtonColors(variant, theme)}
        padding={getPaddingStyles(children, size)}
        minWidth={getMinWidthStyles(children, size)}
        as={Element}
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <Button.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            marginInlineStart={children ? `-${balancingMargin} !important` : undefined}
          />
        )}
        {children && <Button.Label>{children}</Button.Label>}
        {dataLabel && dataLabelSizes.includes(size) && (
          <Button.LabelData>{dataLabel}</Button.LabelData>
        )}
        {icon && iconPosition === 'end' && (
          <Button.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            marginInlineEnd={children ? `-${balancingMargin} !important` : undefined}
          />
        )}
      </Button>
    );
  },
});

export const getSecondaryButtonColors = (
  variant: 'inverse' | undefined,
  theme: EmotionCanvasTheme
): ButtonColors => {
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
          background: 'transparent',
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        hover: {
          background: colors.blackPepper400,
          border: colors.blackPepper400,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
          labelData: themePrimary.contrast,
        },
        active: {
          background: colors.blackPepper500,
          border: colors.blackPepper500,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
          labelData: themePrimary.contrast,
        },
        focus: {
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        // Identical to 'default' styles. ButtonContainer will set opacity to 40%
        disabled: {
          background: 'transparent',
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
      };
    case 'inverse':
      return {
        default: {
          background: 'transparent',
          border: colors.frenchVanilla100,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        hover: {
          background: colors.soap300,
          border: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        active: {
          background: colors.soap400,
          border: colors.soap400,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        focus: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
          focusRing: focusRing(
            {
              separation: 2,
              innerColor: 'currentColor',
              outerColor: colors.frenchVanilla100,
            },
            theme
          ),
        },
        // Identical to inverse 'default' styles. ButtonContainer will set opacity to 40%
        disabled: {
          background: 'transparent',
          border: colors.frenchVanilla100,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
      };
  }
};
