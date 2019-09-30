import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel, ButtonLabelData, ButtonLabelIcon} from './ButtonBase';
import {ButtonVariant, ButtonSize, BetaButtonVariant} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {labelDataBaseStyles} from './ButtonStyles';

// TODO (beta button): add README for new buttons when merging

export interface BaseButtonProps<T = ButtonVariant | BetaButtonVariant>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Type of button.
   */
  variant?: T;
  /**
   * Size of button.
   */
  size?: ButtonSize;
  /**
   * Ref of button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * Data label of button.
   */
  dataLabel?: String;
  /**
   * Icon for button.
   */
  icon?: CanvasSystemIcon;
}

export interface ButtonProps<T = ButtonVariant | BetaButtonVariant>
  extends BaseButtonProps<T>,
    GrowthBehavior {
  /**
   * Button cannot be empty.
   */
  children: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  public static Variant = ButtonVariant;
  public static Size = ButtonSize;

  static defaultProps = {
    size: ButtonSize.Large,
    variant: ButtonVariant.Secondary,
    grow: false,
  };

  public render() {
    const {variant, size, buttonRef, dataLabel, icon, children, ...elemProps} = this.props;

    return (
      <ButtonBaseCon variant={variant} size={size} innerRef={buttonRef} {...elemProps}>
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

// tslint:disable:class-name
export class beta_Button extends React.Component<ButtonProps<BetaButtonVariant>> {
  public static Variant = BetaButtonVariant;
  public static Size = ButtonSize;

  static defaultProps = {
    size: ButtonSize.Medium,
    variant: BetaButtonVariant.Secondary,
    grow: false,
  };

  render() {
    const {variant, size, icon} = this.props;

    // TODO (beta button): Move this logic back into Button compponent
    // Restrict Hightlight button to only being sized Large, Medium with an Icon
    if (
      variant === BetaButtonVariant.Highlight &&
      (icon === undefined || size === ButtonSize.Small)
    ) {
      return null;
    }

    return <Button {...this.props} />;
  }
}
