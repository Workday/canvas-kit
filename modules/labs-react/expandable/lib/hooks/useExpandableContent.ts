import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useExpandableModel} from './useExpandableModel';

export const useExpandableContent = createElemPropsHook(useExpandableModel)(({state}) => {
  return {
    style: state.visibility !== 'hidden' ? {} : {display: 'none'},
    id: state.id,
  };
});
