import React from 'react';

import {xSmallIcon, searchIcon} from '@workday/canvas-system-icons-web';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {Combobox, useComboboxModel, useComboboxLoader} from '@workday/canvas-kit-react/combobox';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {dispatchInputEvent} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

import {InputGroup} from '@workday/canvas-kit-react/text-input';

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const colors = ['Blue', 'Red', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return `${pickRandom(colors)} ${pickRandom(fruits)} ${index + 1}`;
  });

export const Autocomplete = () => {
  const {model, loader} = useComboboxLoader(
    {
      getId: (item: string) => item,
      getTextValue: (item: string) => item,
      shouldVirtualize: true,
      total: 1000,
      pageSize: 20,
      async load({pageNumber, pageSize, filter}) {
        console.log('loading', pageNumber, filter);
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
          }, 1500);
        });
      },
      id: 'foo',
    },
    useComboboxModel
  );

  return (
    <FormField orientation="horizontal" hasError isRequired>
      <FormField.Label>Fruit</FormField.Label>
      <Combobox model={model} onChange={event => console.log('input', event.currentTarget.value)}>
        <InputGroup>
          <InputGroup.InnerStart pointerEvents="none">
            <TertiaryButton
              role="presentation"
              icon={searchIcon}
              size="small"
              tabIndex={-1}
              onMouseDown={event => {
                event.preventDefault(); // prevent a focus change
              }}
              onClick={event => {
                dispatchInputEvent(model.state.inputRef.current, '');
              }}
            />
          </InputGroup.InnerStart>
          <InputGroup.Input as={FormField.Input.as(Combobox.Input)} />
          <Combobox.Menu.Popper>
            <Combobox.Menu.Card>
              {model.state.items.length === 0 && <StyledMenuItem>No Results Found</StyledMenuItem>}
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
            width={10}
          >
            <LoadingDots style={{display: 'flex', transform: 'scale(0.3)'}} />
          </InputGroup.InnerEnd>
          <InputGroup.InnerEnd>
            <TertiaryButton
              role="presentation"
              icon={xSmallIcon}
              size="small"
              tabIndex={-1}
              onMouseDown={event => {
                event.preventDefault(); // prevent a focus change
              }}
              onClick={event => {
                dispatchInputEvent(model.state.inputRef.current, '');
              }}
            />
          </InputGroup.InnerEnd>
        </InputGroup>
      </Combobox>
    </FormField>
  );
};
