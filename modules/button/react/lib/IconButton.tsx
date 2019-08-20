import * as React from 'react';
import {getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {IconButtonVariant, ButtonSize} from './types';
import {BaseButtonProps} from './Button';
import {iconButtonStyles} from './ButtonStyles';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {focusRing} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';

export interface IconButtonProps extends Partial<BaseButtonProps<IconButtonVariant>> {
  /**
   * Whether the icon button is toggled on or off
   */
  toggled: boolean;
  /**
   * The accessibility label to indicate the action triggered by clicking the button
   */
  'aria-label': string;
  /**
   * Size of icon button
   */
  size?: ButtonSize.Small | ButtonSize.Medium;
  /**
   * Callback that fires when a button changes toggled states
   */
  onToggleChange?: (toggled: boolean | undefined) => void;
}

export const IconButtonCon = styled('button')<IconButtonProps>(
  iconButtonStyles.styles,
  ({variant}) => getButtonStyle(iconButtonStyles, variant),
  ({size, variant}) => {
    if (variant === IconButtonVariant.Square || variant === IconButtonVariant.SquareFilled) {
      switch (size) {
        case ButtonSize.Medium:
          return iconButtonStyles.variants!.sizes.medium;
        default:
        case ButtonSize.Small:
          return {};
      }
    } else if (variant === IconButtonVariant.Plain) {
      switch (size) {
        default:
        case ButtonSize.Medium:
          return {
            margin: '-8px',
            ...iconButtonStyles.variants!.sizes.medium,
          };
        case ButtonSize.Small:
          return {
            margin: '-6px',
            ...iconButtonStyles.variants!.sizes.small,
          };
      }
    } else {
      switch (size) {
        default:
        case ButtonSize.Medium:
          return iconButtonStyles.variants!.sizes.medium;
        case ButtonSize.Small:
          return iconButtonStyles.variants!.sizes.small;
      }
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
  public static Size = ButtonSize;

  static defaultProps = {
    variant: IconButtonVariant.Circle,
    toggled: undefined,
  };

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
    const {buttonRef, size, onToggleChange, toggled, ...elemProps} = this.props;
    return (
      // TODO (breaking change): need to remove variant and size prop here, doesn't make sense to expose
      <IconButtonCon
        toggled={toggled}
        innerRef={buttonRef}
        size={size}
        {...elemProps}
        aria-pressed={this.props.toggled}
      >
        {this.props.icon ? <SystemIcon icon={this.props.icon} /> : this.props.children}
      </IconButtonCon>
    );
  }
}
