import * as React from 'react';

import {
  createElemPropsHook,
  useLocalRef,
  useMountLayout,
  useResizeObserver,
} from '@workday/canvas-kit-react/common';

import {useOverflowListModel} from './useOverflowListModel';

/**
 * This elemProps hook measures a list and reports it to an `OverflowListModel`. This is used in
 * overflow detection.
 */
export const useOverflowListMeasure = createElemPropsHook(useOverflowListModel)((model, ref) => {
  const {elementRef, localRef} = useLocalRef(ref as React.Ref<HTMLElement>);
  const gapProperty = model.state.orientation === 'horizontal' ? 'columnGap' : 'rowGap';

  useResizeObserver({
    ref: localRef,
    onResize: model.events.setContainerSize,
  });
  useMountLayout(() => {
    if (localRef.current) {
      const styles = getComputedStyle(localRef.current);
      model.events.setContainerGap({
        size: styles.gap === 'normal' ? 0 : Number(styles[gapProperty].replace('px', '')),
      });
    }
  });

  return {
    ref: elementRef,
  };
});
