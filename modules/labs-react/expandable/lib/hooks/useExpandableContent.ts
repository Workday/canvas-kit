import {createHook} from '@workday/canvas-kit-react/common';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export const useExpandableContent = createHook(({state}: DisclosureModel) => {
  const visible = state.visibility === 'visible';
  return {
    style: !visible ? {display: 'none'} : {},
    id: state.id,
  };
});
