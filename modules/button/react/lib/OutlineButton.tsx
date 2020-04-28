import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {
  focusRing,
  GrowthBehavior,
  useTheme,
  Themeable,
  CanvasTheme,
} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {OutlineButtonVariant, ButtonColors, ButtonSize, ButtonOrAnchorComponent} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Themeable,
    GrowthBehavior {
  /**
   * The variant of the Button.
   * @default OutlineButtonVariant.Secondary
   */
  variant?: OutlineButtonVariant;
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
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
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `a` tag instead of a `button` when defined.
   */
  as?: 'a';
}

const OutlineButton: ButtonOrAnchorComponent<OutlineButtonProps, typeof OutlineButtonVariant> = ({
  theme = useTheme(),
  variant = OutlineButtonVariant.Secondary,
  size = 'medium',
  buttonRef,
  dataLabel,
  icon,
  children,
  ...elemProps
}: OutlineButtonProps) => (
  <ButtonContainer
    colors={getOutlineButtonColors(variant, theme)}
    size={size}
    ref={buttonRef}
    {...elemProps}
  >
    {icon && size !== 'small' && <ButtonLabelIcon size={size} icon={icon} />}
    <ButtonLabel>{children}</ButtonLabel>
    {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
  </ButtonContainer>
);

OutlineButton.Variant = OutlineButtonVariant;
OutlineButton.Size = ButtonSize;

export default OutlineButton;

export const getOutlineButtonColors = (
  variant: OutlineButtonVariant,
  theme: CanvasTheme
): ButtonColors => {
  switch (variant) {
    case OutlineButtonVariant.Primary:
      return {
        default: {
          border: theme.palette.primary.main,
          icon: theme.palette.primary.main,
          label: theme.palette.primary.main,
        },
        hover: {
          background: theme.palette.primary.main,
          icon: theme.palette.primary.contrast,
          label: theme.palette.primary.contrast,
        },
        active: {
          background: theme.palette.primary.dark,
          border: theme.palette.primary.dark,
          icon: theme.palette.primary.contrast,
          label: theme.palette.primary.contrast,
        },
        focus: {
          background: theme.palette.primary.main,
          icon: theme.palette.primary.contrast,
          label: theme.palette.primary.contrast,
        },
        disabled: {
          background: theme.palette.primary.contrast,
          border: colors.soap500,
          icon: colors.soap600,
          label: colors.licorice100,
        },
      };
    case OutlineButtonVariant.Secondary:
    default:
      return {
        default: {
          border: colors.soap500,
          icon: colors.licorice200,
          label: colors.blackPepper400,
        },
        hover: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: theme.palette.primary.contrast,
          label: theme.palette.primary.contrast,
        },
        active: {
          background: colors.licorice600,
          border: colors.licorice600,
          icon: theme.palette.primary.contrast,
          label: theme.palette.primary.contrast,
        },
        focus: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: theme.palette.primary.contrast,
          label: theme.palette.primary.contrast,
        },
        disabled: {
          background: theme.palette.primary.contrast,
          border: colors.soap500,
          icon: colors.soap600,
          label: colors.licorice100,
        },
      };
    case OutlineButtonVariant.Inverse:
      return {
        default: {
          border: theme.palette.primary.contrast,
          icon: theme.palette.primary.contrast,
          label: theme.palette.primary.contrast,
        },
        hover: {
          background: theme.palette.primary.contrast,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
        },
        active: {
          background: colors.soap300,
          border: colors.soap300,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
        },
        focus: {
          background: theme.palette.primary.contrast,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
          focusRing: focusRing(
            {
              separation: 2,
              innerColor: 'currentColor',
              outerColor: theme.palette.primary.contrast,
            },
            theme
          ),
        },
        disabled: {
          background: 'transparent',
          border: 'rgba(255, 255, 255, 0.75)',
          icon: 'rgba(255, 255, 255, 0.75)',
          label: 'rgba(255, 255, 255, 0.75)',
          labelData: 'rgba(255, 255, 255, 0.75)',
        },
      };
  }
};
