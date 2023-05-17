import React from 'react';
import {useIsRTL, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useCursorListModel} from './useCursorListModel';

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

const ctrlKeyMap = {
  Home: 'goToFirst',
  End: 'goToLast',
} as const;

const keys = <T extends object>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];
const hasOwnKey = <T extends object>(obj: T, key: any): key is keyof T => obj.hasOwnProperty(key);

/**
 * This elemProps hook is used for cursor navigation by using [Roving
 * Tabindex](https://w3c.github.io/aria-practices/#kbd_roving_tabindex). Only a single item in the
 * collection has a tab stop. Pressing an arrow key moves the tab stop to a different item in the
 * corresponding direction. See the [Roving Tabindex](#roving-tabindex) example. This elemProps hook
 * should be applied to an `*.Item` component.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useListItemRovingFocus, // adds the roving tabindex support
 *   useListItemRegister
 * );
```
 */
export const useListItemRovingFocus = createElemPropsHook(useCursorListModel)(
  ({state, events, navigation}, ref, elemProps: {'data-id'?: string} = {}) => {
    // Tracks when this element has focus. If this item is removed while still focused, we have to
    // inform the model to move the cursor to the next item.
    const focusRef = React.useRef(false);

    // Create a ref out of state. We don't want to watch state on unmount, so we use a ref to get the
    // current value at the time of unmounting. Otherwise, `state.items` would be a cached value of an
    // empty array
    const stateRef = React.useRef(state);
    stateRef.current = state;

    const keyElementRef = React.useRef<Element | null>(null);
    const isRTL = useIsRTL();

    React.useEffect(() => {
      if (keyElementRef.current) {
        const item = navigation.getItem(state.cursorId, {state});
        if (state.isVirtualized) {
          state.UNSTABLE_virtual.scrollToIndex(item.index);
        }
        requestAnimationFrame(() => {
          // Attempt to extract the ID from the DOM element. This fixes issues where the server and client
          // do not agree on a generated ID
          const clientId = keyElementRef.current?.getAttribute('data-focus-id')?.split('-')[0];

          [clientId, state.id].forEach(id => {
            document.querySelector<HTMLElement>(`[data-focus-id="${`${id}-${item.id}`}"]`)?.focus();
          });

          keyElementRef.current = null;
        });
      }
      // we only want to run this effect if the cursor changes and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.cursorId]);

    return {
      onKeyDown(event: React.KeyboardEvent) {
        // Test ctrl key first
        if (event.ctrlKey) {
          for (const key in ctrlKeyMap) {
            if (hasOwnKey(ctrlKeyMap, key)) {
              if (event.key === key) {
                keyElementRef.current = event.currentTarget;
                events[ctrlKeyMap[key]]?.();
                event.preventDefault();
                return;
              }
            }
          }
        }
        // Try regular keys
        keys(state.columnCount > 0 ? gridKeyMap : orientationKeyMap[state.orientation]).forEach(
          key => {
            if (isRTL ? event.key === rightToLeftMap[key] : event.key === key) {
              const eventName =
                state.columnCount > 0 ? gridKeyMap[key] : orientationKeyMap[state.orientation][key];
              keyElementRef.current = event.currentTarget;
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
      onClick() {
        events.goTo({id: elemProps['data-id']!});
      },
      'data-focus-id': `${state.id}-${elemProps['data-id']}`,
      tabIndex: !state.cursorId
        ? 0 // cursor isn't known yet, be safe and mark this as focusable
        : !!elemProps['data-id'] && state.cursorId === elemProps['data-id']
        ? 0 // A name is known and cursor is here
        : -1, // A name is known an cursor is somewhere else
      ref,
    };
  }
);
