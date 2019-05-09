import * as React from 'react';
import styled from 'react-emotion';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {spacing, type} from '@workday/canvas-kit-react-core';

export interface HintProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: ErrorType;
}

const Label = styled('span')(type.body2, type.variant.label);

const Message = styled('p')(type.body2, {width: '100%', margin: `${spacing.xxs} 0 0`});

export default class Hint extends React.Component<HintProps> {
  static ErrorType = ErrorType;

  public render() {
    const {children, error} = this.props;

    let errorLabel: string | undefined;
    switch (error) {
      case Hint.ErrorType.Error:
        errorLabel = 'Error';
        break;
      case Hint.ErrorType.Alert:
        errorLabel = 'Alert';
        break;
      default:
    }

    return (
      <Message {...this.props}>
        {typeof error !== 'undefined' && <Label>{errorLabel && `${errorLabel}: `}</Label>}
        {children}
      </Message>
    );
  }
}
