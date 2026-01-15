import React from 'react';
import {createElemPropsHook, slugify} from '@workday/canvas-kit-react/common';

import {getCursor, isCursor} from './useCursorListModel';
import {keyboardEventToCursorEvents} from './keyUtils';
import {focusOnCurrentCursor} from './focusOnCurrentCursor';
import {useListModel} from './useListModel';

/**
 * This elemProps hook is used for cursor navigation by using [Roving
 * Tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex). Only a single item in the
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
export const useListItemRovingFocus = createElemPropsHook(useListModel)(
  (model, _ref, elemProps: {'data-id'?: string} = {}) => {
    // Create a ref out of state. We don't want to watch state on unmount, so we use a ref to get the
    // current value at the time of unmounting. Otherwise, `state.items` would be a cached value of an
    // empty array
    const stateRef = React.useRef(model.state);
    stateRef.current = model.state;

    const keyElementRef = React.useRef<HTMLElement | null>(null);

    React.useEffect(() => {
      // If the cursor change was triggered by this hook, we should change focus
      if (keyElementRef.current) {
        focusOnCurrentCursor(model, getCursor(model.state), keyElementRef.current).then(() => {
          // Reset key element since focus was successful
          keyElementRef.current = null;
        });
      }
      // we only want to run this effect if the cursor changes and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.cursorId]);

    // We need to change this - maybe add an option to select first one with a keyboard action
    // Roving focus must always have a focus stop to function correctly
    React.useEffect(() => {
      if (!model.state.cursorId && model.state.items.length) {
        model.events.goTo({id: model.state.items[0].id});
      }
    }, [model.state.cursorId, model.state.items, model.events]);

    return {
      onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
        const handled = keyboardEventToCursorEvents(event, model);
        if (handled) {
          event.preventDefault();
          keyElementRef.current = event.currentTarget;
        }
      },
      onClick() {
        model.events.goTo({id: elemProps['data-id']!});
      },
      'data-focus-id': slugify(`${model.state.id}-${elemProps['data-id']}`),
      tabIndex: !model.state.cursorId
        ? 0 // cursor isn't known yet, be safe and mark this as focusable
        : !!elemProps['data-id'] && isCursor(model.state, elemProps['data-id'])
        ? 0 // A name is known and cursor is here
        : -1, // A name is known an cursor is somewhere else
    };
  }
);
