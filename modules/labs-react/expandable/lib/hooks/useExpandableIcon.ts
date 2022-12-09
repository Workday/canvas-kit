import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useExpandableModel} from './useExpandableModel';

export const useExpandableIcon = createElemPropsHook(useExpandableModel)(({state}) => {
  return {
    visible: state.visibility !== 'hidden',
  };
});
