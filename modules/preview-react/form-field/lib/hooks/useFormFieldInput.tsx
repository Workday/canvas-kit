import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useFormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to an `Input` component.
 * Used by the FormField.Input subcomponent and other input type components
 */
export const useFormFieldInput = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    required: state.isRequired ? true : undefined,
    'aria-invalid': state.hasError ? true : undefined,
    'aria-describedby': `hint-${state.id}`,
    id: `input-${state.id}`,
  };
});
