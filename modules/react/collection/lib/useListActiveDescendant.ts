import {createElemPropsHook, slugify} from '@workday/canvas-kit-react/common';

import {useCursorListModel} from './useCursorListModel';

/**
 * This elemProps hook is used for cursor navigation by using [Active
 * Descendant](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant).
 * `aria-activedescendant` tells assistive technology which element has "focus" within the component
 * while this single element maintains focus.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useListActiveDescendant, // adds `aria-activedescendant` support
 *   useListItemRegister
 * );
```
 */
export const useListActiveDescendant = createElemPropsHook(useCursorListModel)(model => {
  return {
    'aria-activedescendant': model.state.cursorId
      ? slugify(
          `${model.state.id}-${
            typeof model.state.cursorId === 'string'
              ? model.state.cursorId
              : model.state.cursorId.join('-')
          }`
        )
      : undefined,
  };
});
