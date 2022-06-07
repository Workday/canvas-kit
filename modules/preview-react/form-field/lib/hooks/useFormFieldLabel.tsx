import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useFormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to a `Label` component.
 * Used by the FormField.Label subcomponent and other input type components
 */
export const useFormFieldLabel = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    htmlFor: `input-${state.id}`,
  };
});
