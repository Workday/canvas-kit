# Canvas Kit Switch

A pill shaped switch. This is an
[_controlled_](https://reactjs.org/docs/forms.html#controlled-components) `input` component.
Undocumented props are spread to the `input` element.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-switch
```

## Usage

```tsx
import * as React from 'react';
import {Switch} from '@workday/canvas-kit-react-switch';

<Switch disabled={false} checked={checked} onChange={this.handleCheck} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `checked: boolean`

> Whether or not the switch is on (`true`) or off (`false`)

Default: `false`

---

#### `disabled: boolean`

> Whether or not the switch is disabled (not able to be switched on or off)

Default: `false`

---

#### `id: string`

> The HTML attribute `id` for the underlying input checkbox component.

---

#### `onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the switch checked state changes.

---

#### `value: string`

> The `value` attribute of the input checkbox.

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the underlying input checkbox element. Use this to imperatively switch or focus this
> component.
