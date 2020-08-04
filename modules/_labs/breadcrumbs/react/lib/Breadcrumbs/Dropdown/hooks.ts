import {useLayoutEffect} from 'react';

export const useFocusActiveItemElement = <E extends HTMLElement>(
  activeDropdownItemRef: React.RefObject<E>
) => {
  useLayoutEffect(() => {
    if (activeDropdownItemRef.current) {
      return activeDropdownItemRef.current.focus();
    }
  });
};
