import React from 'react';
import {
  composeHooks,
  createElemPropsHook,
  useLocalRef,
  useResizeObserver,
} from '@workday/canvas-kit-react/common';
import {getCursor} from '@workday/canvas-kit-react/collection';
import {
  useComboboxInput,
  useComboboxInputConstrained,
  useComboboxKeyboardTypeAhead,
  useComboboxMoveCursorToSelected,
  useComboboxResetCursorToSelected,
} from '@workday/canvas-kit-react/combobox';
import {useSelectModel} from './useSelectModel';

/**
 * `useSelectInput` extends {@link useComboboxInput useComboboxInput}  and {@link useComboboxKeyboardTypeAhead useComboboxKeyboardTypeAhead} and adds type ahead functionality and Select-specific [keyboard support](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).
 */
export const useSelectInput = composeHooks(
  createElemPropsHook(useSelectModel)(
    (model, ref, elemProps: {keySoFar?: string; placeholder?: string; value?: string} = {}) => {
      const {elementRef, localRef} = useLocalRef(ref as React.Ref<HTMLInputElement>);

      useResizeObserver({
        ref: localRef,
        onResize: data => {
          if (model.state.visibility === 'visible') {
            // Width of the Input + 2px border + 8px padding
            const calculatedWidth = data.width ? data.width + 42 + 8 : 0;
            model.events.setWidth(calculatedWidth);
          }
        },
      });

      // This effect is a copy of what is in useComboboxInput. In this case, we need access to `textInputRef` instead of `model.state.inputRef`
      // since it points to the visual input and not the hidden input. This allows scroll to index to work
      React.useEffect(() => {
        if (model.state.cursorId && model.state.visibility === 'visible') {
          const item = model.navigation.getItem(getCursor(model.state), model);
          if (model.state.isVirtualized && item) {
            model.state.UNSTABLE_virtual.scrollToIndex(item.index);
          } else {
            const listboxId = localRef.current?.getAttribute('aria-controls');
            if (listboxId) {
              const menuItem = document.querySelector(
                `[id="${listboxId}"] [data-id="${getCursor(model.state)}"]`
              );
              if (menuItem) {
                requestAnimationFrame(() => {
                  menuItem.scrollIntoView({block: 'nearest'});
                });
              }
            }
          }
        }

        // we only want to run this effect if the cursor, visibility and selectedIds change and not any other time
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [model.state.cursorId, model.state.selectedIds, model.state.visibility]);

      return {
        onKeyDown(event: React.KeyboardEvent) {
          // Prevent the keys from being enter in the input
          if (event.key !== 'Tab') {
            event.preventDefault();
          }

          // Select should open if Spacebar is typed and nothing has been typed AND the menu is hidden
          if (
            event.key === 'Spacebar' ||
            (event.key === ' ' && model.state.visibility === 'hidden' && elemProps?.keySoFar === '')
          ) {
            model.events.show();
          }
          // if the menu is visible
          if (
            (event.key === 'Spacebar' || event.key === ' ') &&
            model.state.visibility === 'visible'
          ) {
            // If key so far is empty, they're done typing, select the item where the cursor is located and hide the menu
            if (elemProps?.keySoFar === '') {
              model.events.select({
                id: getCursor(model.state),
              });
              model.events.hide();
            }
          }
        },
        autoComplete: 'off',
        keySoFar: null,
        ref: elementRef,
      };
    }
  ),
  useComboboxKeyboardTypeAhead,
  useComboboxResetCursorToSelected,
  useComboboxMoveCursorToSelected,
  useComboboxInputConstrained,
  useComboboxInput
);
