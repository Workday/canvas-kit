import React from 'react';

import {changeFocus, assert, getFirstFocusableElement} from '@workday/canvas-kit-react/common';

import {PopupModel} from './usePopupModel';

/**
 * Moves focus within the popup when the popup becomes visible. This is useful for keyboard and
 * screen reader users alike. This should be used with `useFocusRedirect` or `useFocusTrap` for a
 * complete focus management solution.
 *
 * This should be used for popups that have focusable elements inside, like Modals, non-modal
 * dialogs, menus, etc.
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
  }, [model.state.initialFocusRef, model.state.stackRef, visible]);

  return elemProps;
};
