import React from 'react';
import {useIsRTL, useMount, createHook} from '@workday/canvas-kit-react/common';

import {CursorModel, useCursorNavigation} from './useCursorModel';

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
 * representing a list item.
 *
 * @see https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex
 */
export const useRovingFocus = createHook(
  ({state, events}: CursorModel<unknown>, ref, elemProps: {name?: string} = {}) => {
    // Tracks when this element has focus. If this item is removed while still focused, we have to
    // inform the model to move the cursor to the next item.
    const focusRef = React.useRef(false);
    const getIdRef = React.useRef(state.getId);

    // Create a ref out of state. We don't want to watch state on unmount, so we use a ref to get the
    // current value at the time of unmounting. Otherwise, `state.items` would be a cached value of an
    // empty array
    const stateRef = React.useRef(state);
    stateRef.current = state;

    const keyDownRef = React.useRef(false);
    const isRTL = useIsRTL();

    const navigation = useCursorNavigation(state);

    React.useEffect(() => {
      if (keyDownRef.current) {
        const item = navigation.getItem(state.cursorId);
        document.querySelector<HTMLElement>(`#${state.id}-${getIdRef.current(item)}`)?.focus();

        keyDownRef.current = false;
      }
    }, [state.cursorId, state.id, navigation]);

    useMount(() => {
      return () => {
        if (focusRef.current && stateRef.current.items.length) {
          // Unmount is called before state updates are flushed and we'll never get the last state
          // update, so use `getNext` instead of `getItem`
          const item = navigation.getNext(stateRef.current.cursorId);

          // If we call `focus` right away, there seems to be a timing issue where the focus handler
          // never gets called. Waiting until just before a frame is rendered seems to ensure the
          // focus handler is called correctly. Removing will make deleting multiple items fail.
          requestAnimationFrame(() => {
            document.querySelector<HTMLElement>(`#${state.id}-${state.getId(item)}`)?.focus();
          });
        }
      };
    });

    return {
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
      onFocus() {
        focusRef.current = true;
      },
      onBlur() {
        focusRef.current = false;
      },
      id: `${state.id}-${elemProps.name}`,
      tabIndex: !state.cursorId
        ? 0 // cursor isn't known yet, be safe and mark this as focusable
        : !!elemProps.name && state.cursorId === elemProps.name
        ? 0 // A name is known and cursor is here
        : -1, // A name is known an cursor is somewhere else
      ref,
    };
  }
);
