---
source_file: react/combobox/stories/Combobox.mdx
live_url: https://workday.github.io/canvas-kit/react/combobox/stories/Combobox
---

<Meta of={ComboboxStories} />

# Combobox

Combobox is an _abstract_ compound component - it should not be used on its own, but used as a base
to create combobox components. The Combobox system provides components, models, loaders, and
elemProps hooks.

The term "Combobox" is based on the
[Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) as defined in the ARIA
Authoring Practices Guide (APG):

> A [combobox](https://w3c.github.io/aria/#combobox) is an input widget with an associated popup
> that enables users to select a value for the combobox from a collection of possible values.

Examples of a "combobox" would be date pickers, autocomplete, and select components.

## Combobox value restriction

A Combobox can either be either "constrained" or "arbitrary".

### Constrained

A constrained combobox can only have a value from a set of values presented as options. The user can
pick from these values, but cannot input a value outside the options provided. Constrained
comboboxes use the [useComboboxInputConstrained](#usecomboboxinputconstrained) hook and often have
two separate `input` elements.

- user input - This is the visible input and it should contain user-friendly values. Calls to
  `.focus()` or `.blur()` are redirected to this input. Any prop passed to the `*.Input` component
  that is not directly related to forms will be passed here (i.e. `data-testid`, `aria-*`, etc).

- form input - This input is only visible to forms and the `value` will usually be server IDs. If
  the combobox options don't have an ID and only use user values, the value of this input will be
  the same as the user input. Any prop related to the function of forms will be passed here. For
  example, the `name` attribute will be passed here. The `ref` will be pointed to this element.

`Select` and `MultiSelect` are examples of constrained comboboxes.

### Arbitrary

An arbitrary combobox allows the user to enter any value. The list of options are presented as
suggestions and selecting an option will prefill the combobox with the value of the option. The user
is still allowed to modify the combobox even after an option is entered. With arbitrary comboboxes,
there is only one `input` element. Arbitrary combobox inputs should use the
[useComboboxInputArbitrary](#usecomboboxinputarbirary) hook. Typeahead or `Autocomplete` are
examples are arbitrary value comboboxes.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Autocomplete

This example shows an Autocomplete example using `FormField`, `InputGroup`, and the `Combobox`
components to make an autocomplete form field. It uses [useComboboxLoader](#usecomboboxloader) to
make mock API calls using `setTimeout`. Your application may use
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), or other means of
communicating with a server.

An Autocomplete is an example of an arbitrary combobox.

```tsx
import React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  composeHooks,
} from '@workday/canvas-kit-react/common';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {
  Combobox,
  useComboboxModel,
  useComboboxLoader,
  useComboboxInput,
  useComboboxInputArbitrary,
} from '@workday/canvas-kit-react/combobox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const colors = ['Red', 'Blue', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return `${colors[index % colors.length]} ${fruits[index % fruits.length]} ${index + 1}`;
  });

const useAutocompleteInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    return {
      onKeyPress(event: React.KeyboardEvent) {
        model.events.show(event);
      },
    };
  }),
  useComboboxInputArbitrary,
  useComboboxInput
);

const loadingDotsStencil = createStencil({
  base: {
    transition: 'opacity 100ms ease',
    '& [data-part="loading-dots"]': {
      display: 'flex',
      transform: 'scale(0.3)',
    },
  },
  modifiers: {
    isLoading: {
      true: {
        opacity: system.opacity.full,
      },
      false: {
        opacity: system.opacity.zero,
      },
    },
  },
});

const AutoCompleteInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useAutocompleteInput,
})<{isLoading?: boolean}>(({isLoading, ...elemProps}, Element) => {
  return (
    <InputGroup>
      <InputGroup.Input as={Element} {...elemProps} />
      <InputGroup.InnerEnd
        cs={loadingDotsStencil({isLoading})}
        width={px2rem(20)}
        data-loading={isLoading}
      >
        <LoadingDots data-part="loading-dots" />
      </InputGroup.InnerEnd>
      <InputGroup.InnerEnd>
        <InputGroup.ClearButton data-testid="clear" />
      </InputGroup.InnerEnd>
    </InputGroup>
  );
});

export const Autocomplete = () => {
  const {model, loader} = useComboboxLoader(
    {
      // You can start with any number that makes sense.
      total: 0,

      // Pick whatever number makes sense for your API
      pageSize: 20,

      // A load function that will be called by the loader. You must return a promise that returns
      // an object like `{items: [], total: 0}`. The `items` will be merged into the loader's cache
      async load({pageNumber, pageSize, filter}) {
        return new Promise<LoadReturn<string>>(resolve => {
          // simulate a server response by resolving after a period of time
          setTimeout(() => {
            // simulate paging and filtering based on pre-computed items
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
      onShow() {
        // The `shouldLoad` cancels while the combobox menu is hidden, so let's load when it is
        // visible
        loader.load();
      },
    },
    useComboboxModel
  );

  return (
    <FormField orientation="horizontalStart" isRequired>
      <FormField.Label>Fruit</FormField.Label>
      <FormField.Field>
        <Combobox model={model} onChange={event => console.log('input', event.currentTarget.value)}>
          <FormField.Input as={AutoCompleteInput} isLoading={loader.isLoading} />
          <Combobox.Menu.Popper>
            <Combobox.Menu.Card>
              {model.state.items.length === 0 && (
                <StyledMenuItem as="span">No Results Found</StyledMenuItem>
              )}
              {model.state.items.length > 0 && (
                <Combobox.Menu.List maxHeight={px2rem(200)}>
                  {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                </Combobox.Menu.List>
              )}
            </Combobox.Menu.Card>
          </Combobox.Menu.Popper>
        </Combobox>
      </FormField.Field>
    </FormField>
  );
};

```

### Custom Styles

Combobox and its subcomponents support custom styling via the `cs` prop. For more information, check
our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Combobox not found -->

## Hooks

<!-- API Reference for useComboboxLoader not found -->

<!-- API Reference for useComboboxInputConstrained not found -->

<!-- API Reference for useComboboxInputArbitrary not found -->
