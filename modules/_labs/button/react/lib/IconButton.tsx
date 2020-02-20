import * as React from 'react';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {IconButtonVariant, ButtonSize, ButtonColors} from './types';
import {ButtonContainer} from './parts';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the IconButton.
   * @default IconButtonVariant.Circle
   */
  variant: IconButtonVariant;
  /**
   * The accessibility label to indicate the action triggered by clicking the IconButton.
   */
  'aria-label': string;
  /**
   * The size of the IconButton.
   * @default ButtonSize.Medium
   */
  size: ButtonSize.Small | ButtonSize.Medium;
  /**
   * If true, toggle the IconButton on.
   * @default false
   */
  toggled?: boolean;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The icon of the IconButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The function called when the IconButton toggled state changes.
   */
  onToggleChange?: (toggled: boolean | undefined) => void;
}

const IconButton = (props: IconButtonProps) => {
  const {buttonRef, size, variant, onToggleChange, icon, toggled, children, ...elemProps} = props;

  React.useEffect(() => {
    if (typeof props.onToggleChange === 'function') {
      props.onToggleChange(toggled);
    }
  }, [props.toggled]);

  const containerStyles = {
    padding: 0,
    margin: variant === IconButtonVariant.Plain ? '-8px' : undefined,
    minWidth: size === ButtonSize.Small ? spacing.l : spacing.xl, // min-width is set so buttons don't collapse in IE11
    width: size === ButtonSize.Small ? spacing.l : spacing.xl,
    height: size === ButtonSize.Small ? spacing.l : spacing.xl,
    borderRadius:
      variant === IconButtonVariant.Square || variant === IconButtonVariant.SquareFilled
        ? borderRadius.m
        : borderRadius.circle,
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: size === ButtonSize.Small ? '20px' : undefined,
      height: size === ButtonSize.Small ? '20px' : undefined,
    },
  };

  return (
    <ButtonContainer
      // eslint-disable-next-line no-use-before-define
      colors={getIconButtonColors(variant, toggled)}
      size={size}
      buttonRef={buttonRef}
      fillIcon={toggled}
      extraStyles={containerStyles}
      aria-pressed={toggled}
      {...elemProps}
    >
      {icon ? <SystemIcon icon={icon} /> : children}
    </ButtonContainer>
  );
};

IconButton.Variant = IconButtonVariant;
IconButton.Size = {
  Small: ButtonSize.Small,
  Medium: ButtonSize.Medium,
};

IconButton.defaultProps = {
  variant: IconButtonVariant.Circle,
  size: ButtonSize.Medium,
};

export default IconButton;

const getIconButtonColors = (variant: IconButtonVariant, toggled?: boolean): ButtonColors => {
  switch (variant) {
    case IconButton.Variant.Square:
    case IconButtonVariant.Circle:
    default:
      return {
        default: {
          background: toggled ? colors.blueberry400 : undefined,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice200,
        },
        hover: {
          background: toggled ? colors.blueberry500 : colors.soap300,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
        },
        active: {
          background: toggled ? colors.blueberry500 : colors.soap500,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
        },
        focus: {
          background: toggled ? colors.blueberry500 : colors.soap300,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
        },
        disabled: {
          background: toggled ? colors.blueberry100 : 'transparent',
          icon: toggled ? colors.blueberry300 : colors.soap600,
        },
      };
    case IconButtonVariant.SquareFilled:
    case IconButtonVariant.CircleFilled:
      return {
        default: {
          background: toggled ? colors.blueberry400 : colors.soap200,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice200,
        },
        hover: {
          background: toggled ? colors.blueberry500 : colors.soap400,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
        },
        active: {
          background: toggled ? colors.blueberry500 : colors.soap500,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
        },
        focus: {
          background: toggled ? colors.blueberry500 : colors.soap400,
          icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
        },
        disabled: {
          background: toggled ? colors.blueberry100 : colors.soap100,
          icon: toggled ? colors.blueberry300 : colors.soap600,
        },
      };
    case IconButtonVariant.Plain:
      return {
        default: {
          icon: toggled ? colors.blueberry400 : colors.licorice200,
        },
        hover: {
          icon: toggled ? colors.blueberry400 : colors.licorice500,
        },
        active: {
          icon: toggled ? colors.blueberry400 : colors.licorice500,
        },
        focus: {
          icon: toggled ? colors.blueberry400 : colors.licorice500,
          focusRing: focusRing(2, 0),
        },
        disabled: {
          icon: toggled ? colors.blueberry200 : colors.soap600,
        },
      };
    case IconButtonVariant.Inverse:
      return {
        default: {
          background: toggled ? colors.frenchVanilla100 : undefined,
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
        },
        hover: {
          background: toggled ? colors.frenchVanilla100 : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
        },
        active: {
          background: toggled ? colors.frenchVanilla100 : 'rgba(0, 0, 0, 0.3)',
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
        },
        focus: {
          background: toggled ? colors.frenchVanilla100 : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
          focusRing: focusRing(2, 2, true, false, 'currentColor', colors.frenchVanilla100),
        },
        disabled: {
          background: toggled ? 'rgba(255,255,255,0.75)' : 'transparent',
          icon: toggled ? colors.blueberry400 : 'rgba(255, 255, 255, 0.75)',
        },
      };
    case IconButtonVariant.InverseFilled:
      return {
        default: {
          background: toggled ? colors.frenchVanilla100 : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
        },
        hover: {
          background: toggled ? colors.frenchVanilla100 : 'rgba(0, 0, 0, 0.3)',
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
        },
        active: {
          background: toggled ? colors.frenchVanilla100 : 'rgba(0, 0, 0, 0.4)',
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
        },
        focus: {
          background: toggled ? colors.frenchVanilla100 : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? colors.blueberry400 : colors.frenchVanilla100,
          focusRing: focusRing(2, 2, true, false, 'currentColor', colors.frenchVanilla100),
        },
        disabled: {
          background: toggled ? 'rgba(255,255,255,0.75)' : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? colors.blueberry400 : 'rgba(255, 255, 255, 0.75)',
        },
      };
  }
};
