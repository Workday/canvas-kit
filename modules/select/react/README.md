# Canvas Kit Select

Select input

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-select
```

## Usage

#### Simple Example

**Note:** While a base select component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [`FormField`](../canvas-kit-react-form-field/README.md)
to be made fully accessible (see below).

```tsx
import * as React from 'react';
import Select, {SelectOption} from '@workday/canvas-kit-react-select';

<Select name="contact">
  <SelectOption value="email" label="E-mail" />
  <SelectOption value="phone" label="Phone" />
  <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
  <SelectOption value="mail" label="Mail" />
</Select>;
```

#### Accessible Example

```tsx
import * as React from 'react';
import Select, {SelectOption} from '@workday/canvas-kit-react-select';
import FormField from '@workday/canvas-kit-react-form-field';

<FormField label="My Field" inputId="my-select-field">
  <Select name="contact">
    <SelectOption value="email" label="E-mail" />
    <SelectOption value="phone" label="Phone" />
    <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
    <SelectOption value="mail" label="Mail" />
  </Select>
</FormField>;
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<Select error={Select.ErrorType.Alert} />
```

## Component Props

### Required

None

#### `children: React.ReactElement<SelectOption >[]`

A select component must have children of type `SelectOption`:

```tsx
<Select name="contact">
  <SelectOption value="email" label="E-mail" />
  <SelectOption value="phone" label="Phone" />
  <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
  <SelectOption value="mail" label="Mail" />
</Select>
```

---

#### `name: string`

> The name of the select component

---

#### `onChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void`

> A callback that gets called everytime the select state changes.

---

#### `value: string`

> The `value` attribute of the select.

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

Default: `undefined`

### Optional

#### `disabled: boolean`

> Whether or not the select is disabled (not able to be selected)

Default: `false`

# Canvas Kit SelectOption

### Required

##### `disabled: boolean;`

> Whether or not the SelectOption is disabled

Default: `false`

### Optional

##### `value?: string`

> The value of the SelectOption

##### `label?: string;`

> The label of the SelectOption
