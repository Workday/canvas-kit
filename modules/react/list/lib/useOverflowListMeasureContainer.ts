import * as React from 'react';

import {createHook, useForkRef, useResizeObserver} from '@workday/canvas-kit-react/common';

import {OverflowListModel} from './useOverflowListModel';

export const useOverflowListMeasureContainer = createHook(
  (model: OverflowListModel, ref?: React.Ref<HTMLElement>) => {
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
