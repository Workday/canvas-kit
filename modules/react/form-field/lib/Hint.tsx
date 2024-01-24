import * as React from 'react';
import {ErrorType, Themeable, styled} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {Subtext, Text} from '@workday/canvas-kit-react/text';
/**
 * @deprecated ⚠️ `HintProps` in Main has been deprecated and will be removed in a future major version. Please use [`FormField` in Preview](https://workday.github.io/canvas-kit/?path=/story/preview-inputs-form-field--basic) instead.
 */
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

const Message = styled(Subtext)<Pick<HintProps, 'error'>>(
  ({error, theme}) => error === ErrorType.Error && {color: theme.canvas.palette.error.main}
);
/**
 * @deprecated ⚠️ `Hint` in Main has been deprecated and will be removed in a future major version. Please use [`FormField` in Preview](https://workday.github.io/canvas-kit/?path=/story/preview-inputs-form-field--basic) instead.
 */
class Hint extends React.Component<HintProps> {
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
      <Message size="medium" margin={`${space.xxs} 0 0`} width="100%" {...this.props}>
        {typeof error !== 'undefined' && hintLabel && (
          <Text fontWeight="medium">{hintLabel}: </Text>
        )}
        {children}
      </Message>
    );
  }
}

Hint.ErrorType = ErrorType;

export {Hint};
