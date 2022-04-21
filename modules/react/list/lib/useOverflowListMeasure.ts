import * as React from 'react';

import {createElemPropsHook, useForkRef, useResizeObserver} from '@workday/canvas-kit-react/common';

import {useOverflowListModel2} from './useOverflowListModel';

export const useOverflowListMeasure = createElemPropsHook(useOverflowListModel2)(
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
