import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to an `Input` component.
 * Used by the FormField.input subcomponent and other input type components
 */
export const useFormFieldInput = createHook(({state}: FormFieldModel) => {
  return {
    required: state.isRequired ? true : undefined,
    'aria-invalid': state.hasError ? true : undefined,
    'aria-describedby': `hint-${state.id}`,
    id: `input-${state.id}`,
  };
});
