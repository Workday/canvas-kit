import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import isPropValid from '@emotion/is-prop-valid';
import {IconButtonVariant, IconButtonSize} from './types';
import {iconButtonStyles} from './ButtonStyles';
import {getButtonStyle} from './utils';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/core';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Type of button.
   */
  variant: IconButtonVariant;
  /**
   * The accessibility label to indicate the action triggered by clicking the button
   */
  'aria-label': string;
  /**
   * Size of icon button.
   */
  size?: IconButtonSize;
  /**
   * Whether the icon button is toggled on or off
   */
  toggled?: boolean;
  /**
   * Ref of button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * Icon for button.
   */
  icon?: CanvasSystemIcon;
  /**
   * Callback that fires when a button changes toggled states
   */
  onToggleChange?: (toggled: boolean | undefined) => void;
}

function getFillSelector(fillColor: string): CSSObject {
  return {
    '&:focus span .wd-icon-fill, &:hover span .wd-icon-fill, span .wd-icon-fill': {
      fill: fillColor,
    },
  };
}

function getBackgroundSelector(fillColor: string): CSSObject {
  return {
    '&:hover span .wd-icon-background, span .wd-icon-background': {
      fill: fillColor,
    },
  };
}

function getAccentSelector(fillColor: string): CSSObject {
  return {
    '&:focus span .wd-icon-accent, &:hover span .wd-icon-accent, span .wd-icon-accent': {
      fill: fillColor,
    },
  };
}

