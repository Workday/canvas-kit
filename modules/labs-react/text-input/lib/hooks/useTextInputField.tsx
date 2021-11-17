import {createHook} from '@workday/canvas-kit-react/common';
import {TextInputModel} from './useTextInputModel';

/**
 * Adds the necessary props to a `Field` component. Used by the TextInput.Field subcomponent.
 */
export const useTextInputField = createHook(({state}: TextInputModel) => {
  return {
    type: 'text',
    required: state.isRequired ? true : undefined,
    'aria-invalid': state.hasError ? true : undefined,
    'aria-describedby': state.hintId,
    id: state.inputId,
  };
});
