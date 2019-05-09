# Canvas Kit Checkbox

A checkbox input.

Coming soon:

- Error/Alert handling

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-checkbox
```

## Usage

#### Simple Example

**Note:** While a base checkbox component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [`FormField`](../canvas-kit-react-form-field/README.md)
to be made fully accessible (see below).

```tsx
import * as React from 'react';
import Checkbox from '@workday/canvas-kit-react-checkbox';

<Checkbox disabled={false} checked={checked} onChange={this.handleCheck} />;
```

#### Accessible Example

```tsx
import * as React from 'react';
import Checkbox from '@workday/canvas-kit-react-checkbox';
import FormField from '@workday/canvas-kit-react-form-field';

<FormField label="My Field" inputId="my-checkbox-field">
  <Checkbox disabled={false} checked={checked} onChange={this.handleCheck} />;
</FormField>;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `checked: boolean`

> Whether or not the checkbox is checked (`true`) or not checked (`false`)

Default: `false`

---

#### `disabled: boolean`

> Whether or not the checkbox is disabled (not able to be checked on or off)

Default: `false`

---

#### `id: string`

> The HTML attribute `id` for the underlying input checkbox and label component. This is required if
> `label` is defined.

---

#### `label: string`

> The content of the label associated to the input checkbox component.

---

#### `onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the checkbox state changes.

---

#### `value: string`

> The `value` attribute of the input checkbox.

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the underlying input checkbox element. Use this to imperatively check or focus this
> component.
