import * as React from 'react';
import {
  focusRing,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors, IconPositions, ButtonSizes} from './types';
import {BaseButton, BaseButtonProps} from './BaseButton';

export interface TertiaryButtonProps extends Themeable, BaseButtonProps {
  /**
   * The variant of the TertiaryButton.
   */
  variant?: 'inverse' | undefined;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   */
  size?: ButtonSizes;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
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
   */
  shouldMirrorIcon?: boolean;
  /**
   * If set to `true`, transform text to all letters uppercase
   */
  allCaps?: boolean;
  children?: React.ReactNode;
  /**
   * If set to `true`, make icon button available to use theme colors instead of default
   */
  isThemeable?: boolean;
}

const getTertiaryButtonColors = (
  variant: 'inverse' | undefined,
  theme: EmotionCanvasTheme,
  hasThemeStyles: boolean
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
        icon: hasThemeStyles ? themePrimary.main : colors.blackPepper400,
        label: themePrimary.main,
      },
      hover: {
        background: colors.soap200,
        icon: hasThemeStyles ? themePrimary.dark : colors.blackPepper500,
        label: themePrimary.dark,
      },
      active: {
        background: colors.soap300,
        icon: hasThemeStyles ? themePrimary.dark : colors.blackPepper500,
        label: themePrimary.dark,
      },
      focus: {
        icon: hasThemeStyles ? themePrimary.main : colors.blackPepper500,
        label: themePrimary.main,
        focusRing: focusRing({innerColor: colors.blueberry400}, theme),
      },
      disabled: {
        background: 'transparent',
        icon: hasThemeStyles ? themePrimary.main : colors.blackPepper400,
        label: themePrimary.main,
      },
    };
  }
};

const StyledButtonLabel = styled(BaseButton.Label)({
  textDecoration: 'underline',
});

const StyledTertiaryButtonContainer = styled(BaseButton)<
  StyledType & Pick<TertiaryButtonProps, 'allCaps'>
>(
  {
    border: '0',
  },
  ({allCaps}) => ({
    textTransform: allCaps ? 'uppercase' : undefined,
  })
);

const getPaddingStyles = (
  icon: CanvasSystemIcon | undefined,
  iconPosition: 'start' | 'end',
  children: React.ReactNode,
  size: ButtonSizes
): string => {
  if (children) {
    // if there is an icon on the left, add 4px extra padding to the right for visual balance
    if (icon && iconPosition === 'start') {
      if (size === 'extraSmall') {
        return `0 ${space.xxs} 0 ${space.xxxs}`;
      }
      return `0 ${space.xs} 0 ${space.xxs}`;
    }
    // if there is an icon on the right, add 4px extra padding to the left for visual balance
    if (icon && iconPosition === 'end') {
      if (size === 'extraSmall') {
        return `0 ${space.xxxs} 0 ${space.xxs}`;
      }
      return `0 ${space.xxs} 0 ${space.xs}`;
    }
    // if there is no icon, return the default padding
    return `0 ${space.xxs}`;
  } else {
    return '0';
  }
};

const getMinWidthStyles = (children: React.ReactNode, size: ButtonSizes): string => {
  let minWidthNum;
  switch (size) {
    case 'large':
      minWidthNum = '48px';
      break;
    case 'medium':
      minWidthNum = space.xl;
      break;
    case 'small':
      minWidthNum = space.l;
      break;
    case 'extraSmall':
      minWidthNum = space.m;
      break;
    default:
      minWidthNum = space.xl;
      break;
  }
  return children ? 'auto' : minWidthNum;
};

/**
 * Tertiary Buttons have the lowest emphasis. Use for less important actions that the user may not
 * often be looking to do. Tertiary Buttons have lower prominence as its container is not visible
 * until it is interacted with. Use Tertiary Buttons for supplemental actions such as “View More”,
 * “Read More” or “Select a File”. Tertiary Buttons are frequently used on Cards.
 *
 * Tertiary Buttons have four sizes: `extraSmall`, `small`, `medium` and `large`. Icons are
 * supported for every size and can be positioned at the `start` or `end` with the `iconPosition`
 * prop.
 */
export const TertiaryButton = createComponent('button')({
  displayName: 'TertiaryButton',
  Component: (
    {
      size = 'medium',
      iconPosition = 'start',
      isThemeable = false,
      variant,
      children,
      icon,
      shouldMirrorIcon = false,
      ...elemProps
    }: TertiaryButtonProps,
    ref,
    Element
  ) => {
    const theme = useTheme();
    const hasThemeStyles = !!children || isThemeable;

    return (
      <StyledTertiaryButtonContainer
        ref={ref}
        as={Element}
        colors={getTertiaryButtonColors(variant, theme, hasThemeStyles)}
        size={size}
        padding={getPaddingStyles(icon, iconPosition, children, size)}
        minWidth={getMinWidthStyles(children, size)}
        borderRadius={children ? borderRadius.m : borderRadius.circle}
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
        {children && <StyledButtonLabel>{children}</StyledButtonLabel>}
        {icon && iconPosition === 'end' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </StyledTertiaryButtonContainer>
    );
  },
});
