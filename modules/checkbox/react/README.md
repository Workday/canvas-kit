# Canvas Kit Checkbox

A checkbox input.

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
used as is. It should be used in tandem with [`FormField`](../../form-field/react) to be made fully
accessible (see below).

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
  <Checkbox disabled={false} checked={checked} onChange={this.handleCheck} id="my-checkbox-field" />;
</FormField>;
```

If use inside a FormField doesn't work for your use case, you can use the `aria-labelledby`
attribute.

```tsx
import * as React from 'react';
import Checkbox from '@workday/canvas-kit-react-checkbox';
<label id="123">Label</label>
...
<Checkbox checked={true} onChange={this.handleCheck} aria-labelledby="123" />;
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

Default: A uniquely generated id

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

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

Default: `undefined`

---

#### `indeterminate: boolean`

> Used on a checkbox with nested child checkboxes to denote that some, but not all, child checkboxes
> are selected.

Default: `false`
