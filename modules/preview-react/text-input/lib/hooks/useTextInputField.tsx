import {createHook} from '@workday/canvas-kit-react/common';

/**
 * Adds the necessary props to a `Field` component. Used by the TextInput.Field subcomponent.
 */
export const useTextInputField = createHook(() => {
  return {
    type: 'text',
  };
});
