/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel, ButtonLabelData, ButtonLabelIcon} from './ButtonBase';
import {DeprecatedButtonVariant, ButtonSize, ButtonVariant} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {labelDataBaseStyles} from './ButtonStyles';

export interface BaseButtonProps<T = ButtonVariant | DeprecatedButtonVariant>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the Button.
   * @default ButtonVariant.Secondary
   */
  variant?: T;
  /**
   * The size of the Button.
   * @default ButtonSize.Medium
   */
  size?: ButtonSize;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The data label of the Button.
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   */
  icon?: CanvasSystemIcon;
}

export interface ButtonProps<T = ButtonVariant | DeprecatedButtonVariant>
  extends BaseButtonProps<T>,
    GrowthBehavior {
  /**
   * The children of the Button (cannot be empty).
   */
  children: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  public static Variant = ButtonVariant;
  public static Size = ButtonSize;

  static defaultProps = {
    size: ButtonSize.Medium,
    variant: ButtonVariant.Secondary,
    grow: false,
  };

  public render() {
    const {variant, size, buttonRef, dataLabel, icon, children, ...elemProps} = this.props;

    // Restrict Hightlight button to only being sized Large, Medium with an Icon
    if (variant === ButtonVariant.Highlight && (icon === undefined || size === ButtonSize.Small)) {
      return null;
    }

    return (
      <ButtonBaseCon variant={variant} size={size} ref={buttonRef} {...elemProps}>
        {icon && <ButtonLabelIcon size={size} icon={icon} />}
        <ButtonBaseLabel size={size} variant={variant}>
          {children}
        </ButtonBaseLabel>
        {dataLabel && (
          <ButtonLabelData size={size} className={labelDataBaseStyles.classname}>
            {dataLabel}
          </ButtonLabelData>
        )}
      </ButtonBaseCon>
    );
  }
}
/**
 * @deprecated deprecated_Button in @workday/canvas-kit-react-button will be removed soon. Use Button instead.
 */
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class deprecated_Button extends React.Component<ButtonProps<DeprecatedButtonVariant>> {
  public static Variant = DeprecatedButtonVariant;
  public static Size = ButtonSize;

  static defaultProps = {
    size: ButtonSize.Large,
    variant: DeprecatedButtonVariant.Secondary,
    grow: false,
  };

  public componentDidMount() {
    console.warn('This component is now deprecated, consider using the new Button component');
  }

  public render() {
    const {variant, size, buttonRef, dataLabel, icon, children, ...elemProps} = this.props;

    return <Button {...this.props} {...elemProps} />;
  }
}
