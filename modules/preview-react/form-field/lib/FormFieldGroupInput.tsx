import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';
import {CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import React from 'react';
import {useFormFieldModel} from './hooks';

export interface FormFieldGroupInputProps extends CSProps {}
/**
 * Adds the necessary props to an `Input` component.
 * Used by the FormField.Input subcomponent and other input type components
 */
export const useFormFieldGroupInput = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    'aria-invalid': state.error === 'error' ? true : undefined,
    'aria-describedby': state.id ? `hint-${state.id}` : undefined,
  };
});

export const FormFieldGroupInput = createSubcomponent('input')({
  displayName: 'FormField.Input',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldGroupInput,
})((elemProps: FormFieldGroupInputProps, Element) => {
  return <Element {...handleCsProp(elemProps)} />;
});