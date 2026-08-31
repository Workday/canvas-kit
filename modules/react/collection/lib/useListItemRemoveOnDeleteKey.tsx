import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {focusOnCurrentCursor} from './focusOnCurrentCursor';
import {listItemRemove} from './listItemRemove';
import {useSelectionListModel} from './useSelectionListModel';

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
export const useListItemRemoveOnDeleteKey = createElemPropsHook(useSelectionListModel)(model => {
  return {
    onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        const id = event.currentTarget.dataset.id || '';
        const nextId = listItemRemove(id, model);
        model.events.remove({id, nextId, event});
        if (nextId) {
          // use an animation frame to wait for any other model changes that may happen
          requestAnimationFrame(() => {
            focusOnCurrentCursor(model, nextId, event.currentTarget);
          });
        }
      }
    },
  };
});
