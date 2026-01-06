import React from 'react';
import {createElemPropsHook, slugify} from '@workday/canvas-kit-react/common';

import {getCursor, isCursor, useCursorListModel} from './useCursorListModel';
import {keyboardEventToCursorEvents} from './keyUtils';

// retry a function each frame so we don't rely on the timing mechanism of React's render cycle.
const retryEachFrame = (cb: () => boolean, iterations: number) => {
  if (cb() === false && iterations > 1) {
    requestAnimationFrame(() => retryEachFrame(cb, iterations - 1));
  }
};

/**
 * This elemProps hook is used when a menu item is expected to be removed. It will advance the cursor to
 * another item.
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
 * ```
 */
export const useListItemRemove = createElemPropsHook(useCursorListModel)(
  (model, _ref, elemProps: {'data-id'?: string} = {}) => {
    // Create a ref out of state. We don't want to watch state on unmount, so we use a ref to get the
    // current value at the time of unmounting. Otherwise, `state.items` would be a cached value of an
    // empty array
    const stateRef = React.useRef(model.state);
    stateRef.current = model.state;

    const keyElementRef = React.useRef<Element | null>(null);

    React.useEffect(() => {
      if (keyElementRef.current) {
        const item = model.navigation.getItem(getCursor(model.state), model);
        if (item) {
          if (model.state.isVirtualized) {
            model.state.UNSTABLE_virtual.scrollToIndex(item.index);
          }

          const selector = (id?: string) => {
            return document.querySelector<HTMLElement>(
              `[data-focus-id="${slugify(`${id}-${item.id}`)}"]`
            );
          };

          // In React concurrent mode, there could be several render attempts before the element we're
          // looking for could be available in the DOM
          retryEachFrame(() => {
            // Attempt to extract the ID from the DOM element. This fixes issues where the server and client
            // do not agree on a generated ID
            const clientId = keyElementRef.current?.getAttribute('data-focus-id')?.split('-')[0];
            const element = selector(clientId) || selector(model.state.id);

            element?.focus();
            if (element) {
              keyElementRef.current = null;
            }
            return !!element;
          }, 5); // 5 should be enough, right?!
        }
      }
      // we only want to run this effect if the cursor changes and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.cursorId]);

    // Roving focus must always have a focus stop to function correctly
    React.useEffect(() => {
      if (!model.state.cursorId && model.state.items.length) {
        model.events.goTo({id: model.state.items[0].id});
      }
    }, [model.state.cursorId, model.state.items, model.events]);

    return {
      onKeyDown(event: React.KeyboardEvent) {
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
