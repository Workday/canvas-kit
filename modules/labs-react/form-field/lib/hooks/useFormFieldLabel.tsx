import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to a `Label` component.
 * Used by the FormField.Label subcomponent and other input type components
 */
export const useFormFieldLabel = createHook(({state}: FormFieldModel) => {
  return {
    htmlFor: `input-${state.id}`,
  };
});
