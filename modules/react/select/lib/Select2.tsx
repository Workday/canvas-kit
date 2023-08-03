import React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  composeHooks,
  ExtractProps,
  createContainer,
  createModelHook,
} from '@workday/canvas-kit-react/common';
import {Combobox, useComboboxModel, useComboboxInput} from '@workday/canvas-kit-react/combobox';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '../../icon';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {ComboboxProps} from '../../combobox/lib/Combobox';
import {useListModel} from '../../collection/lib/useListModel';
import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {useMenuModel} from '../../menu';

const useSelectInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    const keySofar = React.useRef('');
    const timer = React.useRef<ReturnType<typeof setTimeout>>();

    React.useLayoutEffect(() => {
      // If there is no selected item and items exists we want to select the first item in the array
      // A select should always have a value selected, by default it should be the first item
      if (model.state.selectedIds.length === 0 && model.state.items.length > 0) {
        model.events.goTo({id: model.state.items[0].id});
        model.events.select({id: model.state.items[0].id});
      } else {
        // If the user wants an items selected by default by passing `initialSelectedId` we select that item
        if (model.state.selectedIds.length > 0) {
          const selectedItem = model.state.items.findIndex(
            item => item.id === model.state.selectedIds[0]
          );
          model.events.goTo({id: model.state.items[selectedItem].id});
          model.events.select({id: model.state.items[selectedItem].id});
        }
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Reset after each keystroke to support type ahead
    const startClearKeysSoFarTimer = () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        keySofar.current = '';
      }, 500);
    };

    // based on the the key typed, this will try and find an index in the array where it matches the string
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
          if (!ignoreDisabled || (ignoreDisabled && !model.state.items[i].value.disabled)) {
            return i;
          }
        }
      }

      return -1;
    };

    const handleKeyboardTypeAhead = (key: string, numOptions: number) => {
      // returns the index at which the cursor is located
      const cursorFocusedIndex = model.state.items.findIndex(
        item => item.id.toLowerCase() === model.state.cursorId
      );

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
          // Otherwise the menu is visible (or at least partially visible);
          // focus the matched option and select it

          model.events.goTo({id: model.state.items[matchIndex].id});
          model.events.select({id: model.state.items[matchIndex].id});
        }
      }
    };

    return {
      onClick(event: React.MouseEvent) {
        // When you click the menu and there's a selected item
        // scroll to that selected item
        if (model.state.selectedIds.length > 0) {
          const foundIndex = model.state.items.findIndex(item => item.id === model.state.cursorId);
          model.state.UNSTABLE_virtual.scrollToIndex(foundIndex);
        }
      },
      onChange(event: React.SyntheticEvent<HTMLInputElement>) {
        // prevent typing in the input
        event.preventDefault();
      },

      onKeyDown(event: React.KeyboardEvent) {
        event.preventDefault();

        if (
          event.key === 'Enter' ||
          (event.key === 'Spacebar' && model.state.visibility === 'hidden')
        ) {
          //show the menu when enter is typed
          model.events.show();
        }
        if (event.key.length === 1 && event.key.match(/\S/)) {
          handleKeyboardTypeAhead(event.key, model.state.items.length);
        }
        // model.events.go;
        if (model.state.visibility === 'visible') {
          // console.log('item', model.state.selectedIds);
          // model.event.goTo()
        }
      },

      style: {caretColor: 'transparent', cursor: 'default'},
    };
  }),
  useComboboxInput
);

// check for value property and handle onChange

export const SelectInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useSelectInput,
})<ExtractProps<typeof TextInput>>(
  ({placeholder = 'Choose and Option', ...props}, Element, model) => {
    return (
      <InputGroup>
        <InputGroup.Input as={Element} placeholder={placeholder} {...props}></InputGroup.Input>
        <InputGroup.InnerEnd>
          <SystemIcon icon={caretDownSmallIcon} />
        </InputGroup.InnerEnd>
      </InputGroup>
    );
  }
);

export const SelectBase = createContainer()({
  displayName: 'Select2',
  modelHook: useComboboxModel,
  subComponents: {
    Input: SelectInput,
    Popup: Combobox.Menu.Popper,
    Card: Combobox.Menu.Card,
    List: Combobox.Menu.List,
    Item: Combobox.Menu.Item,
  },
})<ComboboxProps>(({children}, _, model) => {
  return <Combobox model={model}>{useListRenderItems(model, children)}</Combobox>;
});

// export const useSelectModel = createModelHook({
//   defaultConfig: useComboboxModel.defaultConfig,
//   requiredConfig: useComboboxModel.requiredConfig,
// })(config => {
//   const model = useMenuModel();

//   console.log(model);

//   return model;
// });
