import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import isPropValid from '@emotion/is-prop-valid';
import {IconButtonVariant, IconButtonSize} from './iconButtonTypes';
import {
  iconButtonStyles,
  getIconButtonStyle,
  getIconButtonToggledOnStyle,
} from './iconButtonStyles';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ClassNames, CSSObject} from '@emotion/core';

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
   * @default IconButtonSize.Medium
   */
  size?: IconButtonSize;
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

// function getFillSelector(fillColor: string): CSSObject {
//   return {
//     '&:focus span .wd-icon-fill, &:hover span .wd-icon-fill, span .wd-icon-fill': {
//       fill: fillColor,
//     },
//   };
// }

// function getBackgroundSelector(fillColor: string): CSSObject {
//   return {
//     '&:hover span .wd-icon-background, span .wd-icon-background': {
//       fill: fillColor,
//     },
//   };
// }

// function getAccentSelector(fillColor: string): CSSObject {
//   return {
//     '&:focus span .wd-icon-accent, &:hover span .wd-icon-accent, span .wd-icon-accent': {
//       fill: fillColor,
//     },
//   };
// }

export const iconButtonIdentifier = 'wdc-ckr-icon-button';

export const IconButtonCon = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<IconButtonProps>(
  iconButtonStyles.styles,
  ({variant}) => getIconButtonStyle(iconButtonStyles, variant),
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
  ({variant, toggled}) => getIconButtonToggledOnStyle(variant, toggled)
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
      className,
      ...elemProps
    } = this.props;

    return (
      <ClassNames>
        {({cx}) => (
          <IconButtonCon
            toggled={toggled}
            ref={buttonRef}
            variant={variant}
            size={size}
            aria-pressed={toggled}
            className={cx(iconButtonIdentifier, className)}
            {...elemProps}
          >
            {icon ? <SystemIcon icon={icon} /> : children}
          </IconButtonCon>
        )}
      </ClassNames>
    );
  }
}
