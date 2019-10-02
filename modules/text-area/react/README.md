# Canvas Kit Text Area

Canvas-styled React textarea component.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-text-area
```

# TextArea

#### Simple Example

**Note:** While a base textarea component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [`FormField`](../../form-field/react) to be made fully
accessible (see below).

```tsx
import * as React from 'react';
import TextArea from '@workday/canvas-kit-react-text-area';

<TextArea placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
```

#### Accessible Example

```tsx
import * as React from 'react';
import TextArea from '@workday/canvas-kit-react-text-area';
import FormField from '@workday/canvas-kit-react-form-field';

// Accessible default state
<FormField label="My Field" inputId="my-textarea-field">
  <TextArea placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
</FormField>

// Accessible error state
<FormField
  label="My Field"
  inputId="my-textarea-field"
  hintText="Helpful text to resolve error"
  hintId="my-textarea-field-error"
  error={FormField.ErrorType.Error}
>
  <TextArea placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
</FormField>
```

If use inside a FormField doesn't work for your use case, you can use the `aria-labelledby`
attribute.

```tsx
import * as React from 'react';
import TextArea from '@workday/canvas-kit-react-text-area';
<label id="123">Label</label>
...
<TextArea placeholder="Placeholder" value={this.state.value} onChange={() => {}} aria-labelledby="123" />;
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<TextArea error={TextArea.ErrorType.Alert} />
```

## Component Props

### Required

None

### Optional

#### `disabled: boolean`

> Whether or not the text area is disabled.

Default: `false`

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

---

#### `inputRef: React.Ref<HTMLTextAreaElement>`

> The ref callback for the inner text area element.

---

#### `onChange: React.ChangeEventHandler<HTMLTextAreaElement>`

> The callback fired when the value is changed.

---

#### `placeholder: string`

> Placeholder text to be displayed if there is no input value.

Default: `''`

---

#### `readOnly: boolean`

> If true, user will be unable to interact with the field.

Default: `false`

---

#### `value: any`

> Text Area value

---

#### `resize: TextAreaResizeDirection`

> Set resize constraints on the text area

| Direction                           |
| ----------------------------------- |
| TextArea.ResizeDirection.Both       |
| TextArea.ResizeDirection.None       |
| TextArea.ResizeDirection.Vertical   |
| TextArea.ResizeDirection.Horizontal |

Default: `TextArea.ResizeDirection.Both`

---
