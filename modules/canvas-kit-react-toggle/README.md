# Canvas Kit Toggle

A pill shaped toggle switch. This is an
[_controlled_](https://reactjs.org/docs/forms.html#controlled-components) `input` component.
Undocumented props are spread to the `input` element.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-toggle
```

## Usage

```tsx
import * as React from 'react';
import {Toggle} from '@workday/canvas-kit-react-toggle';

<Toggle disabled={false} checked={checked} onChange={this.handleCheck} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `checked: boolean`

> Whether or not the toggle is on (`true`) or off (`false`)

Default: `false`

---

#### `disabled: boolean`

> Whether or not the toggle is disabled (not able to be switched on or off)

Default: `false`

---

#### `id: string`

> The HTML attribute `id` for the underlying input checkbox component.

---

#### `onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the toggle checked state changes.

---

#### `value: string`

> The `value` attribute of the input checkbox.

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the underlying input checkbox element. Use this to imperatively toggle or focus this
> component.
