import * as React from 'react';
import {ButtonBaseCon, ButtonBaseLabel, ButtonLabelData, ButtonLabelIcon} from './ButtonBase';
import {ButtonType, ButtonSize, BetaButtonType} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {labelDataBaseStyles} from './ButtonStyles';

// TODO (beta button): add README for new buttons when merging

export interface BaseButtonProps<T = ButtonType | BetaButtonType>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Type of button.
   */
  buttonType?: T;
  /**
   * Size of button.
   */
  buttonSize?: ButtonSize;
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

export interface ButtonProps<T = ButtonType | BetaButtonType>
  extends BaseButtonProps<T>,
    GrowthBehavior {
  /**
   * Button cannot be empty.
   */
  children: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  public static Type = ButtonType;
  public static Size = ButtonSize;

  static defaultProps = {
    buttonSize: ButtonSize.Large,
    buttonType: ButtonType.Secondary,
    grow: false,
  };

  public render() {
    const {buttonRef, ...elemProps} = this.props;

    return (
      <ButtonBaseCon {...elemProps} innerRef={buttonRef}>
        {elemProps.icon && <ButtonLabelIcon {...elemProps} />}
        <ButtonBaseLabel buttonSize={elemProps.buttonSize} buttonType={elemProps.buttonType}>
          {elemProps.children}
        </ButtonBaseLabel>
        {elemProps.dataLabel && (
          <ButtonLabelData className={labelDataBaseStyles.classname} {...elemProps}>
            {elemProps.dataLabel}
          </ButtonLabelData>
        )}
      </ButtonBaseCon>
    );
  }
}

// tslint:disable:class-name
export class beta_Button extends React.Component<ButtonProps<BetaButtonType>> {
  public static Type = BetaButtonType;
  public static Size = ButtonSize;

  static defaultProps = {
    buttonSize: ButtonSize.Medium,
    buttonType: BetaButtonType.Secondary,
    grow: false,
  };

  render() {
    // TODO (beta button): Move this logic back into Button compponent
    // Restrict Hightlight button to only being sized Large, Medium with an Icon
    if (
      this.props.buttonType === BetaButtonType.Highlight &&
      (this.props.icon === undefined || this.props.buttonSize === ButtonSize.Small)
    ) {
      return null;
    }

    return <Button {...this.props} />;
  }
}
