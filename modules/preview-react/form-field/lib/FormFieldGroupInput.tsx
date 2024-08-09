import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import React from 'react';
import {useFormFieldGroupModel} from './hooks/useFormFieldGroupModel';

/**
 * Adds the necessary props to an `Input` component.
 * Used by the FormField.Input subcomponent and other input type components
 */
export const useFormFieldGroupInput = createElemPropsHook(useFormFieldGroupModel)(({state}) => {
  return {
    'aria-invalid': state.error === 'error' ? true : undefined,
    'aria-describedby': state.id ? `hint-${state.id}` : undefined,
    id: state.id ? `input-${state.id}` : undefined,
  };
});

export const FormFieldGroupInput = createSubcomponent('input')({
  displayName: 'FormField.Input',
  modelHook: useFormFieldGroupModel,
  elemPropsHook: useFormFieldGroupInput,
})<ExtractProps<typeof Box, never>>((elemProps, Element) => {
  return <Box data-width="ck-formfield-width" as={Element} {...elemProps} />;
});
