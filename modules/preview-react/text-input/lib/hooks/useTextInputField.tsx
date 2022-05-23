import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useTextInputModel} from './useTextInputModel';

/**
 * Adds the necessary props to a `Field` component. Used by the TextInput.Field subcomponent.
 */
export const useTextInputField = createElemPropsHook(useTextInputModel)(() => {
  return {
    type: 'text',
  };
});
