import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {spacing, type} from '@workday/canvas-kit-react-core';

export interface HintProps extends Themeable, React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * The type of error associated with the Hint (if applicable).
   */
  error?: ErrorType;
  /**
   * The label for the error message hint text if `hintText` and `error` are defined. This prop should only be used for translating the default string 'Error'.
   * @default 'Error'
   */
  errorLabel?: string;
  /**
   * The label for the alert message hint text if `hintText` and `error` are defined. This prop should only be used for translating the default string 'Alert'.
   * @default 'Alert'
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
