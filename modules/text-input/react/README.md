# Canvas Kit Text Input

Canvas-styled React text input components.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-text-input
```

# TextInput

## Usage

#### Simple Example

**Note:** While a base input component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [`FormField`](../../form-field/react) to be made fully
accessible (see below).

```tsx
import * as React from 'react';
import TextInput from '@workday/canvas-kit-react-text-input';

<TextInput placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
```

#### Accessible Example

```tsx
import * as React from 'react';
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';

// Accessible default state
<FormField label="My Field" inputId="my-input-field">
  <TextInput placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
</FormField>

// Accessible error state
<FormField
  label="My Field"
  inputId="my-input-field"
  hintText="Helpful text to resolve error"
  hintId="my-input-field-error"
  error={FormField.ErrorType.Error}
>
  <TextInput placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
</FormField>
```

If use inside a FormField doesn't work for your use case, you can use the `aria-labelledBy`
attribute.

```tsx
import * as React from 'react';
import TextInput from '@workday/canvas-kit-react-text-input';
<label id="123">Label</label>
...
<TextInput placeholder="Placeholder" value={this.state.value} onChange={() => {}} aria-labelledBy="123" />;
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<TextInput error={TextInput.ErrorType.Alert} />
```

## Component Props

### Required

#### `label: string`

> The label text displayed for the input.

### Optional

#### `disabled: boolean`

> Whether or not the input is disabled.

Default: `false`

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

Default: `undefined`

---

#### `inputRef: React.Ref<HTMLInputElement>`

> The ref callback for the inner input element.

Default: `undefined`

---

#### `onChange: React.ChangeEventHandler<HTMLInputElement>`

> The callback fired when the value is changed.

Default: `undefined`

---

#### `placeholder: string`

> Placeholder text to be displayed if there is no input value.

Default: `''`

---

#### `readOnly: boolean`

> If true, user will be unable to interact with the field.

Default: `false`

---

#### `type: string`

> HTML5 input type

Default: `text`

---

#### `value: any`

> Input value

Default: `undefined`

---
