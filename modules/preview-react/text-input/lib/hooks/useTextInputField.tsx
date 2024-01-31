import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useTextInputModel} from './useTextInputModel';

/**
 * Adds the necessary props to a `Field` component. Used by the TextInput.Field subcomponent.
 *
 * @deprecated ⚠️ `useTextInputField` in Preview has been deprecated and will be removed in a future major version. Please use [`FormField` in Preview](https://workday.github.io/canvas-kit/?path=/story/preview-inputs-form-field--basic) instead.
 */
export const useTextInputField = createElemPropsHook(useTextInputModel)(() => {
  return {
    type: 'text',
  };
});
