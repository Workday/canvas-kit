import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {isCursor, useCursorListModel} from './useCursorListModel';

/**
 * This elemProps hook is used for cursor navigation by using [Active
 * Descendant](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant).
 * This hook should be applied to List Items, not the list (use {@link useListActiveDescendant} for the list).
 * This hook adds the focus class so that lists using `aria-activedescendant` get the correct
 * visual cue for visual users.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useListItemActiveDescendant, // adds `aria-activedescendant` support
 *   useListItemRegister
 * );
```
 */
export const useListItemActiveDescendant = createElemPropsHook(useCursorListModel)(
  (model, _ref, elemProps: {'data-id'?: string} = {}) => {
    const id = elemProps['data-id'] || '';
    return {
      className: isCursor(model.state, id) ? 'focus' : '',
    };
  }
);
