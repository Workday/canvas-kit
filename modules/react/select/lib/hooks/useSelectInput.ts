import React from 'react';
import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useComboboxInput, useScrollToIndexOnClick} from '@workday/canvas-kit-react/combobox';
import {useSelectModel} from './useSelectModel';

/**
 * `useSelectInput` extends {@link useComboboxInput useComboboxInput}  and adds type ahead functionality and select specific [keyboard support](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).
 */
export const useSelectInput = composeHooks(
  useComboboxInput,
  useScrollToIndexOnClick,
  createElemPropsHook(useSelectModel)((model, ref) => {
    const keySofar = React.useRef('');
    const timer = React.useRef<ReturnType<typeof setTimeout>>();

    // Reset after each keystroke to support type ahead
    const startClearKeysSoFarTimer = () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        keySofar.current = '';
      }, 500);
    };

    // Based on the the key typed, this will try and find an index in the array where it matches the string
    // so if a user types `de` it will try and find an index in the array whose id matches `de` like denver
    const getIndexByStartString = (
      startIndex: number,
      startString: string,
      endIndex: number = model.state.items.length,
      ignoreDisabled: boolean = true
    ): number => {
      for (let i = startIndex; i < endIndex; i++) {
        const label = model.state.items[i].id.toLowerCase();

        if (label.indexOf(startString.toLowerCase()) === 0) {
          if (
            !ignoreDisabled ||
            (ignoreDisabled && !model.state.nonInteractiveIds.includes(model.state.items[i].id))
          ) {
            return i;
          }
        }
      }
      return -1;
    };
    // just use the index you dummy squid
    const currentItem = model.navigation.getItem(model.state.cursorId, model);
    const cursorFocusedIndex = model.state.items.findIndex(item => item.id === currentItem.id);

    const handleKeyboardTypeAhead = (key: string, numOptions: number) => {
      // If the starting point is beyond the list of options, reset it
      // to the beginning of the list
      let start = keySofar.current.length === 0 ? cursorFocusedIndex + 1 : cursorFocusedIndex;

      start = start === numOptions ? 0 : start;

      // Keeps track of the current key types and adds to it
      // if you type `de` vs `d` for denver
      keySofar.current += key;
      startClearKeysSoFarTimer();

      // First, look for a match from start to end
      let matchIndex;
      matchIndex = getIndexByStartString(start, keySofar.current);

      // If a match isn't found between start and end, wrap the search
      // around and search again from the beginning (0) to start
      if (matchIndex === -1) {
        matchIndex = getIndexByStartString(0, keySofar.current, start);
      }

      // A match was found...
      if (matchIndex > -1) {
        if (model.state.visibility === 'hidden') {
          // If the menu is closed, fire the change event
          // go to that item and select based on its id
          model.events.goTo({id: model.state.items[matchIndex].id});
          model.events.select({id: model.state.items[matchIndex].id});
        } else {
          // Otherwise the menu is visible
          // move the cursor to that matched item
          model.events.goTo({id: model.state.items[matchIndex].id});
        }
      }
    };

    return {
      onKeyDown(event: React.KeyboardEvent) {
        const foundIndex = model.state.items.findIndex((item: {id: string}) => {
          if (model.state.selectedIds.length > 0) {
            return item.id === model.state.selectedIds[0];
          } else {
            return item.id === model.state.cursorId;
          }
        });

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

        // Call type ahead excluding backspace
        if (event.key.length === 1 && event.key.match(/\S/)) {
          handleKeyboardTypeAhead(event.key, model.state.items.length);
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
            handleKeyboardTypeAhead(' ', model.state.items.length);
          } else {
            model.events.select({id: model.state.items[foundIndex].id});
            model.events.hide();
          }
        }

        if (
          (event.key === 'Spacebar' || event.key === ' ') &&
          model.state.visibility === 'hidden' &&
          keySofar.current !== ''
        ) {
          // If the user is in the middle of typing a string, treat
          // space key as type-ahead rather than option selection
          if (keySofar.current !== '') {
            handleKeyboardTypeAhead(' ', model.state.items.length);
          }
        }
      },
      autoComplete: 'off',
    } as const;
  })
);
