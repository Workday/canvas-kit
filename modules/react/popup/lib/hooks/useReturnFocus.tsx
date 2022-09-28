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

  // This boolean tracks keyboard-driven focus changes. This is required for `useFocusRedirect` as
  // focus redirection needs synchronous focus management and everything else needs asynchronous
  // focus management.
  const requiresFocusChangeRef = React.useRef(false);

  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    // The tab key changes focus
    if (event.key === 'Tab') {
      requiresFocusChangeRef.current = true;
    }
  }, []);

  const onKeyUp = React.useCallback((event: KeyboardEvent) => {
    requiresFocusChangeRef.current = false;
  }, []);

  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    // capture the element here. The refs will be null by the time the cleanup function is called
    const element = (model.state.returnFocusRef || model.state.targetRef).current as HTMLElement;

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('keyup', onKeyUp, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('keyup', onKeyUp, true);

      if (requiresFocusChangeRef.current) {
        // We need to change focus _before_ the browser process the default action of picking a new
        // focus target. Doing this immediately prevents the `focus` event from firing on `element`,
        // but that's okay because the browser will change focus anyways.
        changeFocus(element);
      } else {
        // We wait a frame for the current event to process, allowing the browser to fire default
        // actions. This delay allows the focus change to trigger a `focus` event on `element`.
        requestAnimationFrame(() => {
          changeFocus(element);
        });
      }
    };
  }, [model.state.returnFocusRef, model.state.targetRef, visible, onKeyDown, onKeyUp]);

  return {};
});
