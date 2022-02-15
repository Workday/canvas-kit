import React from 'react';

import {createComponent, ExtractProps, useDefaultModel} from '@workday/canvas-kit-react/common';
import {Stack, StackSpacing} from '@workday/canvas-kit-react/layout';

import {
  useFormFieldModel,
  FormFieldModel,
  FormFieldModelConfig,
  useFormFieldOrientation,
} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';

export const FormFieldModelContext = React.createContext<FormFieldModel>({} as any);

export interface FormFieldProps
  extends FormFieldModelConfig,
    Omit<ExtractProps<typeof Stack, never>, 'spacing'> {
  model?: FormFieldModel;
  /**
   * Children of the Text Input. Should contain a `<FormField.Input>`, a `<FormField.Label>` and an optional `<FormField.Hint>`
   */
  children: React.ReactNode;
  /**
   * The direction the child elements should stack
   */
  orientation: 'vertical' | 'horizontal';
  /**
   * Spacing between children elements
   * @default xxxs when vertical l when orientation is horizontal
   */
  spacing?: StackSpacing;
}

export const FormField = createComponent()({
  displayName: 'FormField',
  Component: ({children, model, spacing, orientation, ...props}: FormFieldProps, ref) => {
    const {hasError, id, isRequired, ...elemProps} = props;
    const value = useDefaultModel(model, {hasError, id, isRequired}, useFormFieldModel);

    const layoutProps = useFormFieldOrientation(orientation);

    return (
      <FormFieldModelContext.Provider value={value}>
        <Stack ref={ref} {...layoutProps} {...elemProps}>
          {children}
        </Stack>
      </FormFieldModelContext.Provider>
    );
  },
  subComponents: {
    Input: FormFieldInput,
    Label: FormFieldLabel,
    Hint: FormFieldHint,
  },
});
