import React from 'react';

import {changeFocus, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './usePopupModel';

function getScrollParent(element: HTMLElement): HTMLElement {
  if (element === document.body || !element.parentElement) {
    return element;
  }
  const styles = getComputedStyle(element);

  if (styles.overflowY === 'scroll' || styles.overflowY === 'auto') {
    return element;
  }

  return getScrollParent(element.parentElement);
}

/**
 * Returns focus to the target element when the popup is hidden. This works well with
 * `useInitialFocus`. This should be used with `useFocusRedirect` or `useFocusTrap` for a complete
 * focus management solution.
 *
 * This should be used on popup elements that use `useInitialFocus`.
 */
export const useReturnFocus = createElemPropsHook(usePopupModel)(model => {
  const visible = model.state.visibility !== 'hidden';

  React.useEffect(() => {
    if (!visible) {
      return;
    }
    // capture the element here. The refs will be null by the time the cleanup function is called
    const element = (model.state.returnFocusRef || model.state.targetRef).current as HTMLElement;
    return () => {
      const scrollParent = getScrollParent(element);
      const scrollParentRect = scrollParent.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Don't change focus if user focused on a different element like a `input` or the target element isn't on the screen
      if (
        document.activeElement !== document.body ||
        elementRect.top > scrollParentRect.bottom ||
        elementRect.bottom < scrollParentRect.top
      ) {
        return;
      }
      changeFocus(element);
    };
  }, [model.state.returnFocusRef, model.state.targetRef, visible]);

  return {};
});
