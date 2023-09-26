import {useKeyboardTypeAhead} from './../../../combobox/lib/hooks/useKeyboardTypeAhead';
import React from 'react';
import {
  composeHooks,
  createElemPropsHook,
  useForkRef,
  useLocalRef,
  useResizeObserver,
} from '@workday/canvas-kit-react/common';
import {useComboboxInput} from '@workday/canvas-kit-react/combobox';
import {useSelectModel} from './useSelectModel';

/**
 * `useSelectInput` extends {@link useComboboxInput useComboboxInput}  and adds type ahead functionality and select specific [keyboard support](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).
 */
export const useSelectInput = composeHooks(
  useComboboxInput,
  useKeyboardTypeAhead,
  createElemPropsHook(useSelectModel)((model, ref) => {
    const keySofar = React.useRef('');

    const {localRef, elementRef} = useLocalRef<HTMLInputElement>(
      useForkRef(ref as React.Ref<HTMLElement>, ref)
    );

    useResizeObserver({
      ref: localRef,
      onResize: data => {
        if (model.state.visibility === 'visible') {
          const calculatedWidth = data.width ? data.width + 40 + 8 : 0;
          model.events.setWidth(calculatedWidth);
        }
      },
    });

    return {
      onKeyDown(event: React.KeyboardEvent) {
        const foundIndex = model.state.items.findIndex(
          (item: {id: string}) =>
            (model.state.selectedIds.length > 0 && item.id === model.state.selectedIds[0]) ||
            item.id === model.state.cursorId
        );

        // Prevent the keys from being enter in the input
        event.preventDefault();
        const keysToOpenSelect = ['Enter', 'Spacebar', 'ArrowUp', 'ArrowDown'];

        // Select should open if Enter, ArrowUp, ArrowDown and Spacebar is typed
        if (
          event.key === 'Spacebar' ||
          (event.key === ' ' && model.state.visibility === 'hidden' && keySofar.current === '')
        ) {
          //show the menu when enter is typed
          model.events.show();
        }

        // If the dropdown is NOT visible and ArrowUp, ArrowDown, Enter and Spacebar is typed, when the dropdown opens
        // it should go to the current selected item in the dropdown.
        if (keysToOpenSelect.includes(event.key) || event.key === ' ') {
          if (model.state.visibility === 'hidden') {
            model.events.goTo({id: model.state.items[foundIndex].id});

            if (model.state.selectedIds.length > 0) {
              model.state.UNSTABLE_virtual.scrollToIndex(foundIndex);
            }
          }
        }

        // If spacebar is typed
        if (
          (event.key === 'Spacebar' || event.key === ' ') &&
          model.state.visibility === 'visible'
        ) {
          const foundIndex = model.state.items.findIndex(
            (item: {id: string}) => item.id === model.state.cursorId
          );
          // If the user is in the middle of typing a string, treat
          // space key as type-ahead rather than option selection
          if (keySofar.current !== '') {
            // handleKeyboardTypeAhead(' ', model.state.items.length);
          } else {
            model.events.select({id: model.state.items[foundIndex].id});
            model.events.hide();
          }
        }
      },
      ref: elementRef,
      autoComplete: 'off',
    } as const;
  })
);
