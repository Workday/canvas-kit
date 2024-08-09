import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';
import React from 'react';
import {useFormFieldModel} from './hooks';

/**
 * Adds the necessary props to an `Input` component.
 * Used by the FormField.Input subcomponent and other input type components
 */
export const useFormFieldGroupInput = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    'aria-invalid': state.error === 'error' ? true : undefined,
    'aria-describedby': state.id ? `hint-${state.id}` : undefined,
    id: state.id ? `input-${state.id}` : undefined,
  };
});

export const FormFieldGroupInput = createSubcomponent('input')({
  displayName: 'FormField.Input',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldGroupInput,
})((elemProps, Element) => {
  return <Element {...elemProps} />;
});
