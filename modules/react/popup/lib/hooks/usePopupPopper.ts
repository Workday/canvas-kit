import {createElemPropsHook, useForkRef} from '@workday/canvas-kit-react/common';
import {usePopupModel} from './usePopupModel';
import React from 'react';
import {Placement} from '../Popper';

/**
 * Adds the necessary props to a {@link Popper} component. Used by the
 * {@link PopupPopper Popup.Popper} subcomponent.
 */
export const usePopupPopper = createElemPropsHook(usePopupModel)(({state, events}, ref) => {
  const elementRef = useForkRef(ref, state.stackRef);

  // Create a mutable ref of the placement to keep a stable `onPlacementChange` reference.
  const placementRef = React.useRef(state.placement);
  placementRef.current = state.placement;
  const onPlacementChange = React.useCallback(
    (placement: Placement) => {
      if (placement !== placementRef.current) {
        // only update if the placement has changed
        events.updatePlacement({placement});
      }
    },
    [events]
  );

  return {
    open: state.visibility !== 'hidden',
    anchorElement: state.targetRef,
    ref: elementRef,
    onPlacementChange,
  };
});
