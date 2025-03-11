import React from 'react';

import {changeFocus, createElemPropsHook, isMouseFocusable} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './usePopupModel';
import {PopupStack} from '@workday/canvas-kit-popup-stack';

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
 * Get a focusable element in an element's tree
 */
function getFocusableElement(element: Element | null): Element | null {
  if (element === null || element === document.body || !element.parentElement) {
    return null;
  } else if (isMouseFocusable(element)) {
    return element;
  }

  return getFocusableElement(element.parentElement);
}

/**
 * Is the element outside of bounds. An element is outside of bounds if it is less than half visible.
 */
function isElementOutOfBounds(
  element: HTMLElement,
  boundingRect: {top: number; bottom: number; left: number; right: number}
) {
  const elementRect = element.getBoundingClientRect();

  return (
    elementRect.top + elementRect.height / 2 < boundingRect.top || // is the top half of the target element visible?
    elementRect.bottom - elementRect.height / 2 > boundingRect.bottom || // is the bottom half of the target element visible?
    elementRect.left + elementRect.width / 2 < boundingRect.left || // is the left half of the target element visible?
    elementRect.right - elementRect.width / 2 > boundingRect.right // is the right half of the target element visible?
  );
}

/**
 * Returns focus to the target element when the popup is hidden. This works well with
 * {@link useInitialFocus}. This should be used with {@link useFocusRedirect} or
 * {@link useFocusTrap} for a complete focus management solution.
 *
 * This should be used on popup elements that use `useInitialFocus`.
 */
export const useReturnFocus = createElemPropsHook(usePopupModel)(model => {
  const visible = model.state.visibility !== 'hidden';
  const elementRef = React.useRef<Element | null>(null);

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

  // track mousedown events to determine if the mouse target is a focusable element. If it is, we
  // should not return focus
  const onMouseDown = React.useCallback(
    (event: MouseEvent) => {
      if (model.state.stackRef.current && event.target instanceof Element) {
        if (!PopupStack.contains(model.state.stackRef.current, event.target as HTMLElement)) {
          elementRef.current = event.target;
        }
      }
    },
    [model.state.stackRef]
  );

  // We use `useLayoutEffect` because the callback will be called _before_ the browser changes
  // focus. This allows the browser to change focus as normal. For example, if the popup closes
  // because the user hits the tab key when focused on the last focusable element,
  // `useFocusRedirect` will cause the popup to close before the browser is finished processing the
  // `keydown`. The browser's default action of a keydown of a tab key is to advance focus to the
  // next focusable element. This means that the `useFocusRedirect` will change focus back to the
  // target, then the tab key is processed by the browser to focus on the next item after the target
  // without us having to use a focus manager to guess what the next focusable element is.
  //
  // But because we're using `useLayoutEffect` instead of `useEffect`, we cannot use
  // `document.activeElement` (because the focus hasn't changed yet because the browser hasn't
  // triggered a default action yet) to determine if a user clicked on something that can accept
  // focus itself. If we don't short-circuit return focus, the user will intend to click on an
  // `input` element only to get focus changed back. This is annoying to users and unintuitive. Instead,
  // we'll use `mousedown` and `mouseup` to determine if we're closing because of a mouse click.
  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    // capture the element here. The refs will be null by the time the cleanup function is called
    const element = (model.state.returnFocusRef || model.state.targetRef)
      .current as HTMLElement | null;
    document.addEventListener('mousedown', onMouseDown, true);
    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('mousedown', onMouseDown, true);
      document.removeEventListener('keydown', onKeyDown, true);
      if (!element) {
        return;
      }
      const scrollParent = getScrollParent(element);
      const scrollParentRect = scrollParent.getBoundingClientRect();
      const viewportRect = {left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight};

      // Don't change focus if user focused on a different element like a `input` or the target
      // element isn't on at least halfway rendered on the screen.
      if (
        (elementRef.current && getFocusableElement(elementRef.current)) || // did the user click on a focusable element?
        isElementOutOfBounds(element, scrollParentRect) || // Is the element not visible in its scroll parent?
        isElementOutOfBounds(element, viewportRect) // Is the element not visible in the viewport?
      ) {
        // reset the focus element and bail early
        elementRef.current = null;
        return;
      }

      const activeElementOutsidePopupStack =
        document.activeElement !== document.body &&
        model.state.stackRef.current &&
        document.activeElement instanceof Element &&
        !PopupStack.contains(model.state.stackRef.current, document.activeElement as HTMLElement);

      if (activeElementOutsidePopupStack || requiresFocusChangeRef.current) {
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

      elementRef.current = null;
    };
  }, [
    model.state.returnFocusRef,
    model.state.targetRef,
    visible,
    onMouseDown,
    onKeyDown,
    model.state.stackRef,
  ]);

  return {};
});
