import React from 'react';

import {createComponent, ExtractProps, useModelContext} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-labs-react/common';

import {FormFieldModelContext} from './FormField';
import {FormFieldModel} from './hooks/useFormFieldModel';
import {useFormFieldInput} from './hooks/useFormFieldInput';

export interface FormFieldInputProps extends ExtractProps<typeof Box, never> {
  model?: FormFieldModel;
}

export const FormFieldInput = createComponent('input')({
  displayName: 'FormField.Input',
  Component: ({model, ...elemProps}: FormFieldInputProps, ref, Element) => {
    const localModel = useModelContext(FormFieldModelContext, model);
    const props = useFormFieldInput(localModel, elemProps, ref);

    return <Box as={Element} {...props} />;
  },
});
