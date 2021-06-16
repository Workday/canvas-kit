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
      // If we're wrapping a target component that doesn't handle ref forwarding, update the
      // `state.targetRef` manually. This ensures that custom target components don't need to handle
      // ref forwarding since ref forwarding is only really needed to programmatically open popups
      // around a target _before_ a user clicks. In that rare case, ref forwarding is required.
      if (!state.targetRef.current) {
        (state.targetRef as React.MutableRefObject<any>).current = event.currentTarget;
      }

      if (state.visibility !== 'hidden') {
        events.hide({event});
      } else {
        events.show({event});
      }
    },
  };
});
