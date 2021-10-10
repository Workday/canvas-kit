import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to an `Input` component.
 * Used by the FormField.input subcomponent and other input type componenets
 */
export const useFormFieldInput = createHook(({state}: FormFieldModel) => {
  return {
    required: state.isRequired ? true : undefined,
    'aria-invalid': state.hasError ? true : undefined,
    'aria-describedby': state.hintId,
    id: state.inputId,
  };
});
