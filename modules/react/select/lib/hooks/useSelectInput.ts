import React from 'react';
import {
  composeHooks,
  createElemPropsHook,
  useForkRef,
  useLocalRef,
  useResizeObserver,
} from '@workday/canvas-kit-react/common';
import {useComboboxInput, useKeyboardTypeAhead} from '@workday/canvas-kit-react/combobox';
import {useSelectModel} from './useSelectModel';

/**
 * `useSelectInput` extends {@link useComboboxInput useComboboxInput}  and adds type ahead functionality and select specific [keyboard support](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).
 */
export const useSelectInput = composeHooks(
  createElemPropsHook(useSelectModel)((model, ref, elemProps: {keySofar?: string} = {}) => {
    const {localRef, elementRef} = useLocalRef<HTMLInputElement>(
      useForkRef(ref as React.Ref<HTMLElement>, ref)
    );

    useResizeObserver({
      ref: localRef,
      onResize: data => {
        if (model.state.visibility === 'visible') {
          const calculatedWidth = data.width ? data.width + 42 + 8 : 0;
          model.events.setWidth(calculatedWidth);
        }
      },
    });

    return {
      onKeyDown(event: React.KeyboardEvent) {
        // Prevent the keys from being enter in the input
        event.preventDefault();

        // Select should open if Spacebar is typed and nothing has been typed AND the menu is hidden
        if (
          event.key === 'Spacebar' ||
          (event.key === ' ' && model.state.visibility === 'hidden' && elemProps?.keySofar === '')
        ) {
          model.events.show();
        }
        // if the menu is visible
        if (
          (event.key === 'Spacebar' || event.key === ' ') &&
          model.state.visibility === 'visible'
        ) {
          // If key so far is empty, they're done typing, select the item where the cursor is located and hide the menu
          if (elemProps?.keySofar === '') {
            model.events.select({
              id: model.state.cursorId,
            });
            model.events.hide();
          }
        }
      },
      ref: elementRef,
      autoComplete: 'off',
    } as const;
  }),
  useKeyboardTypeAhead,
  useComboboxInput
);
