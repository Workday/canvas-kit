import React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  composeHooks,
  ExtractProps,
  createContainer,
  createModelHook,
  dispatchInputEvent,
  useForkRef,
} from '@workday/canvas-kit-react/common';
import {
  Combobox,
  useComboboxModel,
  useComboboxOpenWithArrowKeys,
} from '@workday/canvas-kit-react/combobox';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '../../icon';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {ComboboxProps} from '../../combobox/lib/Combobox';
import {useListModel} from '../../collection/lib/useListModel';
import {
  useListRenderItems,
  useListActiveDescendant,
  useListKeyboardHandler,
} from '@workday/canvas-kit-react/collection';

import {usePopupTarget} from '@workday/canvas-kit-react/popup';

// const useSelectInput = composeHooks(
//   createElemPropsHook(useComboboxModel)((model, ref) => {
// const keySofar = React.useRef('');
// const timer = React.useRef<ReturnType<typeof setTimeout>>();

// React.useLayoutEffect(() => {
//   // If there is no selected item and items exists we want to select the first item in the array
//   // A select should always have a value selected, by default it should be the first item
//   if (model.state.selectedIds.length === 0 && model.state.items.length > 0) {
//     model.events.goTo({id: model.state.items[0].id});
//     model.events.select({id: model.state.items[0].id});
//   } else {
//     // If the user wants an items selected by default by passing `initialSelectedId` we select that item
//     if (model.state.selectedIds.length > 0) {
//       const selectedItem = model.state.items.findIndex(
//         item => item.id === model.state.selectedIds[0]
//       );
//       model.events.goTo({id: model.state.items[selectedItem].id});
//       model.events.select({id: model.state.items[selectedItem].id});
//     }
//   }

//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

//     // Reset after each keystroke to support type ahead
//     const startClearKeysSoFarTimer = () => {
//       if (timer.current) {
//         clearTimeout(timer.current);
//       }
//       timer.current = setTimeout(() => {
//         keySofar.current = '';
//       }, 500);
//     };

//     // based on the the key typed, this will try and find an index in the array where it matches the string
//     // so if a user types `de` it will try and find an index in the array whose id matches `de` like denver
//     const getIndexByStartString = (
//       startIndex: number,
//       startString: string,
//       endIndex: number = model.state.items.length,
//       ignoreDisabled: boolean = true
//     ): number => {
//       for (let i = startIndex; i < endIndex; i++) {
//         const label = model.state.items[i].id.toLowerCase();

//         if (label.indexOf(startString.toLowerCase()) === 0) {
//           if (!ignoreDisabled || (ignoreDisabled && !model.state.items[i].value.disabled)) {
//             return i;
//           }
//         }
//       }

//       return -1;
//     };

//     const handleKeyboardTypeAhead = (key: string, numOptions: number) => {
//       // returns the index at which the cursor is located
//       const cursorFocusedIndex = model.state.items.findIndex(
//         item => item.id.toLowerCase() === model.state.cursorId
//       );

//       // If the starting point is beyond the list of options, reset it
//       // to the beginning of the list
//       let start = keySofar.current.length === 0 ? cursorFocusedIndex + 1 : cursorFocusedIndex;

//       start = start === numOptions ? 0 : start;

//       // Keeps track of the current key types and adds to it
//       // if you type `de` vs `d` for denver
//       keySofar.current += key;
//       startClearKeysSoFarTimer();

//       // First, look for a match from start to end
//       let matchIndex;
//       matchIndex = getIndexByStartString(start, keySofar.current);

//       // If a match isn't found between start and end, wrap the search
//       // around and search again from the beginning (0) to start
//       if (matchIndex === -1) {
//         matchIndex = getIndexByStartString(0, keySofar.current, start);
//       }

//       // A match was found...
//       if (matchIndex > -1) {
//         if (model.state.visibility === 'hidden') {
//           // If the menu is closed, fire the change event
//           // go to that item and select based on its id
//           model.events.goTo({id: model.state.items[matchIndex].id});
//           // model.events.select({id: model.state.items[matchIndex].id});
//         } else {
//           // Otherwise the menu is visible (or at least partially visible);
//           // focus the matched option and select it

//           model.events.goTo({id: model.state.items[matchIndex].id});
//           // model.events.select({id: model.state.items[matchIndex].id});
//         }
//       }
//     };
//     // console.log(model);
//     return {
//       onClick(event: React.MouseEvent) {
//         // When you click the menu and there's a selected item
//         // scroll to that selected item
//         if (model.state.selectedIds.length > 0) {
//           const foundIndex = model.state.items.findIndex(item => item.id === model.state.cursorId);
//           model.state.UNSTABLE_virtual.scrollToIndex(foundIndex);
//         }
//       },
//       onChange(event: React.SyntheticEvent<HTMLInputElement>) {
//         // prevent typing in the input
//         event.preventDefault();
//       },

//       onKeyDown(event: React.KeyboardEvent) {
//         event.preventDefault();

