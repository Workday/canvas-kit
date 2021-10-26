import {createHook} from '@workday/canvas-kit-react/common';
import {TextInputModel} from './useTextInputModel';

/**
 * Adds the necessary props to a `Label` component. Used by the TextInput.Label subcomponent.
 */
export const useTextInputLabel = createHook(({state}: TextInputModel) => {
  return {
    htmlFor: state.inputId,
  };
});