export const IconButtonCon = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<IconButtonProps>(
  iconButtonStyles.styles,
  ({variant}) => getButtonStyle(iconButtonStyles, variant),
  ({size, variant}) => {
    switch (size) {
      default:
      case IconButtonSize.Medium:
        return {
          margin: variant === IconButtonVariant.Plain ? '-8px' : undefined,
          ...iconButtonStyles.variants!.sizes.medium,
        };
      case IconButtonSize.Small:
        return {
          margin: variant === IconButtonVariant.Plain ? '-6px' : undefined,
          ...iconButtonStyles.variants!.sizes.small,
        };
    }
  },
  ({variant, toggled}) => {
    if (!toggled) {
      return {};
    }
    switch (variant) {
      case IconButtonVariant.SquareFilled:
      default: {
        return {
          backgroundColor: colors.blueberry400,
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
          ...getBackgroundSelector(colors.frenchVanilla100),
          '&:focus&:hover, &:focus, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          '&:not([disabled]):focus': {
            backgroundColor: colors.blueberry500,
            ...(toggled ? focusRing(2, 2) : {}),
          },
          '&:hover, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          ...mouseFocusBehavior({
            '&:focus:active': {
              ...getFillSelector(colors.frenchVanilla100),
              ...getAccentSelector(colors.blueberry400),
              ...getBackgroundSelector(colors.frenchVanilla100),
              backgroundColor: `${colors.blueberry500} !important`,
            },
          }),
        };
      }
      case IconButtonVariant.Square:
        return {
          backgroundColor: colors.blueberry400,
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
          ...getBackgroundSelector(colors.frenchVanilla100),
          '&:focus&:hover, &:focus, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          '&:not([disabled]):focus': {
            backgroundColor: colors.blueberry500,
            ...(toggled ? focusRing(2, 2) : {}),
          },
          '&:hover, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          ...mouseFocusBehavior({
            '&:focus:active': {
              ...getFillSelector(colors.frenchVanilla100),
              ...getAccentSelector(colors.blueberry400),
              ...getBackgroundSelector(colors.frenchVanilla100),
              backgroundColor: `${colors.blueberry500} !important`,
            },
          }),
        };

      case IconButtonVariant.Plain:
        return {
          backgroundColor: 'transparent',
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
          '&:focus:hover, &:focus, &:active': {
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
            ...getBackgroundSelector(colors.blueberry400),
          },
          '&:not([disabled]):focus': {
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
            ...getBackgroundSelector(colors.blueberry400),
            ...(toggled ? focusRing(2, 0) : {}),
          },
        };
      case IconButtonVariant.Circle:
        return {
          backgroundColor: colors.blueberry400,
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
          ...getBackgroundSelector(colors.frenchVanilla100),
          '&:focus&:hover, &:focus, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          '&:not([disabled]):focus': {
            backgroundColor: colors.blueberry500,
            ...(toggled ? focusRing(2, 2) : {}),
          },
          '&:hover, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          ...mouseFocusBehavior({
            '&:focus:active': {
              ...getFillSelector(colors.frenchVanilla100),
              ...getAccentSelector(colors.blueberry400),
              ...getBackgroundSelector(colors.frenchVanilla100),
              backgroundColor: `${colors.blueberry500} !important`,
            },
          }),
        };

      case IconButtonVariant.CircleFilled:
        return {
          backgroundColor: colors.blueberry400,
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
          ...getBackgroundSelector(colors.frenchVanilla100),
          '&:focus&:hover, &:focus, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          '&:not([disabled]):focus': {
            backgroundColor: colors.blueberry500,
            ...(toggled ? focusRing(2, 2) : {}),
          },
          '&:hover, &:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: colors.blueberry500,
          },
          ...mouseFocusBehavior({
            '&:focus:active': {
              ...getFillSelector(colors.frenchVanilla100),
              ...getAccentSelector(colors.blueberry400),
              ...getBackgroundSelector(colors.frenchVanilla100),
              backgroundColor: `${colors.blueberry500} !important`,
            },
          }),
        };
      case IconButtonVariant.Inverse:
        return {
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
          backgroundColor: colors.frenchVanilla100,
          '&:focus': {
            backgroundColor: colors.frenchVanilla100,
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
            ...getBackgroundSelector(colors.blueberry400),
          },
          '&:focus&:hover, &:active': {
            backgroundColor: colors.frenchVanilla100,
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
            ...getBackgroundSelector(colors.blueberry400),
          },

          '&:hover': {
            backgroundColor: colors.frenchVanilla100,
          },
          '&:not([disabled]):focus': {
            backgroundColor: colors.frenchVanilla100,
            ...(toggled
              ? focusRing(2, 2, true, false, 'currentColor', colors.frenchVanilla100)
              : {}),
          },
          ...mouseFocusBehavior({
            '&:focus:active': {
              backgroundColor: `${colors.frenchVanilla100} !important`,
            },
          }),
        };
      case IconButtonVariant.InverseFilled:
        return {
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
          backgroundColor: colors.frenchVanilla100,
          '&:focus': {
            backgroundColor: colors.frenchVanilla100,
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
            ...getBackgroundSelector(colors.blueberry400),
          },
          '&:focus&:hover, &:active': {
            backgroundColor: colors.frenchVanilla100,
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
            ...getBackgroundSelector(colors.blueberry400),
          },

          '&:hover': {
            backgroundColor: colors.frenchVanilla100,
          },
          '&:not([disabled]):focus': {
            backgroundColor: colors.frenchVanilla100,
            ...(toggled
              ? focusRing(2, 2, true, false, 'currentColor', colors.frenchVanilla100)
              : {}),
          },
          ...mouseFocusBehavior({
            '&:focus:active': {
              backgroundColor: `${colors.frenchVanilla100} !important`,
            },
          }),
        };
    }
  }
);

export default class IconButton extends React.Component<IconButtonProps> {
  public static Variant = IconButtonVariant;
  public static Size = IconButtonSize;

  static defaultProps = {
    variant: IconButtonVariant.Circle,
    size: IconButtonSize.Medium,
  } as const;

  componentDidUpdate(prevProps: IconButtonProps) {
    if (
      prevProps.toggled !== this.props.toggled &&
      typeof this.props.onToggleChange === 'function'
    ) {
      this.props.onToggleChange(this.props.toggled);
    }
  }

  public render() {
    // onToggleChange will generate a warning if spread over a <button>
    const {
      buttonRef,
      size,
      variant,
      onToggleChange,
      icon,
      toggled,
      children,
      ...elemProps
    } = this.props;
    console.warn('toggled', toggled);
    return (
      <IconButtonCon
        toggled={toggled}
        ref={buttonRef}
        variant={variant}
        size={size}
        aria-pressed={toggled}
        {...elemProps}
      >
        {icon ? <SystemIcon icon={icon} /> : children}
      </IconButtonCon>
    );
  }
}
