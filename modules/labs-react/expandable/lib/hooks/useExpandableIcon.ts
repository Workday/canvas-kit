import {createHook} from '@workday/canvas-kit-react/common';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export const useExpandableIcon = createHook(({state}: DisclosureModel) => {
  return {
    open: state.visibility === 'visible',
  };
});
