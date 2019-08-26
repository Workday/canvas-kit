import * as React from 'react';
import styled from 'react-emotion';
import {spacing} from '@workday/canvas-kit-react-core';
import {GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
import Hint from './Hint';
import Label from './Label';
import {FormFieldLabelPosition, FormFieldLabelPositionBehavior} from './types';

export interface FormFieldProps extends GrowthBehavior {
  labelPosition: FormFieldLabelPosition;
  label?: React.ReactNode;
  hintText?: React.ReactNode;
  hintId?: string;
  inputId?: string;
  error?: ErrorType;
  useFieldset?: boolean;
  children: React.ReactNode;
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
    marginBottom: spacing.s,
  };
});

const FormFieldInputContainer = styled('div')<GrowthBehavior & FormFieldLabelPositionBehavior>(
  ({grow, labelPosition}) => {
    if (grow) {
      if (labelPosition === FormFieldLabelPosition.Left) {
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
        minHeight: 40,
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

  static defaultProps = {
    labelPosition: FormField.LabelPosition.Top,
    useFieldset: false,
  };

  private renderChildren = (child: React.ReactChild): React.ReactNode => {
    if (React.isValidElement<any>(child)) {
      const props: GrowthBehavior &
        FormFieldErrorBehavior &
        React.HTMLAttributes<HTMLInputElement> = {
        ...child.props,
      };

      if (this.props.grow && React.isValidElement<GrowthBehavior>(child)) {
        props.grow = this.props.grow;
      }

      if (
        typeof this.props.error !== 'undefined' &&
        React.isValidElement<FormFieldErrorBehavior>(child)
      ) {
        props.error = this.props.error;

        if (this.props.hintId) {
          props['aria-describedby'] = this.props.hintId;
        }

        if (this.props.error === ErrorType.Error) {
          props['aria-invalid'] = true;
        }
      }

      if (!child.props.id && this.props.inputId) {
        props.id = this.props.inputId;
      }

      return React.cloneElement(child, props);
    }

    return child;
  };

  render() {
    const {
      label,
      hintText,
      hintId,
      inputId,
      grow,
      children,
      useFieldset,
      ...inputProps
    } = this.props;
    const {labelPosition, error} = inputProps;

    const field = (
      <FormFieldContainer labelPosition={labelPosition}>
        {typeof label === 'string' ? (
          <Label labelPosition={labelPosition} htmlFor={inputId} isLegend={useFieldset}>
            {label}
          </Label>
        ) : (
          label
        )}

        <FormFieldInputContainer grow={grow} labelPosition={labelPosition}>
          {React.Children.map(children, this.renderChildren)}
          {hintText && (
            <Hint error={error} id={hintId}>
              {hintText}
            </Hint>
          )}
        </FormFieldInputContainer>
      </FormFieldContainer>
    );

    return useFieldset ? <FormFieldFieldsetContainer>{field}</FormFieldFieldsetContainer> : field;
  }
}
