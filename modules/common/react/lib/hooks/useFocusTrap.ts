import tabTrappingKey from 'focus-trap-js';
import {useDocumentListener} from './useDocumentListener';

/**
 * Set a focus trap around a container. Focus is automatically moved to the first focusable
 * element in the trap and returned when the trap is released. The provided `firstFocusableEl`
 * Ref or function determines which element that is. If the `firstFocusableEl` is not provided,
 * the first focusable element will be automatically determined.
 * @param containerRef A React Ref of the containing element. This must be a Ref object to avoid stale references
 * @param firstFocusableEl A React Ref or a function returning an HTMLElement
 */
export const useFocusTrap = (
  containerRef: React.RefObject<HTMLElement | null>,
  firstFocusableEl: React.RefObject<HTMLElement | null> | (() => HTMLElement | null) = () =>
    containerRef.current && containerRef.current.querySelectorAll<HTMLElement>('button,input')[0]
) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (containerRef.current) {
      tabTrappingKey(event, containerRef.current);
    }
  };

  useDocumentListener('keydown', handleKeydown);
  useTransferFocus(containerRef, firstFocusableEl);
};

import {useEffect} from 'react';

/**
 * This hook will transfer focus to the `firstFocusableEl` (or an element returned by a function)
 * on `useEffect` timing. When the owning component is destroyed, focus is returned to where it
 * was before the effect was called. This is useful for focus trapping where the hook will transfer
 * focus within the trap and return focus to the original element when the trap is released
 * @param containerRef
 * @param firstFocusableEl
 */
const useTransferFocus = (
  containerRef: React.RefObject<HTMLElement | null>,
  firstFocusableEl: React.RefObject<HTMLElement | null> | (() => HTMLElement | null)
) => {
  const initialFocusedEl =
    document.activeElement instanceof HTMLElement ? document.activeElement : null;

  useEffect(() => {
    if (containerRef.current) {
      console.log('firstFocusable', firstFocusableEl);
      const elem =
        typeof firstFocusableEl === 'function' ? firstFocusableEl() : firstFocusableEl.current;
      if (!elem) {
        throw new Error('No focusable element was found inside container');
      }
      elem.focus();
    }
    return () => {
      if (initialFocusedEl) {
        initialFocusedEl.focus();
      }
    };
  }, [containerRef, firstFocusableEl]);
};
