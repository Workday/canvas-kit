import React from 'react';

import {changeFocus, assert, getFirstFocusableElement} from '@workday/canvas-kit-react/common';

import {PopupModel} from '../usePopupModel';

/**
 * Transfer focus to an appropriate element within the popup.
 */
export const useInitialFocus = (model: PopupModel, elemProps = {}) => {
  const visible = model.state.visibility !== 'hidden';

  // Using `useEffect` instead of `useLayoutEffect` so that focus doesn't change _before_ PopperJS
  // has positioned the Popup. If we change focus before positioning, the browser will scroll to the
  // top of the page.
  React.useEffect(() => {
    if (visible && model.state.stackRef.current) {
      const element =
        model.state.initialFocusRef?.current ||
        getFirstFocusableElement(model.state.stackRef.current);

      assert(
        element,
        'No focusable element was found. Please ensure popup has at least one focusable element'
      );

      changeFocus(element);
    }

    // The eslint rule wants to add refs as dependencies, but that is not what we want. We want to
    // only run this callback when visibility changes, not risk focusing something when someone
    // unintentionally changes a ref's pointer

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return elemProps;
};
