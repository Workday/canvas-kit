import {createHook} from '@workday/canvas-kit-react/common';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export const useExpandableContent = createHook(({state}: DisclosureModel) => {
  return {
    style: state.visibility !== 'visible' ? {display: 'none'} : {},
    id: state.id,
  };
});
