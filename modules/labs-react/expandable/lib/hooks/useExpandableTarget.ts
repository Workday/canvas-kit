import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

export const useExpandableTarget = createElemPropsHook(useDisclosureModel)(({state, events}) => {
  return {
    'aria-controls': state.id,
    'aria-expanded': state.visibility !== 'hidden',
    onClick: (event: React.MouseEvent) => {
      if (state.visibility !== 'hidden') {
        events.hide(event);
      } else {
        events.show(event);
      }
    },
  };
});
