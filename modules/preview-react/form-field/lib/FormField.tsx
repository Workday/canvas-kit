import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {space} from '@workday/canvas-kit-react/tokens';

import {useFormFieldModel, useFormFieldOrientation} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';
import {FormFieldContainer} from './FormFieldContainer';
// import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface FormFieldProps extends FlexProps {
  /**
   * Children of the Text Input. Should contain a `<FormField.Input>`, a `<FormField.Label>` and an optional `<FormField.Hint>`
   */
  children: React.ReactNode;
  /**
   * The direction the child elements should stack
   */
  orientation?: 'vertical' | 'horizontal';
}

const formFieldBaseStyles = createStyles({
  border: 'none',
  padding: 0,
  margin: `0 0 ${space.m}`,
});

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
    <Flex as={Element} {...layoutProps} cs={formFieldBaseStyles} {...elemProps}>
      {children}
    </Flex>
  );
});
