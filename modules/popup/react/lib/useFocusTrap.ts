import React from 'react';
import tabTrappingKey from 'focus-trap-js';

const useKeyDownListener = (handleKeydown: EventListenerOrEventListenerObject) => {
  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);
};

export const useFocusTrap = <E extends HTMLElement>(ref: React.RefObject<E>) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (ref.current) {
      tabTrappingKey(event, ref.current);
    }
  };

  useKeyDownListener(handleKeydown);
};