//         if (
//           event.key === 'Enter' ||
//           (event.key === 'Spacebar' && model.state.visibility === 'hidden')
//         ) {
//           //show the menu when enter is typed
//           model.events.show();
//         }
//         if (event.key.length === 1 && event.key.match(/\S/)) {
//           handleKeyboardTypeAhead(event.key, model.state.items.length);
//         }
//         if (event.key === 'Escape') {
//           if (model.state.selectedIds.length > 0) {
//             const foundIndex = model.state.items.findIndex(
//               item => item.id === model.state.cursorId
//             );
//             model.events.select({id: model.state.items[foundIndex].id});
//           }
//         }
//         if (event.key === 'ArrowDown') {
//           // if (model.state.visibility === 'hidden') {
//           //   const foundIndex = model.state.items.findIndex(
//           //     item => item.id === model.state.cursorId
//           //   );
//           //   console.log(foundIndex);
//           //   model.events.goTo({id: model.state.items[foundIndex].id});
//           //   model.events.select({id: model.state.items[foundIndex].id});
//           // }
//         }
//         // model.events.go;
//         if (model.state.visibility === 'visible') {
//           // console.log('item', model.state.selectedIds);
//           // model.event.goTo()
//         }
//       },
//       value: model.state.value,

//       style: {caretColor: 'transparent', cursor: 'default'},
//     };
//   })
// );
const count = 0;
export const useSelectInput = composeHooks(
  createElemPropsHook(useComboboxModel)((model, ref) => {
    const elementRef = useForkRef(ref, model.state.inputRef);

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

    React.useEffect(() => {
      if (model.state.cursorId && model.state.visibility === 'visible') {
        const item = model.navigation.getItem(model.state.cursorId, model);
        if (model.state.isVirtualized && item) {
          model.state.UNSTABLE_virtual.scrollToIndex(item.index);
        } else {
          const listboxId = model.state.inputRef.current?.getAttribute('aria-controls');
          if (listboxId) {
            const menuItem = document.querySelector(
              `[id="${listboxId}"] [data-id="${model.state.cursorId}"]`
            );
            if (menuItem) {
              menuItem.scrollIntoView({block: 'nearest'});
            }
          }
        }
      }

      //   // we only want to run this effect if the cursor changes and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.cursorId]);

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
          // model.events.select({id: model.state.items[matchIndex].id});
        }
      }
    };

    return {
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
        if (event.key === 'Escape') {
          if (model.state.selectedIds.length > 0) {
            const foundIndex = model.state.items.findIndex(
              item => item.id === model.state.selectedIds[0]
            );
            model.events.select({id: model.state.items[foundIndex].id});
          }
        }
        if (event.key === 'ArrowDown') {
          return;
          if (model.state.visibility === 'hidden') {
            console.log('still hidden', model.events);

            const foundIndex = model.state.items.findIndex(
              item => item.id === model.state.cursorId
            );
            // console.log(foundIndex);
            model.events.goTo({id: model.state.items[foundIndex].id});
            model.events.select({id: model.state.items[foundIndex].id});
          }
        }

        if (event.key === 'Enter' && !event.metaKey && model.state.visibility === 'visible') {
          const element = document.querySelector(`[data-id="${model.state.cursorId}"]`);
          if (element && element?.getAttribute('aria-disabled') !== 'true') {
            model.events.select({id: model.state.cursorId});
            if (model.state.mode === 'single') {
              model.events.hide(event);
            }
          }

          // We don't want to submit forms while the combobox is open
          event.preventDefault();
        }

        // const next = model.navigation.getNext();
      },
      onBlur(event: React.FocusEvent) {
        model.events.hide(event);
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
          const foundIndex = model.state.items.findIndex(item => item.id === model.state.cursorId);
          model.state.UNSTABLE_virtual.scrollToIndex(foundIndex);
        }
      },
      value: model.state.value,
      role: 'combobox',
      'aria-haspopup': true,
      'aria-expanded': model.state.visibility === 'visible',
      'aria-autocomplete': 'list',
      'aria-controls': `${model.state.id}-list`,
      id: model.state.id,
      ref: elementRef,
      style: {caretColor: 'transparent', cursor: 'default'},
    } as const;
  }),
  useComboboxOpenWithArrowKeys,
  useListActiveDescendant,
  useListKeyboardHandler,
  usePopupTarget
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

export const useSelectModel = createModelHook({
  defaultConfig: useComboboxModel.defaultConfig,
  requiredConfig: useComboboxModel.requiredConfig,
})(config => {
  // console.log('config');
  const model = useComboboxModel();
  // console.log('model>>>>>>>>>>>', model.state.visibility);
  const state = {
    ...model.state,
    listVisibility: model.state.visibility,
  };
  return {state, events: model.events};
});

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
  return (
    <Combobox model={model} visibility={model.state.visibility}>
      {children}
    </Combobox>
  );
});

// const {navigation, ...rest} = useComboboxModel.defaultConfig;
