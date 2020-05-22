import React from 'react';

import {PopupStack} from '@workday/canvas-kit-labs-react-popup-stack';

export const useOutsideClick = <E extends HTMLElement>(
  ref: React.RefObject<E>,
  onClose: () => void
) => {
  const onClick = (event: MouseEvent) => {
    if (
      PopupStack.isTopmost(ref.current!, 'ephemeral') &&
      !ref.current!.contains(event.target as HTMLElement)
    ) {
      onClose();
    }
  };
  React.useLayoutEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  });
};
