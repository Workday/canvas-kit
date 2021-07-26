import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {useLocalRef, useIsRTL} from '@workday/canvas-kit-react/common';

/**
 * This hook should not be used directly. Use the `Popper` component instead.
 *
 * This hook will add the `stackRef` element to the Popup stack on mount and remove on unmount. If
 * you use `Popper`, the popper `stackRef` is automatically added/removed from the Popup stack. The
 * Popup stack is required for proper z-index values to ensure Popups are rendered correct. It is
 * also required for global listeners like click outside or escape key closing a popup. Without the
 * Popup stack, all popups will close rather than only the topmost one.
 *
 * If `forwardRef` is provided, it will be the same as `stackRef`. If `forwardRef` is not provided`,
 * this hook will create one and return it.
 *
 * This hook should be used by all stacked UIs unless using the `Popper` component.
 *
 * @param forwardRef This ref will be managed by the PopupStack and should not be managed by React. Do
 * not apply this stackRef to a React element. Doing so will result in an error. Instead, use this
 * `stackRef` directly with `ReactDOM.createPortal(<YourComponent>, stackRef.current!)`. This is
 * definitely strange for React code, but is necessary for the PopupStack to remain framework
 * agnostic and flexible to integrate with existing popup stack systems. If not provided, this hook
 * will create one and return that `stackRef` instead.
 *
 * @param target Usually the trigger of a popup. This will fix `bringToTop` and should be provided
 * by all ephemeral-type popups (like Tooltips, Select menus, etc). It will also add in clickOutside
 * detection.
 *
 * @example
 * // must be part of a component life-cycle. Use `Popup.Popper` otherwise.
 * const model = usePopupModel({visibility: 'visible'})
 * usePopupStack(model.state.stackRef)
 *
 * // add some popup functionality
 * useCloseOnOutsideClick(model)
 * useCloseOnEscape(model)
 */
export const usePopupStack = <E extends HTMLElement>(
  ref?: React.Ref<E>,
  target?: HTMLElement | React.RefObject<HTMLElement>
): React.RefObject<HTMLElement> => {
  const {elementRef, localRef} = useLocalRef(ref);
  const isRTL = useIsRTL();

  // useState function input ensures we only create a container once.
  const [popupRef] = React.useState(() => {
    const container = PopupStack.createContainer();
    elementRef(container as E);
    return container;
  });
  // We useLayoutEffect to ensure proper timing of registration of the element to the popup stack.
  // Without this, the timing is unpredictable when mixed with other frameworks. Other frameworks
  // should also register as soon as the element is available
  React.useLayoutEffect(() => {
    if (popupRef !== localRef.current) {
      throw Error(
        `The 'ref' passed to usePopupStack should not be applied to a React element. This will cause a runtime error where the PopupStack and React compete for the element. Instead use ReactDOM.createPortal(<YourComponent />, ref.current)`
      );
    }
    const targetEl = target
      ? 'current' in target
        ? target.current || undefined
        : target
      : undefined;
    PopupStack.add({element: localRef.current!, owner: targetEl});
    const element = localRef.current!;
    return () => {
      PopupStack.remove(element);
    };
  }, [localRef, target, popupRef]);

  // The direction will properly follow the theme via React context, but portals lose the `dir`
  // hierarchy, so we'll add it back here.
  React.useLayoutEffect(() => {
    if (isRTL) {
      localRef.current?.setAttribute('dir', 'rtl');
    } else {
      localRef.current?.removeAttribute('dir');
    }
  }, [localRef, isRTL]);

  return localRef;
};
