import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useSelectModel} from './useSelectModel';

/** Adds aria role `option` for the select item. */
export const useSelectItem = createElemPropsHook(useSelectModel)(_model => {
  return {
    role: 'option',
  };
});
