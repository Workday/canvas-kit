import React from 'react';
import {mergeProps, useIsRTL, useMount} from '@workday/canvas-kit-react/common';

import {CursorModel, getItem, getNext} from './useCursorModel';

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
 * Handles the roving focus behavior of a Cursor model. It should be added to the element
 * representing the list. It does not handle the tabIndex.
 *
 * @see https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex
 */
export const useRovingFocusList = (model: CursorModel, elemProps = {}) => {
  const {state, events} = model;
  const stateRef = React.useRef(state);
  stateRef.current = state;
  // keep track of intentional focus changes. Without this state tracking, all changes to
  // `state.cursorId` or `state.items` would result in focus changes. That is definitely not what
  // we want.
  const keyDownRef = React.useRef(false);
  const isRTL = useIsRTL();

  React.useEffect(() => {
    if (keyDownRef.current) {
      const item = getItem(state.cursorId, state.items);
      item.ref.current?.focus();

      keyDownRef.current = false;
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
            keyDownRef.current = true;
            events[event]?.();
          }
        });
      },
    },
    elemProps
  );
};

/**
 * Handles the roving focus behavior of a Cursor model. It should be added to the element
 * representing a list item. It does not handle the tabIndex.
 *
 * @see https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex
 */
export const useRovingFocusItem = ({state}: CursorModel, elemProps = {}) => {
  // Tracks when this element has focus. If this item is removed while still focused, we have to
  // inform the model to move the cursor to the next item.
  const focusRef = React.useRef(false);

  // Create a ref out of state. We don't want to watch state on unmount, so we use a ref to get the
  // current value at the time of unmounting. Otherwise, `state.items` would be a cached value of an
  // empty array
  const stateRef = React.useRef(state);
  stateRef.current = state;

  useMount(() => {
    return () => {
      if (focusRef.current && stateRef.current.items.length) {
        // Unmount is called before state updates are flushed and we'll never get the last state
        // update, so use `getNext` instead of `getItem`
        const item = getNext(stateRef.current.cursorId, stateRef.current.items);

        // If we call `focus` right away, there seems to be a timing issue where the focus handler
        // never gets called. Waiting until just before a frame is rendered seems to ensure the
        // focus handler is called correctly. Removing will make deleting multiple items fail.
        requestAnimationFrame(() => {
          item.ref.current?.focus();
        });
      }
    };
  });

  return mergeProps(
    {
      onFocus(event: React.FocusEvent) {
        focusRef.current = true;
      },
      onBlur(event: React.FocusEvent) {
        focusRef.current = false;
      },
    },
    elemProps
  );
};
