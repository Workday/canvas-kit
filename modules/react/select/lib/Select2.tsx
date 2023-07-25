import React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  composeHooks,
  ExtractProps,
  createContainer,
} from '@workday/canvas-kit-react/common';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {
  Combobox,
  useComboboxModel,
  useComboboxLoader,
  useComboboxInput,
} from '@workday/canvas-kit-react/combobox';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {ComboboxInput} from '../../combobox/lib/ComboboxInput';
import {SystemIcon} from '../../icon';
import {caretDownSmallIcon, caretTopSmallIcon} from '@workday/canvas-system-icons-web';
import {ComboboxProps} from '../../combobox/lib/Combobox';

// const colors = ['Red', 'Blue', 'Purple', 'Green', 'Pink'];
// const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
// const options = Array(1000)
//   .fill('')
//   .map((_, index) => {
//     return `${colors[index % colors.length]} ${fruits[index % fruits.length]} ${index + 1}`;
//   });

// const useAutocompleteInput = composeHooks(
//   createElemPropsHook(useComboboxModel)(model => {
//     console.log('model', model);
//     return {
//       onKeyPress(event: React.KeyboardEvent) {
//         model.events.show(event);
//       },
//     };
//   }),
//   useComboboxInput
// );

// const AutoCompleteInput = createSubcomponent(TextInput)({
//   modelHook: useComboboxModel,
//   elemPropsHook: useAutocompleteInput,
// })<ExtractProps<typeof Combobox.Input, never>>((elemProps, Element) => {
//   return <Combobox.Input as={Element} {...elemProps} />;
// });

// export const Autocomplete = () => {
//   const {model, loader} = useComboboxLoader(
//     {
//       // You can start with any number that makes sense.
//       total: 0,

//       // Pick whatever number makes sense for your API
//       pageSize: 20,

//       // A load function that will be called by the loader. You must return a promise that returns
//       // an object like `{items: [], total: 0}`. The `items` will be merged into the loader's cache
//       async load({pageNumber, pageSize, filter}) {
//         return new Promise<LoadReturn<string>>(resolve => {
//           // simulate a server response by resolving after a period of time
//           setTimeout(() => {
//             // simulate paging and filtering based on pre-computed items
//             const start = (pageNumber - 1) * pageSize;
//             const end = start + pageSize;
//             const filteredItems = options.filter(item => {
//               if (filter === '' || typeof filter !== 'string') {
//                 return true;
//               }
//               return item.toLowerCase().includes(filter.toLowerCase());
//             });

//             const total = filteredItems.length;
//             const items = filteredItems.slice(start, end);

//             resolve({
//               items,
//               total,
//             });
//           }, 300);
//         });
//       },
//       onShow() {
//         // The `shouldLoad` cancels while the combobox menu is hidden, so let's load when it is
//         // visible
//         loader.load();
//       },
//     },
//     useComboboxModel
//   );

//   return (
//     <FormField orientation="horizontal" hasError isRequired>
//       <FormField.Label>Fruit</FormField.Label>
//       <Combobox model={model} onChange={event => console.log('input', event.currentTarget.value)}>
//         <InputGroup>
//           <InputGroup.Input as={FormField.Input.as(AutoCompleteInput)} />
//           <InputGroup.InnerEnd
//             pointerEvents="none"
//             style={{opacity: loader.isLoading ? 1 : 0, transition: 'opacity 100ms ease'}}
//             width={20}
//             data-loading={loader.isLoading}
//           >
//             <LoadingDots style={{display: 'flex', transform: 'scale(0.3)'}} />
//           </InputGroup.InnerEnd>
//           <InputGroup.InnerEnd>
//             <InputGroup.ClearButton data-testid="clear" />
//           </InputGroup.InnerEnd>
//         </InputGroup>
//         <Combobox.Menu.Popper>
//           <Combobox.Menu.Card>
//             {model.state.items.length === 0 && (
//               <StyledMenuItem as="span">No Results Found</StyledMenuItem>
//             )}
//             {model.state.items.length > 0 && (
//               <Combobox.Menu.List maxHeight={200}>
//                 {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
//               </Combobox.Menu.List>
//             )}
//           </Combobox.Menu.Card>
//         </Combobox.Menu.Popper>
//       </Combobox>
//     </FormField>
//   );
// };

const useSelectInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    const keySofar = React.useRef('');
    const timer = React.useRef();

    const [value, setValue] = React.useState('');
    const [visibility, setVisibility] = React.useState(false);
    React.useLayoutEffect(() => {
      if (model.state.visibility !== 'visible' && !model.state.selectedIds.length) {
        console.log(' in hereee');
        model.events.goTo({id: model.state.items[0].id});
      }
      if (model.state.visibility !== 'visible') {
        keySofar.current = '';
      }

      if (model.state.visibility === 'visible' && model.state.selectedIds.length) {
        const currentSelection = model.state.items.findIndex(
          item => item.id.toLowerCase() === model.state.selectedIds[0].toLowerCase()
        );
        model.events.goTo({id: model.state.items[currentSelection].id});
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.visibility]);
    console.log(!model.state.selectedIds.length);

    // Create an array of strings from model items
    const normalizedOptions = model.state.items.map(item => {
      return item.id.toLowerCase();
    });

    return {
      onChange(event: React.SyntheticEvent<HTMLInputElement>) {
        setValue((event.target as HTMLInputElement).value);
        console.log('value>>', value);
        const indexExists = normalizedOptions.indexOf(
          (event.target as HTMLInputElement).value.toLowerCase()
        );
        setVisibility(indexExists !== -1);
      },
      onKeyDown(event: React.KeyboardEvent) {
        // Keep track of current event key
        keySofar.current += event.key;

        console.warn('>>>', keySofar.current);
        let matchedIndex;
        // Find index of item based on the keys typed so far
        // if they type `co` use that to find `co` in the array of items
        matchedIndex = normalizedOptions.findIndex(item => {
          return (
            item.toLowerCase().slice(0, keySofar.current.length) === keySofar.current.toLowerCase()
          );
        });

        if (matchedIndex === -1) {
          keySofar.current = '';
        }
        if (matchedIndex > -1) {
          // Based on the matchedIndex, go to that item in the array
          model.events.goTo({id: model.state.items[matchedIndex].id});
        }
      },
      style: {
        caretColor: 'transparent',
        cursor: 'default',
        // color: model.state.selectedIds.length && visibility ? 'inherit' : 'transparent',
      },
    };
  }),

  useComboboxInput
);

// check for value property and handle onChange

export const SelectInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useSelectInput,
})((props, Element, model) => {
  return (
    <InputGroup>
      <InputGroup.Input as={Element} {...props}></InputGroup.Input>
      <InputGroup.InnerEnd>
        <SystemIcon icon={caretDownSmallIcon} />
      </InputGroup.InnerEnd>
    </InputGroup>
  );
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
  return <Combobox model={model}>{children}</Combobox>;
});
