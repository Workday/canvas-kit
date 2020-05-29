import React from 'react';

/**
 * Hides all siblings from assistive technology. Very useful for modal dialogs.
 * This will set `aria-hidden` for siblings of the provided ref and restore
 * the previous `aria-hidden` to each component when the component is unmounted.
 * @param ref React.Ref of the element
 */
export const useAssistiveHideSiblings = <E extends HTMLElement>(ref: React.RefObject<E>) => {
  React.useEffect(() => {
    const siblings = [...((ref.current?.parentElement?.children as any) as HTMLElement[])].filter(
      el => el !== ref.current
    );
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
  }, [ref]);
};
