import React from 'react';

import {createContainerComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Stack, StackSpacing} from '@workday/canvas-kit-react/layout';

import {useFormFieldModel, useFormFieldOrientation} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';

export interface FormFieldProps extends Omit<ExtractProps<typeof Stack, never>, 'spacing'> {
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

export const FormField = createContainerComponent('div')({
  displayName: 'FormField',
  modelHook: useFormFieldModel,
  subComponents: {
    Input: FormFieldInput,
    Label: FormFieldLabel,
    Hint: FormFieldHint,
  },
})<FormFieldProps>(({children, orientation, ...elemProps}, Element) => {
  const layoutProps = useFormFieldOrientation(orientation);

  return (
    <Stack as={Element} {...layoutProps} {...elemProps}>
      {children}
    </Stack>
  );
});
