import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

import {useFormFieldModel, useFormFieldOrientation} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';

export interface FormFieldProps extends Omit<ExtractProps<typeof Flex, never>, 'gap'> {
  /**
   * Children of the Text Input. Should contain a `<FormField.Input>`, a `<FormField.Label>` and an optional `<FormField.Hint>`
   */
  children: React.ReactNode;
  /**
   * The direction the child elements should stack
   */
  orientation: 'vertical' | 'horizontal';
  /**
   * Spacing/gap between children elements
   * @default xxxs when vertical l when orientation is horizontal
   */
  gap?: FlexProps['gap'];
}

export const FormField = createContainer('div')({
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
    <Flex as={Element} {...layoutProps} {...elemProps}>
      {children}
    </Flex>
  );
});
