import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {useLocalRef, useCanvasThemeToCssVars, isElementRTL} from '@workday/canvas-kit-react/common';
import {ThemeContext, Theme} from '@emotion/react';

/**
 * **Note:** If you're using {@link Popper}, you do not need to use this hook directly.
 *
 * This hook will add the `stackRef` element to the {@link PopupStack} on mount and remove on unmount. If
 * you use `Popper`, the popper `stackRef` is automatically added/removed from the `PopupStack`. The
 * `PopupStack` is required for proper z-index values to ensure Popups are rendered correct. It is
 * also required for global listeners like click outside or escape key closing a popup. Without the
 * `PopupStack`, all popups will close rather than only the topmost one.
 *
 * If `ref` is provided, it will be the same as `stackRef`. If `ref` is not provided`,
 * this hook will create one and return it.
 *
 * This hook should be used by all stacked UIs unless using the `Popper` component.
 *
 * ```tsx
 * const model = usePopupModel();
 * usePopupStack(model.state.stackRef, model.state.targetRef);
 *
 * // add some popup functionality
 * useCloseOnOutsideClick(model);
 * useCloseOnEscape(model);
 *
 * return (
 *   <>
 *     <button ref={model.state.targetRef}>Open Popup</button>
 *     {model.state.visibility !== 'hidden'
 *       ? ReactDOM.createPortal(<div>Popup Contents</div>, model.state.stackRef.current)
 *       : null}
 *   </>
 * );
 * ```
 *
 * @param ref This ref will be managed by the PopupStack and should not be managed by React. Do
 * not apply this stackRef to a React element. Doing so will result in an error. Instead, use this
 * `stackRef` directly with `ReactDOM.createPortal(<YourComponent>, stackRef.current!)`. This is
 * definitely strange for React code, but is necessary for the PopupStack to remain framework
 * agnostic and flexible to integrate with existing `PopupStack` systems. If not provided, this hook
 * will create one and return that `stackRef` instead.
 * @param target Usually the trigger of a popup. This will fix `bringToTop` and should be provided
 * by all ephemeral-type popups (like Tooltips, Select menus, etc). It will also add in clickOutside
 * detection.
 */
export const usePopupStack = <E extends HTMLElement>(
  ref?: React.Ref<E>,
  target?: HTMLElement | React.RefObject<HTMLElement>
): React.RefObject<HTMLElement> => {
  const {elementRef, localRef} = useLocalRef(ref);
  const theme = React.useContext(ThemeContext as React.Context<Theme>);
  const {style} = useCanvasThemeToCssVars(theme, {});
  const firstLoadRef = React.useRef(true); // React 19 can call a useState more than once, so we need to track if we've already created a container

  // useState function input ensures we only create a container once.
  const [popupRef] = React.useState(() => {
    if (firstLoadRef.current) {
      const container = PopupStack.createContainer();
      elementRef(container as E);
      firstLoadRef.current = false;
      return container;
    }
    return localRef.current;
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
    const element = localRef.current!;

    PopupStack.add({element: element, owner: targetEl});
    return () => {
      PopupStack.remove(element);
    };
  }, [localRef, target, popupRef]);

  // The direction will properly follow the theme via React context, but portals lose the `dir`
  // hierarchy, so we'll add it back here. When there's no target (e.g. consumer doesn't use
  // Popup.Target), the container is appended to body and loses the source tree's dir. Use
  // document.activeElement (the trigger is often still focused when the effect runs) so we
  // inherit from the correct hierarchy; otherwise fall back to document.body.
  React.useLayoutEffect(() => {
    const targetEl = target ? ('current' in target ? target.current : target) : undefined;
    let elementToCheck: Element | undefined = targetEl ?? undefined;
    if (elementToCheck == null && typeof document !== 'undefined') {
      const active = document.activeElement;
      const container = localRef.current;
      // Prefer the focused element (e.g. the trigger) only if it's outside our container,
      // so we inherit from the app tree that opened the popup.
      elementToCheck = active && container && !container.contains(active) ? active : document.body;
    }
    if (elementToCheck) {
      const isRTL = isElementRTL(elementToCheck);
      if (isRTL) {
        localRef.current?.setAttribute('dir', 'rtl');
      } else {
        localRef.current?.setAttribute('dir', 'ltr');
      }
    }
  }, [localRef, target]);

  React.useLayoutEffect(() => {
    const element = localRef.current;
    const keys = Object.keys(style);
    if (element && theme) {
      for (const key of keys) {
        // @ts-ignore
        element.style.setProperty(key, style[key]);
      }
      return () => {
        for (const key of keys) {
          element.style.removeProperty(key);
        }
      };
    }
    // No cleanup is needed if element or theme is not set, so return undefined (no effect)
    return undefined;
  }, [localRef, style, theme]);

  return localRef;
};
