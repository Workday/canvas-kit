import * as React from 'react';

import {createElemPropsHook, useForkRef, useResizeObserver} from '@workday/canvas-kit-react/common';

import {useOverflowListModel} from './useOverflowListModel';

/**
 * This elemProps hook measures a list and reports it to an `OverflowListModel`. This is used in
 * overflow detection.
 */
export const useOverflowListMeasure = createElemPropsHook(useOverflowListModel)((model, ref) => {
  const localRef = React.useRef(null);
  const {ref: resizeRef} = useResizeObserver({
    ref: localRef,
    onResize:
      model.state.orientation === 'horizontal'
        ? model.events.setContainerWidth
        : model.events.setContainerHeight,
  });
  const elementRef = useForkRef(ref, resizeRef);

  return {
    ref: elementRef,
  };
});
