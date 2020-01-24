# Canvas Kit Color Picker

Color Picker is a two part component. It has a color input that handles custom hex colors and then
selecting specific swatches.

## Installation

```sh
yarn add @workday/canvas-kit-react-color-picker
```

or

```sh
yarn add @workday/canvas-kit-color-picker
```

# Color Input

A controlled input for accepting typed/pasted hex codes.

## Usage

```tsx
import * as React from 'react';
import {ColorInput} from '@workday/canvas-kit-color-picker';

<ColorInput
  showCheck={true}
  onChange={this.onChange}
  value={this.state.color}
  onValidColorChange={this.validColorChange}
/>;
```

## Static Properties

> None

## Component Props

All props available for `TextInput` are available here. Also, all standard input attributes are
available and can be passed to the input field.

### Required

> None

---

### Optional

#### `value: string`

> The value entered by the user into the color input

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the input element. This allows you to imperatively focus on the color input if needed.

---

#### `onChange: (e: React.ChangeEvent<HTMLInputElement>) => void`

> A onChange callback from the input. Value can be accessed from `e.currentTarget.value`. Should be
> used to control the input.

---

#### `onValidColorChange: (color: string) => void`

> A callback that passes up the valid hex value typed by the user. This is always prefixed with a
> hash, and is always the expanded hex value (e.g. "03F" > "#0033FF").

---

#### `showCheck: boolean`

> Optionally show a check icon when a custom hex color has been selected

Default: `false`

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

# Color Preview

A component to show a color swatch

## Usage

```tsx
import * as React from 'react';
import {ColorPreview} from '@workday/canvas-kit-color-preview';

<ColorPreview value="#00FFCC" />;
```

## Static Properties

> None

## Component Props

### Required

#### `value: string`

> The value entered by the user into the color input

---

### Optional

#### `id: string`

> An id linked to the color preview input to be used with an associated form label
