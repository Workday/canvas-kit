import * as React from 'react';
import {ErrorType, styled, Themeable} from '@workday/canvas-kit-react-common';
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

const Label = styled('span')<Pick<HintProps, 'error'>>(
  type.body2,
  type.variant.label,
  ({error, theme}) => error === ErrorType.Error && {color: theme.canvas.palette.error.main}
);

const Message = styled('p')<Pick<HintProps, 'error'>>(
  type.body2,
  {
    margin: `${spacing.xxs} 0 0`,
    width: '100%',
  },
  ({error, theme}) => error === ErrorType.Error && {color: theme.canvas.palette.error.main}
);

export default class Hint extends React.Component<HintProps> {
  static ErrorType = ErrorType;

  public render() {
    const {errorLabel = 'Error', alertLabel = 'Alert', children, error} = this.props;

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
        {typeof error !== 'undefined' && hintLabel && <Label error={error}>{hintLabel}: </Label>}
        {children}
      </Message>
    );
  }
}
