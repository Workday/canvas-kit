import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

export const useExpandableContent = createElemPropsHook(useDisclosureModel)(({state}) => {
  return {
    style: state.visibility !== 'hidden' ? {} : {display: 'none'},
    id: state.id,
  };
});
