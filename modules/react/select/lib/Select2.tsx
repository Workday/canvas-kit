import React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  composeHooks,
  ExtractProps,
  createContainer,
  createModelHook,
  dispatchInputEvent,
} from '@workday/canvas-kit-react/common';
import {Combobox, useComboboxInput, useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '../../icon';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {ComboboxProps} from '../../combobox/lib/Combobox';

import {
  createNavigationManager,
  wrappingNavigationManager,
} from '@workday/canvas-kit-react/collection';

import {ComboboxMenuItemProps} from '../../combobox/lib/ComboboxMenuItem';
import {getWrappingOffsetItem} from '../../collection/lib/useCursorListModel';

export const useSelectModel = createModelHook({
  defaultConfig: {
    ...useComboboxModel.defaultConfig,
  },
  requiredConfig: {
    ...useComboboxModel.requiredConfig,
  },
  contextOverride: useComboboxModel.Context,
})(config => {
  const model: ReturnType<typeof useComboboxModel> = useComboboxModel({
    ...config,
    navigation: createNavigationManager({
      ...wrappingNavigationManager,
      getPrevious: (index, state) => {
        const cursorFocusedIndex: number = model.state.items.findIndex(
          (item: {id: string}) => item.id === model.state.cursorId
        );
        console.log(model.state.visibility);
        if (model.state.visibility === 'hidden') {
          return cursorFocusedIndex;
        } else {
          getWrappingOffsetItem(1);
          return wrappingNavigationManager.getPrevious(index, model);
        }
      },
      getNext: (index, state) => {
        const cursorFocusedIndex = model.state.items.findIndex(
          (item: {id: string}) => item.id === model.state.cursorId
        );
        console.log(model.state.visibility);
        if (model.state.visibility === 'hidden') {
          return cursorFocusedIndex;
        } else {
          getWrappingOffsetItem(1);
          return wrappingNavigationManager.getNext(index, model);
        }
      },
    }),
  });
  return {
    ...model,
  };
});

export const useSelectInput = composeHooks(
  useComboboxInput,
  createElemPropsHook(useSelectModel)((model, ref) => {
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
            (item: {id: string}) => item.id === model.state.selectedIds[0]
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
            (ignoreDisabled && model.state.items[i].value.disabled === false) ||
            (ignoreDisabled && !model.state.nonInteractiveIds.includes(model.state.items[i].id))
          ) {
            return i;
          }
        }
      }

      return -1;
    };

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
      // console.log(keySofar.current);

      // First, look for a match from start to end
      let matchIndex;
      // console.log('key so far', keySofar.current);
      matchIndex = getIndexByStartString(start, keySofar.current);
      // console.log('matchIndex', matchIndex);

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
          // focus the matched option and select it
          model.events.goTo({id: model.state.items[matchIndex].id});
        }
      }
    };

    return {
      onKeyDown(event: React.KeyboardEvent) {
        const foundIndex = model.state.items.findIndex(
          (item: {id: string}) => item.id === model.state.selectedIds[0]
        );

        event.preventDefault();
        // Select should open if Enter, ArrowUp, ArrowDown and Spacebar is typed
        if (
          event.key === 'Enter' ||
          event.key === 'Spacebar' ||
          event.key === 'ArrowUp' ||
          event.key === 'ArrowDown' ||
          (event.key === ' ' && model.state.visibility === 'hidden' && keySofar.current === '')
        ) {
          model.events.setWidth(event.currentTarget.clientWidth);
          //show the menu when enter is typed
          model.events.show();
        }

        // Call type ahead excluding backspace
        if (event.key.length === 1 && event.key.match(/\S/)) {
          handleKeyboardTypeAhead(event.key, model.state.items.length);
        }

        // If Escape is typed, it should not select where the cursor was, instead what was previously selected
        if (event.key === 'Escape') {
          if (model.state.selectedIds.length > 0) {
            console.log('event targer', event.currentTarget);
            console.log('value', model.state.items[foundIndex].id);
            console.log('in escape');
            dispatchInputEvent(
              event.currentTarget as HTMLElement,
              model.state.items[foundIndex].id
            );
            model.events.select({id: model.state.items[foundIndex].id});
          }
        }

        // If the dropdown is NOT visible and ArrowUp, ArrowDown, Enter and Spacebar is typed, when the dropdown opens
        // it should go to the current selected item in the dropdown.
        if (
          event.key === 'ArrowUp' ||
          event.key === 'ArrowDown' ||
          event.key === 'Spacebar' ||
          event.key === ' ' ||
          event.key === 'Enter'
        ) {
          if (model.state.visibility === 'hidden') {
            model.events.goTo({id: model.state.items[foundIndex].id});

            if (model.state.isVirtualized && model.state.selectedIds.length > 0) {
              model.state.UNSTABLE_virtual.scrollToIndex(foundIndex);
            }
          }
        }

        // If the dropdown is visible and Enter is typed, it should select that item
        // where the cursor is located in the list and close the dropdown
        if (event.key === 'Enter' && !event.metaKey && model.state.visibility === 'visible') {
          const element = document.querySelector(`[data-id="${model.state.cursorId}"]`);
          if (element && element?.getAttribute('aria-disabled') !== 'true') {
            model.events.select({id: model.state.cursorId});
            if (model.state.mode === 'single') {
              model.events.hide(event);
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
      onBlur(event: React.FocusEvent) {
        // model.events.hide(event);
      },
      onChange(event: React.SyntheticEvent<HTMLInputElement>) {
        // prevent typing in the input
        event.preventDefault();
      },
      onClick(event: React.MouseEvent) {
        if (model.state.visibility === 'hidden') {
          model.events.setWidth(event.currentTarget.clientWidth);
        }
        // When you click the menu and there's a selected item
        // scroll to that selected item
        if (model.state.selectedIds.length > 0) {
          const foundIndex = model.state.items.findIndex(
            (item: {id: string}) => item.id === model.state.selectedIds[0]
          );
          model.events.goTo({id: model.state.items[foundIndex].id});
          model.state.UNSTABLE_virtual.scrollToIndex(foundIndex);
        }
      },
      style: {caretColor: 'transparent', cursor: 'default'},
    } as const;
  })
);

export const SelectInput = createSubcomponent(TextInput)({
  modelHook: useSelectModel,
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

export const useSelectMenuItem = createElemPropsHook(useSelectModel)(({state}) => {
  return {
    role: 'option',
  };
});

export const SelectItem = createSubcomponent('li')({
  modelHook: useComboboxModel,
  elemPropsHook: useSelectMenuItem,
})<ComboboxMenuItemProps>(({children, ...elemProps}, Element) => {
  return <Combobox.Menu.Item {...elemProps}>{children}</Combobox.Menu.Item>;
});

export const SelectBase = createContainer()({
  displayName: 'Select2',
  modelHook: useSelectModel,
  subComponents: {
    Input: SelectInput,
    Popup: Combobox.Menu.Popper,
    Card: Combobox.Menu.Card,
    List: Combobox.Menu.List,
    Item: SelectItem,
  },
})<ComboboxProps>(({children}, _, model) => {
  return <Combobox model={model}>{children}</Combobox>;
});
