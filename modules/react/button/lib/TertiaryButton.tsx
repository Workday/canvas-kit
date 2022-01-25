import * as React from 'react';
import {CSSObject} from '@emotion/react';
import {
  focusRing,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {colors, space, borderRadius} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors, TertiaryButtonSizes, IconPositions} from './types';
import {ButtonContainer, ButtonLabelIcon, ButtonLabel} from './parts';

export interface TertiaryButtonProps extends Themeable {
  /**
   * The variant of the TertiaryButton.
   * @default undefined
   */
  variant?: 'inverse' | undefined;
  /**
   * There are three button sizes: `extraSmall`, `small`, and `medium`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: TertiaryButtonSizes;
  /**
   * Button icon positions can either be `left` or `right`.
   * If no value is provided, it defaults to `left`.
   * @default 'left'
   */
  iconPosition?: IconPositions;
  /**
   * The icon of the TertiaryButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The capitalization of the text in the button.
   */
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
  allCaps?: boolean;
  children?: React.ReactNode;
}

const getTertiaryButtonColors = (
  variant: 'inverse' | undefined,
  theme: EmotionCanvasTheme
): ButtonColors => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  if (variant === 'inverse') {
    return {
      default: {
        background: 'transparent',
        icon: colors.frenchVanilla100,
        label: colors.frenchVanilla100,
      },
      hover: {
        background: colors.frenchVanilla100,
        icon: colors.blackPepper400,
        label: colors.blackPepper400,
      },
      active: {
        background: colors.soap200,
        icon: colors.blackPepper400,
        label: colors.blackPepper400,
      },
      focus: {
        background: colors.frenchVanilla100,
        icon: colors.blackPepper400,
        label: colors.blackPepper400,
        focusRing: focusRing(
          {
            separation: 2,
            inset: 'inner',
            innerColor: 'currentColor',
            outerColor: colors.frenchVanilla100,
          },
          theme
        ),
      },
      disabled: {
        background: 'transparent',
        icon: colors.frenchVanilla100,
        label: colors.frenchVanilla100,
      },
    };
  } else {
    return {
      default: {
        icon: themePrimary.main,
        label: themePrimary.main,
      },
      hover: {
        background: colors.soap200,
        icon: themePrimary.dark,
        label: themePrimary.dark,
      },
      active: {
        background: colors.soap300,
        icon: themePrimary.dark,
        label: themePrimary.dark,
      },
      focus: {
        icon: themePrimary.dark,
        label: themePrimary.dark,
        focusRing: focusRing({}, theme),
      },
      disabled: {
        icon: themePrimary.main,
        label: themePrimary.main,
      },
    };
  }
};

const getPaddingStyles = (
  icon: CanvasSystemIcon | undefined,
  iconPosition: 'left' | 'right'
): string => {
  // if there is an icon on the left, add 4px extra padding to the right for visual balance
  if (icon && iconPosition === 'left') {
    return `0 ${space.xs} 0 ${space.xxs}`;
  }
  // if there is an icon on the right, add 4px extra padding to the left for visual balance
  if (icon && iconPosition === 'right') {
    return `0 ${space.xxs} 0 ${space.xs}`;
  }
  // if there is no icon, return the default padding
  return `0 ${space.xxs}`;
};

// All disabled buttons are set to 40% opacity.
// This will eventually live in the ButtonContainer styles, but for now we're scoping it to Primary, Secondary, and Tertiary buttons.
const disabledButtonOpacity = {
  '&:disabled, &:disabled:active': {
    opacity: 0.4,
  },
};

export const TertiaryButton = createComponent('button')({
  displayName: 'TertiaryButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      size = 'medium',
      iconPosition = 'left',
      variant,
      children,
      icon,
      shouldMirrorIcon = false,
      allCaps,
      ...elemProps
    }: TertiaryButtonProps,
    ref,
    Element
  ) => {
    const allContainerStyles: CSSObject = {
      borderRadius: borderRadius.m,
      border: '0',
      padding: getPaddingStyles(icon, iconPosition),
      minWidth: 'auto',
      textTransform: allCaps ? 'uppercase' : undefined,
      '.wdc-text-button-label': {
        textDecoration: 'underline',
      },
      ...disabledButtonOpacity,
    };

    return (
      <ButtonContainer
        ref={ref}
        as={Element}
        colors={getTertiaryButtonColors(variant, theme)}
        size={size}
        extraStyles={allContainerStyles}
        {...elemProps}
      >
        {icon && iconPosition === 'left' && (
          <ButtonLabelIcon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        <ButtonLabel className="wdc-text-button-label">{children}</ButtonLabel>
        {icon && iconPosition === 'right' && (
          <ButtonLabelIcon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </ButtonContainer>
    );
  },
});
