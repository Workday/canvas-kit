import React from 'react';

/**
 * This hook will hide all sibling elements from assistive technology. Very useful for modal
 * dialogs. This will set `aria-hidden` for sibling elements of the provided `stackRef` element and
 * restore the previous `aria-hidden` to each component when the component is unmounted. For
 * example, if added to a Modal component, all children of `document.body` will have an
 * `aria-hidden=true` applied _except_ for the provided `stackRef` element (the Modal). This will
 * effectively hide all content outside the Modal from assistive technology including Web Rotor for
 * VoiceOver for example.
 *
 * **Note**: The provided `stackRef` element should be root element of your component so that other
 * elements _outside_ your component will be hidden rather than elements _inside_ your component
 *
 * @param stackRef The ref element where siblings will be hidden.
 */
export const useAssistiveHideSiblings = <E extends HTMLElement>(stackRef: React.RefObject<E>) => {
  React.useEffect(() => {
    const siblings = [
      ...((stackRef.current?.parentElement?.children as any) as HTMLElement[]),
    ].filter(el => el !== stackRef.current);
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
  }, [stackRef]);
};
