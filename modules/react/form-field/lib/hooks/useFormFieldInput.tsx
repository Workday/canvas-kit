import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useFormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to an `Input` component.
 * Used by the FormField.Input subcomponent and other input type components
 */
export const useFormFieldInput = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    required: state.isRequired ? true : undefined,
    'aria-invalid': state.error === 'error' ? true : undefined,
    'aria-describedby': state.id ? `hint-${state.id}` : undefined,
    /**
     * Provide an `aria-labelledby` for fields that need access to `label` directly
     */
    'aria-labelledby': state.id ? `label-${state.id}` : undefined,
    /**
     * Provide an `id` to link the input via the `for` attribute on a `label`
     */
    id: state.id ? `input-${state.id}` : undefined,
    error: state.error,
  };
});
