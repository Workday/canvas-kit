import React from 'react';

import {changeFocus, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './usePopupModel';

/**
 * Returns focus to the target element when the popup is hidden. This works well with
 * `useInitialFocus`. This should be used with `useFocusRedirect` or `useFocusTrap` for a complete
 * focus management solution.
 *
 * This should be used on popup elements that use `useInitialFocus`.
 */
export const useReturnFocus = createElemPropsHook(usePopupModel)(model => {
  const visible = model.state.visibility !== 'hidden';

  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    // capture the element here. The refs will be null by the time the cleanup function is called
    const element = (model.state.returnFocusRef || model.state.targetRef).current;
    return () => {
      changeFocus(element);
    };
  }, [model.state.returnFocusRef, model.state.targetRef, visible]);

  return {};
});
