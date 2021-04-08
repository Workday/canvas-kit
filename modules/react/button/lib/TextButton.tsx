import * as React from 'react';
import {type} from '@workday/canvas-kit-labs-react/core';
import {
  focusRing,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {colors, space, borderRadius} from '@workday/canvas-kit-react/core';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors} from './types';
import {ButtonContainer, ButtonLabelIcon, ButtonLabel} from './parts';

export interface TextButtonProps extends Themeable {
  /**
   * The variant of the TextButton.
   * @default 'text'
   */
  variant?: 'text' | 'inverse';
  /**
   * The size of the TextButton.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The position of the TextButton icon.
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
  /**
   * The icon of the TextButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The capitalization of the text in the button.
   */
  allCaps?: boolean;
  children?: React.ReactNode;
}

const getTextButtonColors = (
  variant: 'text' | 'inverse',
  theme: EmotionCanvasTheme
): ButtonColors => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  switch (variant) {
    case 'text':
    default:
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
          background: 'transparent',
          icon: themePrimary.light,
          label: themePrimary.light,
        },
      };
    case 'inverse':
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
          icon: 'rgba(255, 255, 255, 0.5)',
          label: 'rgba(255, 255, 255, 0.5)',
        },
      };
  }
};

const containerStyles = {
  borderRadius: borderRadius.m,
  border: '0',
  padding: `0 ${space.xxs}`,
  minWidth: 'auto',
  '.wdc-text-button-label': {
    borderBottom: '2px solid transparent',
    paddingTop: '2px',
    transition: 'border-color 0.3s',
  },
  '&:hover:not([disabled]) .wdc-text-button-label': {
    borderBottomColor: 'currentColor',
  },
};

export const TextButton = createComponent('button')({
  displayName: 'TextButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      variant = 'text',
      size = 'medium',
      iconPosition = 'left',
      children,
      icon,
      allCaps,
      ...elemProps
    }: TextButtonProps,
    ref,
    Element
  ) => {
    // Note: We don't use ButtonLabel because the label styles differ from other button types
    const allContainerStyles = allCaps
      ? {
          ...containerStyles,
          ...type.variant.caps,
          ...type.variant.button,
          fontSize: size === 'medium' ? type.body.fontSize : undefined,
          letterSpacing: '.5px',
        }
      : {
          ...containerStyles,
          fontSize: size === 'medium' ? type.body.fontSize : undefined,
        };

    return (
      <ButtonContainer
        ref={ref}
        as={Element}
        colors={getTextButtonColors(variant, theme)}
        size={size}
        extraStyles={allContainerStyles}
        {...elemProps}
      >
        {icon && iconPosition === 'left' && (
          <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
        )}
        <ButtonLabel className="wdc-text-button-label">{children}</ButtonLabel>
        {icon && iconPosition === 'right' && (
          <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
        )}
      </ButtonContainer>
    );
  },
});
