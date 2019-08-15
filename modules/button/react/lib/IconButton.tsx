import * as React from 'react';
import {getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {IconButtonTypes, ButtonSizes} from './types';
import {BaseButtonProps} from './Button';
import {iconButtonStyles} from './ButtonStyles';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {focusRing} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';

export interface IconButtonProps extends Partial<BaseButtonProps<IconButtonTypes>> {
  /**
   * Whether the icon button is toggled on or off
   */
  toggled: boolean;
  /**
   * Size of icon button
   */
  buttonSize?: ButtonSizes.Small | ButtonSizes.Medium;
  /**
   * Callback that fires when a button changes toggled states
   */
  onToggleChange?: (toggled: boolean | undefined) => void;
}

export const IconButtonCon = styled('button')<IconButtonProps>(
  iconButtonStyles.styles,
  ({buttonType}) => getButtonStyle(iconButtonStyles, buttonType),
  ({buttonSize, buttonType}) => {
    if (buttonType === IconButtonTypes.Square || buttonType === IconButtonTypes.SquareFilled) {
      switch (buttonSize) {
        case ButtonSizes.Medium:
          return iconButtonStyles.variants!.sizes.medium;
        default:
        case ButtonSizes.Small:
          return {};
      }
    } else if (buttonType === IconButtonTypes.Plain) {
      switch (buttonSize) {
        default:
        case ButtonSizes.Medium:
          return {
            margin: '-8px',
            ...iconButtonStyles.variants!.sizes.medium,
          };
        case ButtonSizes.Small:
          return {
            margin: '-6px',
            ...iconButtonStyles.variants!.sizes.small,
          };
      }
    } else {
      switch (buttonSize) {
        default:
        case ButtonSizes.Medium:
          return iconButtonStyles.variants!.sizes.medium;
        case ButtonSizes.Small:
          return iconButtonStyles.variants!.sizes.small;
      }
    }
  },
  ({buttonType, toggled}) => {
    if (!toggled) {
      return {};
    }

    switch (buttonType) {
      case IconButtonTypes.SquareFilled:
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
      case IconButtonTypes.Square:
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
      case IconButtonTypes.Circle:
        return {
          '&:active': {
            ...getFillSelector(colors.blueberry400),
            ...getAccentSelector(colors.frenchVanilla100),
          },
          ...getBackgroundSelector(colors.blueberry400),
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
        };
      case IconButtonTypes.CircleFilled:
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
      case IconButtonTypes.Inverse:
        return {
          '&:hover span .wd-icon-fill, span .wd-icon-fill': {
            fill: colors.frenchVanilla100,
          },
          ...getBackgroundSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.licorice200),
        };
      case IconButtonTypes.InverseFilled:
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
  public static Types = IconButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps = {
    buttonType: IconButtonTypes.Circle,
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
    const {buttonRef, buttonSize, onToggleChange, toggled, ...elemProps} = this.props;
    return (
      // TODO (breaking change): need to remove buttonType and buttonSize prop here, doesn't make sense to expose
      <IconButtonCon
        toggled={toggled}
        innerRef={buttonRef}
        buttonSize={buttonSize}
        {...elemProps}
        aria-pressed={this.props.toggled}
      >
        {this.props.icon ? <SystemIcon icon={this.props.icon} /> : this.props.children}
      </IconButtonCon>
    );
  }
}
