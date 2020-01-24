import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {spacing, type} from '@workday/canvas-kit-react-core';

export interface HintProps extends Themeable, React.HTMLAttributes<HTMLParagraphElement> {
  error?: ErrorType;
  /**
   * The Label for the error messages. This props is only added for translation, otherwise it shouldn't change
   * @default Error
   */
  errorLabel?: string;
  /**
   * The Label for the error messages. This props is only added for translation, otherwise it shouldn't change
   * @default Alert
   */
  alertLabel?: string;
}

const Label = styled('span')(type.body2, type.variant.label);

const Message = styled('p')(type.body2, {width: '100%', margin: `${spacing.xxs} 0 0`});

export default class Hint extends React.Component<HintProps> {
  static ErrorType = ErrorType;
  static defaultProps = {
    errorLabel: 'Error',
    alertLabel: 'Alert',
  };
  public render() {
    const {children, error, errorLabel, alertLabel} = this.props;

    let hintLabel: string | undefined;
    switch (error) {
      case Hint.ErrorType.Error:
        hintLabel = errorLabel;
        break;
      case Hint.ErrorType.Alert:
        hintLabel = alertLabel;
        break;
      default:
    }

    return (
      <Message {...this.props}>
        {typeof error !== 'undefined' && hintLabel && <Label>{hintLabel}: </Label>}
        {children}
      </Message>
    );
  }
}
