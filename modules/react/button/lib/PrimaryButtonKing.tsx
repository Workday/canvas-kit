import * as React from 'react';

import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  focusRing,
} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonSizes, IconPositionsNew} from './types';
import {getMinWidthStyles, getPaddingStyles} from './parts/ButtonContainerNew';
import {Button} from './Button';

const getPrimaryButtonColorsNew = (variant: 'inverse' | undefined, theme: EmotionCanvasTheme) => {
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
        },
        active: {
          background: themePrimary.darkest,
        },
        focus: {
          background: themePrimary.main,
        },
        disabled: {
          background: themePrimary.main,
        },
      };

    case 'inverse':
      return {
        default: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        hover: {
          background: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        active: {
          background: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        focus: {
          background: colors.frenchVanilla100,
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
          focusRing: focusRing(
            {
              separation: 1,
              innerColor: colors.blackPepper500,
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
          labelData: colors.blackPepper400,
        },
      };
  }
};

export interface PrimaryButtonKingProps extends Themeable, GrowthBehavior {
  /**
   * The variant of the PrimaryButton.
   * @default undefined
   */
  variant?: 'inverse';
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * The data label is additional information about the button. The `children` of the Button will
   * appear in bold font while the `dataLabel` will not be emphasized as bold. The `dataLabel` will
   * be part of a button's accessible name appended after `children`. Useful to ancillary data
   * associated with the button, but not the prominent label. If `dataLabel` contents are
   * left-to-right characters, and the `children` are RTL characters, the button may show contents
   * out of order.
   *
   * Note: not displayed at `small` size
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   * @default 'start'
   */
  iconPosition?: IconPositionsNew;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
  children?: React.ReactNode;
}

// Button sizes where data labels are enabled
const dataLabelSizes = ['medium', 'large'];

export const PrimaryButtonKing = createComponent('button')({
  displayName: 'PrimaryButton',
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
    }: PrimaryButtonKingProps,
    ref,
    Element
  ) => {
    const balancingMargin = size === 'large' ? space.xxs : space.xxxs;
    const theme = useTheme();
    return (
      <Button
        ref={ref}
        size={size}
        colors={getPrimaryButtonColorsNew(variant, theme)}
        padding={getPaddingStyles(children, size)}
        minWidth={getMinWidthStyles(children, size)}
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
