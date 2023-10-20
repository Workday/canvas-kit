import React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

/**
 * `useComboboxKeyboardTypeAhead` handles type-ahead. It will try and find a matching item in the list. It also returns the keys types so far.
 * This hook is best used when composing hooks and in conjunction with `useComboboxInput`.
 *
 * ```tsx
 * // Example for a `Select` input
 * export const useSelectInput = composeHooks(
 * createElemPropsHook(useComboboxModel)((model, ref, elemProps: {keySofar?: string} = {}) => {
 *  return {
 *    onKeyDown(event: React.KeyboardEvent) {
 *     // onKeyDown logic ...
 *    },
 *  } as const;
 * }),
 * useComboboxKeyboardTypeAhead,
 * useComboboxInput
 * );
 * ```
 */
export const useComboboxKeyboardTypeAhead = createElemPropsHook(useComboboxModel)(model => {
  const keySofar = React.useRef('');
  const timer = React.useRef<ReturnType<typeof setTimeout>>();
  const [keyTypedSofar, setKeyTypedSofar] = React.useState(keySofar.current);

  const startClearKeysSoFarTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      keySofar.current = '';
      setKeyTypedSofar(keySofar.current);
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
      const label = model.state.items[i].textValue.toLowerCase();
      if (
        label.startsWith(startString.toLowerCase()) &&
        (!ignoreDisabled ||
          (ignoreDisabled && !model.state.nonInteractiveIds.includes(model.state.items[i].id)))
      ) {
        return i;
      }
    }
    return -1;
  };

  const currentItem = model.navigation.getItem(model.state.cursorId, model);
  const cursorFocusedIndex = currentItem.index;

  const handleKeyboardTypeAhead = (key: string, numOptions: number) => {
    // If the starting point is beyond the list of options, reset it
    // to the beginning of the list
    const startNumber = keySofar.current.length === 0 ? cursorFocusedIndex + 1 : cursorFocusedIndex;

    const start = startNumber === numOptions ? 0 : startNumber;

    // Keeps track of the current key types and adds to it
    // if you type `de` vs `d` for denver
    keySofar.current += key;
    setKeyTypedSofar(keySofar.current);
    startClearKeysSoFarTimer();

    // First, look for a match from start to end
    let matchIndex = getIndexByStartString(start, keySofar.current);
    getIndexByStartString(start, keySofar.current);

    // If a match isn't found between start and end, wrap the search
    // around and search again from the beginning (0) to start
    if (matchIndex === -1) {
      matchIndex = getIndexByStartString(0, keySofar.current, start);
    }

    // A match was found...
    if (matchIndex > -1) {
      model.events.goTo({id: model.state.items[matchIndex].id});
      if (model.state.visibility === 'hidden') {
        // If the menu is closed, fire the change event
        // go to that item and select based on its id
        model.events.select({id: model.state.items[matchIndex].id});
      }
    }
  };

  return {
    onKeyDown(event: React.KeyboardEvent) {
      // Call type ahead excluding backspace
      if (event.key.length === 1 && event.key.match(/\S/)) {
        handleKeyboardTypeAhead(event.key, model.state.items.length);
      }

      // If spacebar is typed
      if (
        (event.key === 'Spacebar' || event.key === ' ') &&
        model.state.visibility === 'visible' &&
        keySofar.current !== ''
      ) {
        // If the user is in the middle of typing a string, treat
        // space key as type-ahead rather than option selection
        handleKeyboardTypeAhead(' ', model.state.items.length);
      }

      if (
        (event.key === 'Spacebar' || event.key === ' ') &&
        model.state.visibility === 'hidden' &&
        keySofar.current !== ''
      ) {
        // If the user is in the middle of typing a string, treat
        // space key as type-ahead rather than option selection
        handleKeyboardTypeAhead(' ', model.state.items.length);
      }
    },
    keySofar: keyTypedSofar,
  };
});
