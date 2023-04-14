import React from 'react';

import {xSmallIcon, docIcon} from '@workday/canvas-system-icons-web';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {Combobox, useComboboxModel, useComboboxLoader} from '@workday/canvas-kit-react/combobox';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {dispatchInputEvent} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

import {InputGroup} from '../../lib/InputGroup';
import {SystemIcon} from '../../../icon';

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
  const {model} = useComboboxLoader(
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
          }, 300);
        });
      },
    },
    useComboboxModel
  );

  return (
    <FormField orientation="horizontal">
      <FormField.Label>Fruit</FormField.Label>
      <FormField.Input
        as={Combobox}
        model={model}
        onChange={event => console.log('input', event.currentTarget.value)}
      >
        <InputGroup>
          <InputGroup.Input as={Combobox.Input} />
          <InputGroup.End>
            <TertiaryButton
              role="presentation"
              icon={xSmallIcon}
              size="small"
              tabIndex={-1}
              onMouseDown={event => {
                event.preventDefault(); // prevent a focus change
              }}
              onClick={event => {
                dispatchInputEvent(model.ref.current, '');
              }}
            />
          </InputGroup.End>
        </InputGroup>
        <Combobox.Menu.Popper>
          <Combobox.Menu.Card>
            <Combobox.Menu.List maxHeight={200}>
              {item => <Combobox.Menu.Item data-id={item}>{item}</Combobox.Menu.Item>}
            </Combobox.Menu.List>
          </Combobox.Menu.Card>
        </Combobox.Menu.Popper>
      </FormField.Input>
    </FormField>
  );
};
