import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useSelectModel} from './useSelectModel';

/** Adds aria role `option` for the select item and `aria-disabled` if an item is disabled by `nonInteractiveIds` */
export const useSelectItem = createElemPropsHook(useSelectModel)(_model => {
  return {
    role: 'option',
  };
});
