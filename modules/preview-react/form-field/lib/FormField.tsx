import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {space} from '@workday/canvas-kit-react/tokens';

import {useFormFieldModel, useFormFieldOrientation} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';
import {FormFieldContainer} from './FormFieldContainer';

export interface FormFieldProps extends FlexProps {
  children: React.ReactNode;
  /**
   * The direction the child elements should stack
   * @default vertical
   */
  orientation?: 'vertical' | 'horizontal';
}

const formFieldBaseStyles = createStyles({
  border: 'none',
  padding: 0,
  margin: `0 0 ${space.m}`,
});
/**
 * Use `FormField` wrap input components to make them accessible. You can customize the field
 * by passing in `TextInput`, `Select`, `RadioGroup` and other form elements to `FormField.Input`.
 *
 * ```tsx
 * <FormField>
 *    <FormField.Label>First Name</FormField.Label>
 *    <FormField.Input as={TextInput} value={value} onChange={handleChange} />
 *  </FormField>
 * ```
 */
export const FormField = createContainer('div')({
  displayName: 'FormField',
  modelHook: useFormFieldModel,
  subComponents: {
    Input: FormFieldInput,
    Label: FormFieldLabel,
    Hint: FormFieldHint,
    Container: FormFieldContainer,
  },
})<FormFieldProps>(({children, orientation = 'vertical', ...elemProps}, Element) => {
  const layoutProps = useFormFieldOrientation(orientation);

  return (
    <Flex as={Element} {...layoutProps} {...mergeStyles(elemProps, formFieldBaseStyles)}>
      {children}
    </Flex>
  );
});
