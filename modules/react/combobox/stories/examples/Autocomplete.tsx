import React from 'react';

import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {Combobox, useComboboxModel, useComboboxLoader} from '@workday/canvas-kit-react/combobox';

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
    <Combobox model={model}>
      <Combobox.Target />
      <Combobox.Menu.Popper>
        <Combobox.Menu.Card>
          <Combobox.Menu.List maxHeight={200}>
            {item => <Combobox.Menu.Item data-id={item}>{item}</Combobox.Menu.Item>}
          </Combobox.Menu.List>
        </Combobox.Menu.Card>
      </Combobox.Menu.Popper>
    </Combobox>
  );
};
