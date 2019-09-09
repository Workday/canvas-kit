import * as React from 'react';
import {getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import isPropValid from '@emotion/is-prop-valid';
import {IconButtonVariant, IconButtonSize} from './types';
import {iconButtonStyles} from './ButtonStyles';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {focusRing} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {CSSObject} from 'create-emotion';

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
      default:
        return {
          '&:focus&:hover, &:focus, &:active': {
            backgroundColor: colors.blueberry400,
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.frenchVanilla100),
          },
          '&:not([disabled]):focus': {
            ...(toggled ? focusRing(2, 2) : {}),
          },
          '&:hover': {
            backgroundColor: colors.blueberry500,
          },
          backgroundColor: colors.blueberry400,
          borderColor: colors.blueberry400,
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.frenchVanilla100),
        };
      case IconButtonVariant.Square:
        return {
          '&:focus:hover, &:focus, &:active': {
            backgroundColor: 'transparent',
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.blueberry400),
          },
          '&:not([disabled]):focus': {
            ...(toggled ? focusRing(2, 0) : {}),
          },
          '&:hover, &:focus:hover': {
            backgroundColor: colors.soap300,
          },
          backgroundColor: colors.frenchVanilla100,
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.blueberry400),
        };
      case IconButtonVariant.Circle:
        return {
          '&:active': {
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
          },
          ...getBackgroundSelector(colors.blueberry400),
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
        };
      case IconButtonVariant.CircleFilled:
        return {
          backgroundColor: colors.blueberry400,
          '&:hover, &:focus&:hover': {
            backgroundColor: colors.blueberry500,
            ...getAccentSelector(colors.blueberry500),
          },
          ...getBackgroundSelector(colors.frenchVanilla100),
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
        };
      case IconButtonVariant.Inverse:
        return {
          '&:hover span .wd-icon-fill, span .wd-icon-fill': {
            fill: colors.frenchVanilla100,
          },
          ...getBackgroundSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.licorice200),
        };
      case IconButtonVariant.InverseFilled:
        return {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          '&:focus': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          ...getBackgroundSelector(colors.frenchVanilla100),
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.licorice200),
          '&:active': {
            ...getAccentSelector(colors.licorice200),
          },
        };
    }
  }
);

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

    return (
      <IconButtonCon
        toggled={toggled}
        innerRef={buttonRef}
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
