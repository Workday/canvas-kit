import React from 'react';
import {PopupModel} from './usePopupModel';

/**
 * This hook will hide all sibling elements from assistive technology. Very useful for modal
 * dialogs. This will set `aria-hidden` for sibling elements of the provided PopupModel's
 * `state.stackRef` element and restore the previous `aria-hidden` to each component when the
 * component is unmounted. For example, if added to a Modal component, all children of
 * `document.body` will have an `aria-hidden=true` applied _except_ for the provided `stackRef`
 * element (the Modal). This will effectively hide all content outside the Modal from assistive
 * technology including Web Rotor for VoiceOver for example.
 *
 * This should be used on popup elements that need to hide content (i.e. Modals).
 */
export const useAssistiveHideSiblings = (model: PopupModel, elemProps = {}) => {
  const visible = model.state.visibility !== 'hidden';

  React.useEffect(() => {
    if (!visible) {
      return;
    }

    const siblings = [
      ...((model.state.stackRef.current?.parentElement?.children as any) as HTMLElement[]),
    ].filter(el => el !== model.state.stackRef.current);
    const prevAriaHidden = siblings.map(el => el.getAttribute('aria-hidden'));
    siblings.forEach(el => {
      el.setAttribute('aria-hidden', 'true');
    });

    return () => {
      siblings.forEach((el, index) => {
        const prev = prevAriaHidden[index];
        if (prev) {
          el.setAttribute('aria-hidden', prev);
        } else {
          el.removeAttribute('aria-hidden');
        }
      });
    };
  }, [model.state.stackRef, visible]);

  return elemProps;
};
