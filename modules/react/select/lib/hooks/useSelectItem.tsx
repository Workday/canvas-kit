import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useSelectModel} from './useSelectModel';

/** Adds the correct aria role for the select option */
export const useSelectItem = createElemPropsHook(useSelectModel)(({state}) => {
  return {
    role: 'option',
  };
});
