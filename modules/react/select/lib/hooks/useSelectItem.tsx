import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useSelectModel} from './useSelectModel';

/** Adds aria role `option` for the select item. */
export const useSelectItem = createElemPropsHook(useSelectModel)(({state}) => {
  return {
    role: 'option',
  };
});
