import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useFormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to a `Label` component.
 * Used by the FormField.Label subcomponent and other input type components
 */
export const useFormFieldLabel = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    /**
     * Provide an `for` attribute for `for/id` links between a `label/input` respectively
     */
    htmlFor: `input-${state.id}`,
    /**
     * Provide an `id` attribute for `id/aria-labelledby` links between the label and any other
     * element
     */
    id: `label-${state.id}`,
  };
});
