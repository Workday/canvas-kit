import React from 'react';

import {changeFocus, createElemPropsHook, isFocusable} from '@workday/canvas-kit-react/common';

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
 * Get a focusable element in an element's tree
 */
function getFocusableElement(element: Element | null): Element | null {
  if (element === null || element === document.body || !element.parentElement) {
    return null;
  } else if (isFocusable(element)) {
    return element;
  }

  return getFocusableElement(element.parentElement);
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
  const elementRef = React.useRef<Element | null>(null);

  // track mousedown events to determine if the mouse target is a focusable element. If it is, we
  // should not return focus
  const onMouseDown = React.useCallback((event: MouseEvent) => {
    elementRef.current = event.target as Element;
  }, []);

  const onMouseUp = React.useCallback(() => {
    elementRef.current = null;
  }, []);

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
    const element = (model.state.returnFocusRef || model.state.targetRef).current as HTMLElement;
    document.addEventListener('mousedown', onMouseDown, true);
    document.addEventListener('mouseup', onMouseUp, true);
    console.log('opening popup');

    return () => {
      console.log('cleanup');
      document.removeEventListener('mousedown', onMouseDown, true);
      document.removeEventListener('mouseup', onMouseUp, true);
      const scrollParent = getScrollParent(element);
      const scrollParentRect = scrollParent.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      console.log('activeElement', getFocusableElement(elementRef.current!));

      console.log('left', scrollParent.scrollLeft, elementRect.bottom, scrollParentRect.bottom);

      // Don't change focus if user focused on a different element like a `input` or the target
      // element isn't on at least halfway rendered on the screen.
      if (
        (elementRef.current && getFocusableElement(elementRef.current)) ||
        elementRect.top + elementRect.height / 2 < scrollParentRect.top ||
        elementRect.bottom - elementRect.height / 2 > scrollParentRect.bottom ||
        elementRect.left + elementRect.width / 2 < scrollParentRect.left ||
        elementRect.right - elementRect.width / 2 > scrollParentRect.right
      ) {
        console.log(
          'skipping focus change',
          elementRef.current && getFocusableElement(elementRef.current)
        );
        return;
      }
      console.log('focus change', element);
      changeFocus(element);
      elementRef.current = null;
    };
  }, [model.state.returnFocusRef, model.state.targetRef, visible, onMouseDown, onMouseUp]);

  return {};
});
