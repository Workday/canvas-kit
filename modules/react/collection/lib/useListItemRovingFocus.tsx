import React from 'react';
import {useIsRTL, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useCursorListModel} from './useCursorListModel';
import {keyboardEventToCursorEvents, orientationKeyMap} from './keyUtils';

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
  (model, ref, elemProps: {'data-id'?: string} = {}) => {
    const getIdRef = React.useRef(model.getId);

    // Create a ref out of state. We don't want to watch state on unmount, so we use a ref to get the
    // current value at the time of unmounting. Otherwise, `state.items` would be a cached value of an
    // empty array
    const stateRef = React.useRef(model.state);
    stateRef.current = model.state;

    const keyDownRef = React.useRef(false);
    const isRTL = useIsRTL();

    React.useEffect(() => {
      if (keyDownRef.current) {
        const item = model.navigation.getItem(model.state.cursorId, model);
        if (model.state.isVirtualized) {
          model.state.UNSTABLE_virtual.scrollToIndex(item.index);
        }
        requestAnimationFrame(() => {
          document
            .querySelector<HTMLElement>(
              `[data-focus-id="${`${model.state.id}-${getIdRef.current(item)}`}"]`
            )
            ?.focus();
        });

        keyDownRef.current = false;
      }
      // we only want to run this effect if the cursor changes and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.cursorId]);

    return {
      onKeyDown(event: React.KeyboardEvent) {
        if (event.key in orientationKeyMap[model.state.orientation]) {
          keyDownRef.current = true;
          event.preventDefault(); // Prevent default on any matching keys
        }
        keyboardEventToCursorEvents(event, model, isRTL);
      },
      onClick() {
        model.events.goTo({id: elemProps['data-id']!});
      },
      'data-focus-id': `${model.state.id}-${elemProps['data-id']}`,
      tabIndex: !model.state.cursorId
        ? 0 // cursor isn't known yet, be safe and mark this as focusable
        : !!elemProps['data-id'] && model.state.cursorId === elemProps['data-id']
        ? 0 // A name is known and cursor is here
        : -1, // A name is known an cursor is somewhere else
      ref,
    };
  }
);
