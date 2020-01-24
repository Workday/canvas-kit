# Canvas Kit Combobox

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/UNSTABLE-alpha-orange" alt="UNSTABLE: Alpha" />
</a>  This component is work in progress and currently in pre-release.

For a full suite of examples, have a look at the [Combobox Stories](./stories.tsx).

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-combobox
```

## Accessibility

This module uses the ARIA 1.0 Combobox spec.
The newer ARIA 1.1 spec does not have full browser/screenreader support yet.

See here for
[differences between ARIA 1.0 and 1.1](https://www.levelaccess.com/differences-aria-1-0-1-1-changes-rolecombobox/)

## Usage

```tsx
import {SearchBar} from '@workday/canvas-kit-labs-react-header';
import {MenuItem} from '@workday/canvas-kit-labs-react-menu';
import {TextInput} from '@workday/canvas-kit-labs-react-text-input';
import {FormField} from '@workday/canvas-kit-labs-react-form-field';

const autocompleteCallback = event => console.log('Adjust menu items here')


<FormField id='id-123' label='Example'>
  <Combobox
    autocompleteItems={[<MenuItem>Item 1</MenuItem>]}
    onChange={autocompleteCallback}
    onFocus={action(`Focus`)}
    onBlur={action(`Blur`)}
  />
    <TextInput placeholder="Autocomplete" autoFocus={true} />
  </Combobox>
</FormField>
```

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TextInputProps>`

> The TextInput component to wrap.

### Optional

#### `initialValue: string`

> Initial value to set the input to.

---

#### `showClearButton: boolean`

> Show button to clear input field.

---

#### `clearButtonVariant: IconButtonVariant`

> The type of icon button to use for clearing input.

Default: `IconButton.Variant.Plain`

---

#### `clearButtonLabel: string`

> Screenreader Label for the clear button.

Default: `'Reset Search Input'`

---

#### `autocompleteItems: React.ReactElement<MenuItemProps>[]`

> An array of MenuItems to show under the input.

---

#### `onChange: React.ChangeEventHandler<HTMLInputElement>`

> Callback to listen when the TextInput changes. This is usually used to update the autocomplete
> items.

---

#### `onFocus: React.FocusEventHandler`

> Callback to listen when the TextInput focuses.

---

#### `onBlur: React.FocusEventHandler`

> Callback to listen when the TextInput blurs.
