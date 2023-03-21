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
  const onPlacementChange = React.useCallback(
    (placement: Placement) => {
      if (placement !== state.placement) {
        // only update if the placement has changed
        events.updatePlacement({placement});
      }
    },
    [events, state.placement]
  );

  return {
    open: state.visibility !== 'hidden',
    anchorElement: state.targetRef,
    ref: elementRef,
    onPlacementChange,
  };
});
