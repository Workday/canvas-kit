import * as React from 'react';
import {spacing} from '@workday/canvas-kit-react-core';
import {GrowthBehavior, ErrorType, styled, Themeable} from '@workday/canvas-kit-react-common';
import Hint from './Hint';
import Label from './Label';
import {FormFieldLabelPosition, FormFieldLabelPositionBehavior} from './types';
import uuid from 'uuid/v4';

export interface FormFieldProps
  extends Themeable,
    React.HTMLAttributes<HTMLDivElement>,
    GrowthBehavior {
  /**
   * The position of the FormField label.
   * @default FormField.FormFieldLabelPosition.Top
   */
  labelPosition?: FormFieldLabelPosition;
  /**
   * The text of the FormField label.
   */
  label?: React.ReactNode;
  /**
   * The text of the message displayed below the input component. This is required if `error` is defined.
   */
  hintText?: React.ReactNode;
  /**
   * The HTML `id` of the message displayed below the input component. This is required for the `aria-describedby` accessibility attribute if `error` and `hintText` are defined.
   */
  hintId?: string;
  /**
   * The HTML `id` of the input component. If an `id` is not specified for the input, this will be used as it's `id`. This is referenced by the label's `htmlFor` attribute. This is required for accessiblity if `label` is defined.
   */
  inputId?: string;
  /**
   * The type of error associated with the FormField (if applicable). This is passed to the input component.
   */
  error?: ErrorType;
  /**
   * If true, style the FormField label to indicate that it is required.
   * @default false
   */
  required?: boolean;
  /**
   * If true, render the FormField using a `fieldset` and a `legend` instead of a `div` and a `label`. This must be set to `true` if you're using a Radio Group inside of a FormField (for accessibility reasons).
   * @default false
   */
  useFieldset?: boolean;
  /**
   * The input component wrapped by the FormField.
   */
  children: React.ReactNode;
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

export interface FormFieldErrorBehavior {
  error?: ErrorType;
}

// Use a fieldset element for accessible radio groups
const FormFieldFieldsetContainer = styled('fieldset')<FormFieldLabelPositionBehavior>({
  padding: 0,
  margin: 0,
  border: 0,
});

const FormFieldContainer = styled('div')<FormFieldLabelPositionBehavior>(({labelPosition}) => {
  if (labelPosition === FormFieldLabelPosition.Left) {
    return {
      display: 'flex',
      marginBottom: spacing.m,
    };
  }

  return {
    display: 'block',
    marginBottom: spacing.m,
  };
});

const FormFieldInputContainer = styled('div')<GrowthBehavior & FormFieldLabelPositionBehavior>(
  ({grow, labelPosition}) => {
    if (grow) {
      if (
        labelPosition === FormFieldLabelPosition.Left ||
        labelPosition === FormFieldLabelPosition.Hidden
      ) {
        return {
          flexGrow: 1,
        };
      }

      return {
        display: 'block',
      };
    }

    if (labelPosition === FormFieldLabelPosition.Left) {
      return {
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      };
    }

    return {
      display: 'inline-block',
    };
  }
);

export default class FormField extends React.Component<FormFieldProps> {
  static LabelPosition = FormFieldLabelPosition;
  static ErrorType = ErrorType;

  private inputId: string = this.props.inputId || uuid();

  private renderChildren = (child: React.ReactElement): React.ReactNode => {
    if (React.isValidElement<any>(child)) {
      const props: GrowthBehavior &
        FormFieldErrorBehavior &
        React.InputHTMLAttributes<HTMLInputElement> = {
        ...child.props,
      };

      if (this.props.grow) {
        props.grow = this.props.grow;
      }

      if (typeof this.props.error !== 'undefined') {
        props.error = this.props.error;

        if (this.props.hintId) {
          props['aria-describedby'] = this.props.hintId;
        }

        if (this.props.error === ErrorType.Error) {
          props['aria-invalid'] = true;
        }
      }

      props.id = this.inputId;

      return React.cloneElement(child, props);
    }

    return child;
  };

  render() {
    const {
      errorLabel = 'Error',
      alertLabel = 'Alert',
      useFieldset = false,
      labelPosition = FormField.LabelPosition.Top,
      label,
      hintText,
      hintId,
      inputId,
      grow,
      children,
      error,
      required,
      ...elemProps
    } = this.props;

    const field = (
      <FormFieldContainer labelPosition={labelPosition} {...elemProps}>
        {typeof label === 'string' ? (
          <Label
            labelPosition={labelPosition}
            htmlFor={this.inputId}
            isLegend={useFieldset}
            required={required}
            accessibleHide={labelPosition === FormFieldLabelPosition.Hidden}
          >
            {label}
          </Label>
        ) : (
          label
        )}

        <FormFieldInputContainer grow={grow} labelPosition={labelPosition}>
          {React.Children.map(children, this.renderChildren)}
          {hintText && (
            <Hint errorLabel={errorLabel} alertLabel={alertLabel} error={error} id={hintId}>
              {hintText}
            </Hint>
          )}
        </FormFieldInputContainer>
      </FormFieldContainer>
    );

    return useFieldset ? <FormFieldFieldsetContainer>{field}</FormFieldFieldsetContainer> : field;
  }
}
