import React from 'react';
import {useIsRTL, createHook} from '@workday/canvas-kit-react/common';

import {CursorModel} from './useCursorModel';

export const orientationKeyMap = {
  horizontal: {
    ArrowLeft: 'goToPrevious',
    Left: 'goToPrevious',
    ArrowRight: 'goToNext',
    Right: 'goToNext',
    Home: 'goToFirst',
    End: 'goToLast',
    PageDown: 'goToNextPage',
    PageUp: 'goToPreviousPage',
  },
  vertical: {
    ArrowUp: 'goToPrevious',
    Up: 'goToPrevious',
    ArrowDown: 'goToNext',
    Down: 'goToNext',
    Home: 'goToFirst',
    End: 'goToLast',
    PageDown: 'goToNextPage',
    PageUp: 'goToPreviousPage',
  },
} as const;

const rightToLeftMap = {
  ArrowLeft: 'ArrowRight',
  Left: 'Right',
  ArrowRight: 'ArrowLeft',
  Right: 'Left',
  Home: 'Home',
  End: 'End',
  PageDown: 'PageDown',
  PageUp: 'PageUp',
} as const;

const gridKeyMap = {
  ...orientationKeyMap.horizontal,
  Home: 'goToFirstOfRow',
  End: 'goToLastOfRow',
  ArrowUp: 'goToPreviousRow',
  Up: 'goToPreviousRow',
  ArrowDown: 'goToNextRow',
  Down: 'goToNextRow',
} as const;

// const ctrlKeyMap = {
//   Home: 'goToFirst',
//   End: 'goToLast',
// } as const;

const keys = <T extends object>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];
// const hasOwnKey = <T extends object>(obj: T, key: any): key is keyof T => obj.hasOwnProperty(key);

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

    // const object = {
    //   foo: 'bar',
    //   bar: 'baz',
    // } as const;

    // Object.keys(object).forEach(key => {
    //   if (hasOwnKey(object, key)) {
    //     key; //?
    //     console.log(object[key]);
    //   }
    // });

    return {
      onKeyDown(event: React.KeyboardEvent) {
        if (event.ctrlKey) {
          // for (const key in Object.keys(ctrlKeyMap)) {
          //   if (hasOwnKey(ctrlKeyMap, key)) {
          //     key; //?
          //     const temp = ctrlKeyMap[key]; //?
          //     keyDownRef.current = true;
          //     events[ctrlKeyMap[key]]?.();
          //     return;
          //   }
          // }
          // keys(ctrlKeyMap).forEach(key => {
          //   keyDownRef.current = true;
          //   events[ctrlKeyMap[key]]?.();
          //   return;
          // });
        }
        keys(state.columnCount > 0 ? gridKeyMap : orientationKeyMap[state.orientation]).forEach(
          key => {
            if (isRTL ? event.key === rightToLeftMap[key] : event.key === key) {
              const eventName =
                state.columnCount > 0 ? gridKeyMap[key] : orientationKeyMap[state.orientation][key];
              keyDownRef.current = true;
              if (events[eventName]) {
                events[eventName]?.();
                event.preventDefault();
              }
            }
          }
        );
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
