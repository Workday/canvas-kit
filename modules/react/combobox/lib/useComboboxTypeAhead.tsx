import React from 'react';

import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useComboboxModel} from './useComboboxModel';
import {useComboboxInput} from './ComboboxInput';

export const useComboboxTypeAhead = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    const keySofar = React.useRef('');
    const timer = React.useRef<ReturnType<typeof setTimeout>>();

    React.useLayoutEffect(() => {
      if (model.state.visibility !== 'visible' && !model.state.selectedIds.length) {
        model.events.goTo({id: model.state.items[0].id});
      }
      if (model.state.visibility !== 'visible') {
        keySofar.current = '';
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.visibility]);

    // Create an array of strings from model items
    const normalizedOptions = model.state.items.map(item => {
      return item.id.toLowerCase();
    });

    const startClearKeysSoFarTimer = () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        keySofar.current = '';
      }, 500);
    };

    const getIndexByStartString = (
      startIndex: number,
      startString: string,
      endIndex: number = normalizedOptions.length,
      ignoreDisabled: boolean = true
    ): number => {
      for (let i = startIndex; i < endIndex; i++) {
        const label = model.state.items[i].id.toLowerCase();
        if (label.indexOf(startString.toLowerCase()) === 0) {
          if (!ignoreDisabled || ignoreDisabled) {
            return i;
          }
        }
      }

      return -1;
    };

    const handleKeyboardTypeAhead = (key: string, numOptions: number) => {
      const cursorFocusedIndex = model.state.items.findIndex(
        item => item.id.toLowerCase() === model.state.cursorId.toLowerCase()
      );
      // if()
      let start = keySofar.current.length === 0 ? cursorFocusedIndex + 1 : cursorFocusedIndex;

      start = start === numOptions ? 0 : start;

      keySofar.current += key;
      startClearKeysSoFarTimer();

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
          model.events.select({id: model.state.items[matchIndex].id});
        } else {
          // Otherwise the menu is visible (or at least partially visible);
          // focus the matched option
          model.events.goTo({id: model.state.items[matchIndex].id});
        }
      }
    };

    return {
      onChange(event: React.SyntheticEvent<HTMLInputElement>) {
        event.preventDefault();
      },
      onKeyDown(event: React.KeyboardEvent) {
        event.preventDefault();
        if (event.key.length === 1 && event.key.match(/\S/)) {
          handleKeyboardTypeAhead(event.key, model.state.items.length);
        }
      },
      style: {caretColor: 'transparent', cursor: 'default'},
    };
  }),

  useComboboxInput
);
