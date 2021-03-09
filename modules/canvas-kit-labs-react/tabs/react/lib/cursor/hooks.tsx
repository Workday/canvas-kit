import React from 'react';
import {mergeProps, useIsRTL} from '@workday/canvas-kit-react/common';

import {CursorModel, getItem} from './useCursorModel';

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

const rightToLeftMap = {
  ArrowLeft: 'ArrowRight',
  Left: 'Right',
  ArrowRight: 'ArrowLeft',
  Right: 'Left',
  Home: 'End',
  End: 'Home',
} as const;

/**
 * Handles the roving focus behavior of a Cursor model. It does not handle the tabIndex. Use
 * `useRovingTabIndex` for that functionality.
 * @see https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex
 */
export const useRovingFocus = ({state, events}: CursorModel, elemProps = {}) => {
  // keep track of intentional focus changes. Without this state tracking, all changes to
  // `state.cursorId` or `state.items` would result in focus changes. That is definitely not what
  // we want.
  const focusRef = React.useRef(false);
  const isRTL = useIsRTL();

  React.useEffect(() => {
    if (focusRef.current) {
      const item = getItem(state.cursorId, state.items);
      item.ref.current?.focus();

      focusRef.current = false;
    }
  }, [state.cursorId, state.items]);

  return mergeProps(
    {
      onKeyDown(event: React.KeyboardEvent) {
        (Object.keys(
          orientationKeyMap[state.orientation]
        ) as (keyof typeof orientationKeyMap[typeof state.orientation])[]).forEach(key => {
          if (isRTL ? event.key === rightToLeftMap[key] : event.key === key) {
            const event = orientationKeyMap[state.orientation][key];
            focusRef.current = true;
            events[event]?.();
          }
        });
      },
    },
    elemProps
  );
};
