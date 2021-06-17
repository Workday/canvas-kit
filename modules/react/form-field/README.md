# Canvas Kit Form Field

Form field wrapper component that makes inputs accessible. It also includes complementary elements
for form inputs (labels, errors, etc.).

## Installation

```sh
yarn add @workday/canvas-kit-react
```

# FormField

## Usage

```tsx
import * as React from 'react;
import FormField from '@workday/canvas-kit-react/form-field';
import TextInput from '@workday/canvas-kit-react/text-input';

const ExampleForm = () => {
  const [value, setValue] = React.useState('');
  return (
    <FormField
      label="Label"
      inputId="my-input-field"
      error={FormField.ErrorType.Error}
      hintText="This field is required."
      hintId="my-input-field-error"
      required={true}
    >
      <TextInput value={value} onChange={(e) => setValue(e.target.value)}/>
    </FormField>
  );
}
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<TextInput error={TextInput.ErrorType.Alert} />
```

---

#### `LabelPosition: FormFieldLabelPosition`

```tsx
<TextInput labelPosition={TextInput.LabelPosition.Left} />
```

## Component Props

### Required

#### `children: React.ReactNode`

> The input component to wrap.

### Optional

#### `error: ErrorType`

> The type of error to display, if any. This prop will be passed to the input component if
> applicable.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

Default: `undefined`

---

#### `grow: boolean`

> Whether or not the field will expand to the width of the container. This prop will be passed to
> the input component if applicable.

Default: `false`

---

#### `hintText: React.ReactNode`

> The message displayed below the input field. Required if `error` is defined.

Default: `undefined`

---

#### `hintId: string`

> The ID of message displayed below the input field. Required for accessible aria-definedby
> attribute. Required if `error` and `hintText` are defined.

---

#### `label: string`

> The label text displayed for the input.

---

#### `requiredlabel: string`

> The required label text displayed for the required input.

---

#### `inputId: string`

> The ID of the input child. If an ID is not specified on the input child, this will be used as it's
> ID. Used for label's `htmlFor` attribute. This is required for accessibility if `label` is
> defined.

---

#### `labelPosition: FormFieldLabelPosition`

> The position of the label relative to the input field.

| Type | Description                                   |
| ---- | --------------------------------------------- |
| Top  | Display label on the left, inline with input. |
| Left | Display label blocked on top of input         |

Default: `LabelPosition.Top`

---

#### `required: boolean`

> It set, the label of the field will be suffixed by a red asterisk.

Default: `false`

---

#### `useFieldset: boolean`

> If true, FormField uses a `fieldset` and a `legend` element instead of a div and a label. This is
> required for accessibility on radio groups. If you're using a `RadioGroup` inside of FormField,
> make sure you set this to true.

Default: `false`

---

# Hint

> Component implementing hint text styling for forms.

## Usage

```tsx
import * as React from 'react;
import {Hint} from '@workday/canvas-kit-react/form-field';

<Hint error={Hint.ErrorType.Error}>
  This field is required.
</Hint>
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<Hint error={Hint.ErrorType.Alert} />
```

## Component Props

### Optional

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Displays "Error:" prefix        |
| Alert | Yellow outline with alert icon. |

---

# Label

> Component implementing label text styling for forms.

## Usage

```tsx
import * as React from 'react;
import {Label} from '@workday/canvas-kit-react/form-field';

<Label error={Label.LabelPosition.Left}>
  Label
</Label>
```

## Static Properties

#### `Position: FormFieldLabelPosition`

```tsx
<Label error={Label.Position.Left} />
```

## Component Props

### Optional

#### `labelPosition: FormFieldLabelPosition`

> Position of the label.

| Type | Description                                   |
| ---- | --------------------------------------------- |
| Top  | Display label on the left, inline with input. |
| Left | Display label blocked on top of input         |

Default: `LabelPosition.Top`

---

#### `htmlFor: string`

> The ID of the input being labelled. This is required for accessibility.
