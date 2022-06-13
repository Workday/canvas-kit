import {useDisclosureModel} from '@workday/canvas-kit-react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';

export const useExpandableIcon = createElemPropsHook(useDisclosureModel)(({state}) => {
  return {
    visible: state.visibility !== 'hidden',
  };
});
