import React from 'react';
import {mergeCallbacks} from '@workday/canvas-kit-react-common';

import {MenuModel, getItem} from './useMenuModel';

export const orientationKeyMap = {
  horizontal: {
    ArrowLeft: 'previous',
    Left: 'previous',
    ArrowRight: 'next',
    Right: 'next',
    Home: 'first',
    End: 'last',
  },
  vertical: {
    ArrowUp: 'previous',
    Up: 'previous',
    ArrowDown: 'next',
    Down: 'next',
    Home: 'first',
    End: 'last',
  },
} as const;

export const useMenu = (
  {state, events}: MenuModel,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  // keep track of intentional focus changes. Without this state tracking, all changes to
  // `state.currentId` or `state.items` would result in focus changes. That is definitely not what
  // we want.
  const focusRef = React.useRef(false);

  React.useEffect(() => {
    if (focusRef.current) {
      const item = getItem(state.currentId, state.items);
      item.ref.current?.focus();

      focusRef.current = false;
    }
  }, [state.currentId, state.items]);

  return mergeCallbacks(elemProps, {
    onKeyDown(event: React.KeyboardEvent) {
      Object.keys(orientationKeyMap[state.orientation]).forEach(
        (key: keyof typeof orientationKeyMap[typeof state.orientation]) => {
          if (event.key === key) {
            const event = orientationKeyMap[state.orientation][key];
            focusRef.current = true;
            events[event]?.();
          }
        }
      );
    },
  });
};
