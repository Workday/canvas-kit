import {createHook, useForkRef} from '@workday/canvas-kit-react/common';
import {PopupModel} from './usePopupModel';

/**
 * Adds the necessary props to a `Target` component. Used by the Popup.Target subcomponent.
 */
export const usePopupTarget = createHook(({events, state}: PopupModel, ref) => {
  const elementRef = useForkRef(ref, state.targetRef);
  return {
    ref: elementRef,
    onClick: (event: React.MouseEvent) => {
      if (state.visibility !== 'hidden') {
        events.hide({event});
      } else {
        events.show({event});
      }
    },
  };
});
