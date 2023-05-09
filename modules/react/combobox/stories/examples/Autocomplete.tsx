import React from 'react';

import {searchIcon} from '@workday/canvas-system-icons-web';
import {
  createComponent,
  createElemPropsHook,
  createSubcomponent,
  composeHooks,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {
  Combobox,
  useComboboxModel,
  useComboboxLoader,
  useComboboxInput,
} from '@workday/canvas-kit-react/combobox';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';

const colors = ['Red', 'Blue', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return `${colors[index % colors.length]} ${fruits[index % fruits.length]} ${index + 1}`;
  });

const useAutocompleteInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    console.log('model', model);
    return {
      onKeyPress(event: React.KeyboardEvent) {
        model.events.show(event);
      },
    };
  }),
  useComboboxInput
);

const AutoCompleteInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useAutocompleteInput,
})<ExtractProps<typeof Combobox.Input, never>>((elemProps, Element) => {
  return <Combobox.Input as={Element} {...elemProps} />;
});

export const Autocomplete = () => {
  const {model, loader} = useComboboxLoader(
    {
      getId: (item: string) => item,
      getTextValue: (item: string) => item,
      shouldVirtualize: true,
      total: 0,
      pageSize: 20,
      async load({pageNumber, pageSize, filter}) {
        return new Promise<LoadReturn<string>>(resolve => {
          setTimeout(() => {
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const filteredItems = options.filter(item => {
              if (filter === '' || typeof filter !== 'string') {
                return true;
              }
              return item.toLowerCase().includes(filter.toLowerCase());
            });

            const total = filteredItems.length;
            const items = filteredItems.slice(start, end);

            resolve({
              items,
              total,
            });
          }, 300);
        });
      },
      onShow(data, state) {
        loader.load();
      },
    },
    useComboboxModel
  );

  return (
    <FormField orientation="horizontal" hasError isRequired>
      <FormField.Label>Fruit</FormField.Label>
      <Combobox model={model} onChange={event => console.log('input', event.currentTarget.value)}>
        <InputGroup>
          <InputGroup.Input as={FormField.Input.as(AutoCompleteInput)} />
          <Combobox.Menu.Popper>
            <Combobox.Menu.Card>
              {model.state.items.length === 0 && (
                <StyledMenuItem as="span">No Results Found</StyledMenuItem>
              )}
              {model.state.items.length > 0 && (
                <Combobox.Menu.List maxHeight={200}>
                  {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                </Combobox.Menu.List>
              )}
            </Combobox.Menu.Card>
          </Combobox.Menu.Popper>
          <InputGroup.InnerEnd
            pointerEvents="none"
            style={{opacity: loader.isLoading ? 1 : 0, transition: 'opacity 100ms ease'}}
            width={20}
            data-loading={loader.isLoading}
          >
            <LoadingDots style={{display: 'flex', transform: 'scale(0.3)'}} />
          </InputGroup.InnerEnd>
          <InputGroup.InnerEnd>
            <InputGroup.ClearButton data-testid="clear" />
          </InputGroup.InnerEnd>
        </InputGroup>
      </Combobox>
    </FormField>
  );
};
