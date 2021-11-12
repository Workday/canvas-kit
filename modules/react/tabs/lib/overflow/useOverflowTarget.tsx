import React from 'react';

import {createHook, useMountLayout, useLocalRef} from '@workday/canvas-kit-react/common';

import {OverflowModel} from './useOverflowModel';

// use a hidden style instead of `hidden` attribute for measurement purposes. `hidden` elements have no dimensions
const hiddenStyle = {
  position: 'absolute',
  left: -99999,
};

export const useOverflowTarget = createHook(
  (model: OverflowModel, ref?: React.Ref<HTMLButtonElement>) => {
    const {elementRef, localRef} = useLocalRef(ref);
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

    const isHidden = !model.state.hiddenKeys.length;

    return {
      ref: elementRef,
      'aria-hidden': isHidden,
      tabIndex: -1,
      style: isHidden ? hiddenStyle : {},
    };
  }
);
