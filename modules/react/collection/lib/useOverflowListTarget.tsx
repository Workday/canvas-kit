import React from 'react';

import {createElemPropsHook, useMountLayout, useLocalRef} from '@workday/canvas-kit-react/common';

import {useOverflowListModel} from './useOverflowListModel';

// use a hidden style instead of `hidden` attribute for measurement purposes. `hidden` elements have no dimensions
const hiddenStyle = {
  position: 'absolute',
  left: -99999,
};

/**
 * This elemProps hook measures an overflow list target and reports it to an `OverflowListModel`.
 * This is used in overflow detection.
 */
export const useOverflowListTarget = createElemPropsHook(useOverflowListModel)((model, ref) => {
  const {elementRef, localRef} = useLocalRef(ref as React.Ref<HTMLElement>);
  // track first render to force correct size calculations
  const firstRender = React.useRef(true);

  useMountLayout(() => {
    firstRender.current = false;
    if (localRef.current) {
      const styles = getComputedStyle(localRef.current);

      model.events.setOverflowTargetWidth({
        width:
          localRef.current.offsetWidth +
          parseFloat(styles.marginLeft) +
          parseFloat(styles.marginRight),
      });
    }
  });

  const isHidden = !model.state.hiddenIds.length;

  return {
    ref: elementRef,
    'aria-hidden': isHidden,
    tabIndex: isHidden ? -1 : 0,
    style: isHidden ? hiddenStyle : {},
  };
});
