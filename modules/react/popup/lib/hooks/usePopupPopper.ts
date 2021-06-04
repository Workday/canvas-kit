import {createHook, useForkRef} from '@workday/canvas-kit-react/common';
import {PopupModel} from './usePopupModel';
import React from 'react';
import {Placement} from '../Popper';

/**
 * Hooks a Popper up to a PopupModel
 */
export const usePopupPopper = createHook(({state, events}: PopupModel, ref) => {
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
