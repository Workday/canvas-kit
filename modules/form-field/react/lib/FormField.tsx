import * as React from 'react';
import styled from '@emotion/styled';
import {spacing} from '@workday/canvas-kit-react-core';
import {GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
import Hint from './Hint';
import Label from './Label';
import {FormFieldLabelPosition, FormFieldLabelPositionBehavior} from './types';
import uuid from 'uuid/v4';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement>, GrowthBehavior {
  labelPosition: FormFieldLabelPosition;
  label?: React.ReactNode;
  hintText?: React.ReactNode;
  hintId?: string;
  inputId?: string;
  error?: ErrorType;
  required?: boolean;
  useFieldset: boolean;
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

  static defaultProps = {
    labelPosition: FormField.LabelPosition.Top,
    useFieldset: false,
  };

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
      label,
      hintText,
      hintId,
      inputId,
      grow,
      children,
      useFieldset,
      labelPosition,
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
            required={!!required}
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
