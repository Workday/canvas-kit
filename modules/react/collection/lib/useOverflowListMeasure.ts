import * as React from 'react';

import {createElemPropsHook, useForkRef, useResizeObserver} from '@workday/canvas-kit-react/common';

import {useOverflowListModel} from './useOverflowListModel';

/**
 * This elemProps hook measures a list and reports it to an `OverflowListModel`. This is used in
 * overflow detection.
 */
export const useOverflowListMeasure = createElemPropsHook(useOverflowListModel)(
  (model, ref?: React.Ref<HTMLElement>) => {
    const localRef = React.useRef(null);
    const {ref: resizeRef} = useResizeObserver({
      ref: localRef,
      onResize: model.events.setContainerWidth,
    });
    const elementRef = useForkRef(ref, resizeRef);

    return {
      ref: elementRef,
    };
  }
);
