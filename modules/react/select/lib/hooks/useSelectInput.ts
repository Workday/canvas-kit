import React from 'react';
import {
  composeHooks,
  createElemPropsHook,
  useLocalRef,
  useResizeObserver,
  dispatchInputEvent,
} from '@workday/canvas-kit-react/common';
import {
  useComboboxInput,
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
    (model, ref, elemProps: {keySofar?: string; placeholder?: string} = {}) => {
      const {elementRef} = useLocalRef<HTMLInputElement>(ref as any);
      const textInputRef = React.useRef<HTMLInputElement>(null);

      // Update the text value of the input
      const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = model.navigation.getItem(event.target.value, model)?.textValue;
        const nativeInputValue = Object.getOwnPropertyDescriptor(
          Object.getPrototypeOf(textInputRef.current),
          'value'
        );
        if (nativeInputValue && nativeInputValue.set) {
          nativeInputValue.set.call(textInputRef.current, value);
        }
      };

      useResizeObserver({
        ref: textInputRef,
        onResize: data => {
          if (model.state.visibility === 'visible') {
            // Width of the Input + 2px border + 8px padding
            const calculatedWidth = data.width ? data.width + 42 + 8 : 0;
            model.events.setWidth(calculatedWidth);
          }
        },
      });
      // The intent is if items are loaded after the component is rendered, it will update the input with the value.
      // **Note: We might need to watch for other things or how often we should do this**
      React.useEffect(() => {
        if (
          model.state.inputRef.current &&
          model.state.items.length > 0 &&
          model.state.selectedIds[0]
        ) {
          const value = model.navigation.getItem(model.state.selectedIds[0], model).id;
          if (
            model.state.selectedIds[0] !== value &&
            model.state.inputRef.current.value !== value
          ) {
            // Programmatically dispatch an onChange once items are loaded. This account for when a consumer wants an initial selected item and they're loading them from a server.
            dispatchInputEvent(model.state.inputRef.current, value);
          }
        }
        if (!model.state.selectedIds[0] && textInputRef.current?.value) {
          dispatchInputEvent(textInputRef.current, '');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [model.state.inputRef, model.state.items.length]);

      // This effect is a copy of what is in useComboboxInput. In this case, we need access to `textInputRef` instead of `model.state.inputRef`
      // since it points to the visual input and not the hidden input. This allows scroll to index to work
      React.useEffect(() => {
        if (model.state.cursorId && model.state.visibility === 'visible') {
          const item = model.navigation.getItem(model.state.cursorId, model);
          if (model.state.isVirtualized && item) {
            model.state.UNSTABLE_virtual.scrollToIndex(item.index);
          } else {
            const listboxId = textInputRef.current?.getAttribute('aria-controls');
            if (listboxId) {
              const menuItem = document.querySelector(
                `[id="${listboxId}"] [data-id="${model.state.cursorId}"]`
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
        onChange: handleOnChange,
        autoComplete: 'off',
        // When the hidden input is focused, we want to show the focus/hover states of the input that sits below it.
        onFocus() {
          textInputRef.current?.focus();
        },
        textInputProps: {
          ref: textInputRef,
        },
        ref: elementRef,

        // Account for the case where an initial item is selected when the Select first renders
        defaultValue:
          model.state.selectedIds.length > 0 && model.state.items.length > 0
            ? model.navigation.getItem(model.state.selectedIds[0], model).textValue ||
              model.state.value
            : undefined,
      } as const;
    }
  ),
  useComboboxKeyboardTypeAhead,
  useComboboxResetCursorToSelected,
  useComboboxMoveCursorToSelected,
  useComboboxInput
);
