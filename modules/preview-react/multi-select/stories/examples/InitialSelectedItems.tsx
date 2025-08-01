import React, {useEffect} from 'react';

import {system} from '@workday/canvas-tokens-web';

import {createStyles} from '@workday/canvas-kit-styling';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {CanvasProvider, useMountLayout} from '@workday/canvas-kit-react/common';
import {useComboboxLoader} from '@workday/canvas-kit-react/combobox';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {MultiSelect, useMultiSelectModel} from '@workday/canvas-kit-preview-react/multi-select';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

const colors = ['Red', 'Blue', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return {
      id: `${index + 1}`,
      text: `${colors[index % colors.length]} ${fruits[index % fruits.length]} ${index + 1}`,
    };
  });

export const InitialSelectedItems = () => {
  const [value, setValue] = React.useState('');

  const {model, loader} = useComboboxLoader(
    {
      // You can start with any number that makes sense.
      total: 0,
      initialSelectedIds: ['3', '5'],

      // Pick whatever number makes sense for your API
      pageSize: 500,

      // A load function that will be called by the loader. You must return a promise that returns
      // an object like `{items: [], total: 0}`. The `items` will be merged into the loader's cache
      async load({pageNumber, pageSize, filter}) {
        return new Promise<LoadReturn<(typeof options)[0]>>(resolve => {
          // simulate a server response by resolving after a period of time
          setTimeout(() => {
            // simulate paging and filtering based on pre-computed items
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const filteredItems = options.filter(item => {
              if (filter === '' || typeof filter !== 'string') {
                return true;
              }
              return item.text.toLowerCase().includes(filter.toLowerCase());
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
      onShow() {
        // The `shouldLoad` cancels while the combobox menu is hidden, so let's load when it is
        // visible
        loader.load();
      },
    },
    useMultiSelectModel
  );

  useEffect(() => {
    loader.load();
  }, [loader]);

  return (
    <CanvasProvider>
      <>
        <form
          onSubmit={e => {
            console.log('form submitted');
            e.preventDefault();
          }}
        >
          <main className={mainContentStyles}>
            <MultiSelect model={model}>
              <FormField orientation="horizontalStart">
                <FormField.Label>Fruits</FormField.Label>
                <FormField.Input
                  as={MultiSelect.SearchInput}
                  placeholder="Search"
                  removeLabel="Remove"
                  name="toppings"
                  onChange={e => {
                    setValue(e.currentTarget.value);
                  }}
                  value={value}
                />
                <MultiSelect.Popper>
                  <MultiSelect.Card>
                    {model.state.items.length === 0 && (
                      <StyledMenuItem as="span">No Results Found</StyledMenuItem>
                    )}
                    {model.state.items.length > 0 && (
                      <MultiSelect.List maxHeight={200}>
                        {item =>
                          item ? (
                            <MultiSelect.Item data-id={item.id}>
                              <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                            </MultiSelect.Item>
                          ) : undefined
                        }
                      </MultiSelect.List>
                    )}
                  </MultiSelect.Card>
                </MultiSelect.Popper>
              </FormField>
            </MultiSelect>
          </main>
        </form>
        <div>Selected: {value}</div>
      </>
    </CanvasProvider>
  );
};
