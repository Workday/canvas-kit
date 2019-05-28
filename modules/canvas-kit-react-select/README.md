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

<FormField label="My Field" inputId="my-radio-field">
  <Select name="contact">
    <SelectOption value="email" label="E-mail" />
    <SelectOption value="phone" label="Phone" />
    <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
    <SelectOption value="mail" label="Mail" />
  </Select>
</FormField>;
```

## Static Properties

> None

## Component Props

### Required

> Children

A select component must have children of type `SelectOption`:

### Optional

#### `checked: boolean`

> Whether or not the radio input is checked (`true`) or not checked (`false`)

```tsx
import * as React from 'react';
import Select from '@workday/canvas-kit-react-select';
import FormField from '@workday/canvas-kit-react-form-field';

<FormField label="My Field" inputId="my-radio-field">
  <Select name="contact">
    <SelectOption value="email" label="E-mail" />
    <SelectOption value="phone" label="Phone" />
    <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
    <SelectOption value="mail" label="Mail" />
  </Select>
</FormField>;
```

Default: `false`

---

#### `disabled: boolean`

> Whether or not the radio input is disabled (not able to be checked on or off)

Default: `false`

---

#### `name: string`

> The name of the select component

---

#### `onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the select state changes.

---

#### `value: string`

> The `value` attribute of the select.

---
