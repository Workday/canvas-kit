import {createHook} from '@workday/canvas-kit-react/common';
import {TextInputModel} from './useTextInputModel';

/**
 * Adds the necessary props to a `Hint` component. Used by the TextInput.Hint subcomponent.
 */
export const useTextInputHint = createHook(({state}: TextInputModel) => {
  return {
    id: state.hintId,
  };
});
