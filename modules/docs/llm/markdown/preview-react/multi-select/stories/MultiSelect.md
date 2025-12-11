---
source_file: preview-react/multi-select/stories/MultiSelect.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/multi-select/stories/MultiSelect
---

<Meta of={MultiSelectStories} />

# Canvas Kit MultiSelect

MultiSelect inputs allow users to choose multiple options from a list of items.

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

### Basic Example

`MultiSelect` supports a
[dynamic API](/getting-started/for-developers/resources/collection-api/#dynamic-items) where you
pass an array of items via the `items` prop and provide a render function to display the items. The
items may be provided as an
[array of strings](/getting-started/for-developers/resources/collection-api/#array-of-strings) or an
[array of objects](/getting-started/for-developers/resources/collection-api/#array-of-objects).

`MultiSelect` should be used in tandem with [Form Field](/components/inputs/form-field/) where the
`MultiSelect` wraps the `FormField` element and the `FormField` element wraps the children of
`MultiSelect` to meet accessibility standards. This ensures the `label` text from `FormField` is
attached to the `MultiSelect.Input` and read out as a group for voiceover.

```tsx
<MultiSelect items={options}>
  <FormField label="Your Label">
    <MultiSelect.Input onChange={e => handleChange(e)} id="contact-multi-select" />
    <MultiSelect.Popper>
      <MultiSelect.Card>
        <MultiSelect.List>
          {item => <MultiSelect.Item>{item.id}</MultiSelect.Item>}
        </MultiSelect.List>
      </MultiSelect.Card>
    </MultiSelect.Popper>
  </FormField>
</MultiSelect>
```

### Disabled Example

Disabling `MultiSelect` involves passing the `disabled` prop to the `MultiSelect.Input` component.

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const Disabled = () => {
  return (
    <>
      <MultiSelect items={items} initialSelectedIds={['Olives', 'Onions', 'Pepperoni']}>
        <FormField orientation="horizontalStart">
          <FormField.Label>Toppings</FormField.Label>
          <FormField.Input
            as={MultiSelect.Input}
            placeholder="Select Multiple"
            removeLabel="Remove"
            disabled
          />
          <MultiSelect.Popper>
            <MultiSelect.Card>
              <MultiSelect.List>
                {item => (
                  <MultiSelect.Item data-id={item}>
                    <MultiSelect.Item.Text>{item}</MultiSelect.Item.Text>
                  </MultiSelect.Item>
                )}
              </MultiSelect.List>
            </MultiSelect.Card>
          </MultiSelect.Popper>
        </FormField>
      </MultiSelect>
    </>
  );
};

```

### Error States

The `MultiSelect.Input` and `MultiSelect.SearchInput` support the `ErrorType` from the Common
package. The error styling is identical to the `TextInput` error styling. The `error` prop is
typically passed from the `FormField` component.

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {MultiSelect, useMultiSelectModel} from '@workday/canvas-kit-preview-react/multi-select';

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const Error = () => {
  const model = useMultiSelectModel({
    items,
    initialSelectedIds: [],
  });
  return (
    <>
      <MultiSelect model={model}>
        <FormField
          orientation="horizontalStart"
          error={
            model.state.selectedIds.length < 1
              ? 'error'
              : model.state.selectedIds.length > 3
              ? 'caution'
              : undefined
          }
        >
          <FormField.Label>Toppings</FormField.Label>
          <FormField.Field>
            <FormField.Input
              as={MultiSelect.Input}
              placeholder="Select Multiple"
              removeLabel="Remove"
            />
            <MultiSelect.Popper>
              <MultiSelect.Card>
                <MultiSelect.List>
                  {item => (
                    <MultiSelect.Item data-id={item}>
                      <MultiSelect.Item.Text>{item}</MultiSelect.Item.Text>
                    </MultiSelect.Item>
                  )}
                </MultiSelect.List>
              </MultiSelect.Card>
            </MultiSelect.Popper>

            <FormField.Hint>
              {model.state.selectedIds.length < 1
                ? 'Select at least one topping.'
                : model.state.selectedIds.length > 3
                ? 'More than 3 toppings cost extra.'
                : undefined}
            </FormField.Hint>
          </FormField.Field>
        </FormField>
      </MultiSelect>
    </>
  );
};

```

### Complex

When registering items in an array of objects, it's common to have the text that is displayed to the
user be different than an id. In this example, `serverId` and `label` properties need to be remapped
to `id` and `text` hence the usage of `getId` and `getTextValue`. If your object has the properties
`text` and `id`, there would be no need for this.

```tsx
import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {system} from '@workday/canvas-tokens-web';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

const items = [
  {id: '1', text: 'Cheese'},
  {id: '2', text: 'Olives'},
  {id: '3', text: 'Onions'},
  {id: '4', text: 'Pepperoni'},
  {id: '5', text: 'Peppers'},
];

export const Complex = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');
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
            <MultiSelect items={items} getId={i => i.id} getTextValue={i => i.text}>
              <FormField orientation="horizontalStart">
                <FormField.Label>Toppings</FormField.Label>
                <FormField.Input
                  as={MultiSelect.Input}
                  placeholder="Select Multiple"
                  removeLabel="Remove"
                  name="toppings"
                  onChange={e => {
                    const value = e.currentTarget.value;
                    setValue(value);
                    setLabel(
                      value
                        .split(', ')
                        .map(item => items.find(i => i.id === item)?.text || 'Not Found')
                        .join(', ')
                    );
                  }}
                  value={value}
                />
                <MultiSelect.Popper>
                  <MultiSelect.Card>
                    <MultiSelect.List>
                      {item => (
                        <MultiSelect.Item data-id={item.id}>
                          <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                        </MultiSelect.Item>
                      )}
                    </MultiSelect.List>
                  </MultiSelect.Card>
                </MultiSelect.Popper>
              </FormField>
            </MultiSelect>
          </main>
        </form>
        <div>Selected IDs: {value}</div>
        <div>Selected Labels: {label}</div>
      </>
    </CanvasProvider>
  );
};

```

### With Icons

Use `MultiSelect.Item.Icon` to render an icon for a `MultiSelect.Item`. The `icon` prop for
`MultiSelect.Item.Icon` accepts [system icons](/assets/system-icons/) from
`@workday/canvas-system-icons-web`.

> **Note: `data-id` on `MultiSelect.Item` must match the `id` property in your array of objects.
> This ensures proper keyboard handling and type-ahead.**

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {
  mediaPauseIcon,
  mediaPlayIcon,
  mediaTopicsIcon,
  skipIcon,
  previousIcon,
} from '@workday/canvas-system-icons-web';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const items = [
  {id: '1', text: 'Pause', icon: mediaPauseIcon},
  {id: '2', text: 'Play', icon: mediaPlayIcon},
  {id: '3', text: 'Skip', icon: skipIcon},
  {id: '4', text: 'Previous', icon: previousIcon},
];

export const Icons = () => {
  return (
    <MultiSelect items={items}>
      <FormField orientation="horizontalStart">
        <FormField.Label>Controls</FormField.Label>
        <FormField.Input
          as={MultiSelect.Input}
          placeholder="Select Multiple"
          removeLabel="Remove"
        />
        <MultiSelect.Popper>
          <MultiSelect.Card>
            <MultiSelect.List>
              {item => (
                <MultiSelect.Item data-id={item.id}>
                  <MultiSelect.Item.Icon icon={item.icon} />
                  <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                  <MultiSelect.Item.Icon icon={mediaTopicsIcon} />
                </MultiSelect.Item>
              )}
            </MultiSelect.List>
          </MultiSelect.Card>
        </MultiSelect.Popper>
      </FormField>
    </MultiSelect>
  );
};

```

### Controlled

The MultiSelect can be a controlled input component by passing the `value` and `onChange` to either
the `<MultiSelect>` component or the `<MultiSelect.Input>` component. Internally, the
`MultiSelect.Input` watches for changes on the `value` React prop as well as the `value` DOM
property and will update the model accordingly.

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const items = [
  {id: '1', text: 'Cheese'},
  {id: '2', text: 'Olives'},
  {id: '3', text: 'Onions'},
  {id: '4', text: 'Pepperoni'},
  {id: '5', text: 'Peppers'},
];

export const Controlled = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [value, setValue] = React.useState('1');
  const [label, setLabel] = React.useState('Cheese');

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setValue(value);
    setLabel(
      value
        .split(', ')
        .map(item => items.find(i => i.id === item)?.text || 'Not Found')
        .join(', ')
    );
  }

  return (
    <>
      <form
        onSubmit={e => {
          console.log('form submitted');
          e.preventDefault();
        }}
        ref={formRef}
      >
        <Flex gap="s" flexDirection="column">
          <MultiSelect items={items}>
            <FormField orientation="horizontalStart">
              <FormField.Label>Toppings</FormField.Label>
              <FormField.Input
                as={MultiSelect.Input}
                placeholder="Select Multiple"
                removeLabel="Remove"
                name="toppings"
                onChange={handleOnChange}
                value={value}
              />
              <MultiSelect.Popper>
                <MultiSelect.Card>
                  <MultiSelect.List>
                    {item => (
                      <MultiSelect.Item data-id={item.id}>
                        <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                      </MultiSelect.Item>
                    )}
                  </MultiSelect.List>
                </MultiSelect.Card>
              </MultiSelect.Popper>
            </FormField>
          </MultiSelect>
          <Flex gap="s">
            <SecondaryButton
              onClick={e => {
                setValue('1, 2, 3');
              }}
            >
              Set to "Cheese, Olives, Onions" via React `value`
            </SecondaryButton>
            <SecondaryButton
              onClick={e => {
                const input = formRef.current.querySelector('[name=toppings]') as HTMLInputElement;
                input.value = '1, 2';
              }}
            >
              Set to "Cheese, Olives" via DOM `value`
            </SecondaryButton>
          </Flex>
          <div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </div>
          <div>Selected ID: {value}</div>
          <div>Selected Label: {label}</div>
        </Flex>
      </form>
    </>
  );
};

```

### Searching

A MultiSelect input can be used as a filter for results. Most likely this also means there are many
items that may not be all be loaded from the server at once. The `useComboboxLoader` can be used to
dynamically load items as the user navigates the available options.

> **Note:** The behavior of search is experimental. The example should continue to work without
> modification, but how the searchable input is presented to the user may change with user testing.
> Don't rely too much on the exact behavior of the search input. For example, the search input may
> be cleared when the user blurs the field.

```tsx
import React from 'react';

import {system} from '@workday/canvas-tokens-web';

import {createStyles} from '@workday/canvas-kit-styling';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
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

export const Searching = () => {
  const [value, setValue] = React.useState('');

  const {model, loader} = useComboboxLoader(
    {
      // You can start with any number that makes sense.
      total: 0,

      // Pick whatever number makes sense for your API
      pageSize: 20,

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

```

### Initial Selected Items

You can set `initialSelectedIds` to the value that you want initially selected.

```tsx
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

```
