import React from 'react';
import {useIsRTL, createHook} from '@workday/canvas-kit-react/common';

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

const gridKeyMap = {
  ...orientationKeyMap.horizontal,
  ArrowUp: 'goToPreviousRow',
  Up: 'goToPreviousRow',
  ArrowDown: 'goToNextRow',
  Down: 'goToNextRow',
};

/**
 * Handles the roving focus behavior of a Cursor model. It should be added to the element
 * representing a list item.
 *
 * @see https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex
 */
export const useRovingFocus = createHook(
  ({state, events, getId, navigation}: CursorModel, ref, elemProps: {name?: string} = {}) => {
    // Tracks when this element has focus. If this item is removed while still focused, we have to
    // inform the model to move the cursor to the next item.
    const focusRef = React.useRef(false);
    const getIdRef = React.useRef(getId);

    // Create a ref out of state. We don't want to watch state on unmount, so we use a ref to get the
    // current value at the time of unmounting. Otherwise, `state.items` would be a cached value of an
    // empty array
    const stateRef = React.useRef(state);
    stateRef.current = state;

    const keyDownRef = React.useRef(false);
    const isRTL = useIsRTL();

    React.useEffect(() => {
      if (keyDownRef.current) {
        const item = navigation.getItem(state.cursorId, {state, getId});
        document
          .querySelector<HTMLElement>(`[id="${state.id}-${getIdRef.current(item)}"]`)
          ?.focus();

        keyDownRef.current = false;
      }
      // we only want to run this effect if the cursor changes and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.cursorId]);

    return {
      onKeyDown(event: React.KeyboardEvent) {
        (Object.keys(
          state.columnCount > 0 ? gridKeyMap : orientationKeyMap[state.orientation]
        ) as (keyof typeof orientationKeyMap[typeof state.orientation])[]).forEach(key => {
          if (isRTL ? event.key === rightToLeftMap[key] : event.key === key) {
            const event =
              state.columnCount > 0 ? gridKeyMap[key] : orientationKeyMap[state.orientation][key];
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
