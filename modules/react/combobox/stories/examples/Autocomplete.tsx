import React from 'react';

import {Combobox, useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {useListLoader} from '@workday/canvas-kit-react/collection';

export const Autocomplete = () => {
  const autocomplete = useListLoader(
    {
      getId: (item: string) => item,
      getTextValue: (item: string) => item,
      shouldVirtualize: true,
      total: 1000,
      pageSize: 20,
      async load(pageNumber, pageSize) {
        console.log('loading', pageNumber);
        return new Promise<{items: string[]}>(resolve => {
          setTimeout(() => {
            resolve({
              items: Array(pageSize)
                .fill(true)
                .map((_, index) => `Option ${(pageNumber - 1) * pageSize + index + 1}`),
            });
          }, 500);
        });
      },
    },
    useComboboxModel
  );

  return (
    <Combobox model={autocomplete}>
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
