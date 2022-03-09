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
import {BaseButton} from './Button';

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
  size?: ButtonSizes;
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
  theme: EmotionCanvasTheme,
  children: React.ReactNode
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
        icon: children ? themePrimary.dark : colors.blackPepper400,
        label: themePrimary.dark,
      },
      hover: {
        background: colors.soap200,
        icon: children ? themePrimary.dark : colors.blackPepper500,
        label: themePrimary.dark,
      },
      active: {
        background: colors.soap300,
        icon: children ? themePrimary.dark : colors.blackPepper500,
        label: themePrimary.dark,
      },
      focus: {
        icon: children ? themePrimary.dark : colors.blackPepper500,
        label: themePrimary.dark,
        focusRing: focusRing({}, theme),
      },
      disabled: {
        icon: children ? themePrimary.dark : colors.blackPepper400,
        label: themePrimary.dark,
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
  children: React.ReactNode
): string => {
  if (children) {
    // if there is an icon on the left, add 4px extra padding to the right for visual balance
    if (icon && iconPosition === 'start') {
      return `0 ${space.xs} 0 ${space.xxs}`;
    }
    // if there is an icon on the right, add 4px extra padding to the left for visual balance
    if (icon && iconPosition === 'end') {
      return `0 ${space.xxs} 0 ${space.xs}`;
    }
    // if there is no icon, return the default padding
    return `0 ${space.xxs}`;
  } else {
    return '0';
  }
};

const getMinWidthStyles = (children: React.ReactNode, size: ButtonSizes): string => {
  switch (size) {
    case 'large':
      return children ? 'auto' : '48px';
    case 'medium':
      return children ? 'auto' : space.xl;
    case 'small':
      return children ? 'auto' : space.l;
    case 'extraSmall':
      return children ? 'auto' : space.m;
    default:
      return children ? 'auto' : space.xl;
  }
};

export const TertiaryButton = createComponent('button')({
  displayName: 'TertiaryButton',
  Component: (
    {
      size = 'medium',
      iconPosition = 'start',
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
    const balancingMargin = size === 'medium' ? space.xxxs : space.xxxs;
    const theme = useTheme();

    return (
      <StyledTertiaryButtonContainer
        ref={ref}
        as={Element}
        allCaps={allCaps}
        colors={getTertiaryButtonColors(variant, theme, children)}
        size={size}
        padding={getPaddingStyles(icon, iconPosition, children)}
        minWidth={getMinWidthStyles(children, size)}
        style={{borderRadius: children ? borderRadius.m : borderRadius.circle}}
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            marginInlineStart={children ? `-${balancingMargin} !important` : undefined}
          />
        )}
        {children && <StyledButtonLabel>{children}</StyledButtonLabel>}
        {icon && iconPosition === 'end' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            marginInlineEnd={children ? `-${balancingMargin} !important` : undefined}
          />
        )}
      </StyledTertiaryButtonContainer>
    );
  },
});
