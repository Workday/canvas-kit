# Canvas Kit Radio

Input of type radio

Coming soon:

- Error/Alert handling

[> Workday Design Reference](https://design.workday.com/components/inputs/radio-buttons)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

#### Simple Example

**Note:** While a base radio component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [`FormField`](../../form-field/react) to be made fully
accessible (see below).

```tsx
import * as React from 'react';
import Radio from '@workday/canvas-kit-react/radio';

<Radio disabled={false} checked={checked} onChange={this.handleCheck} />;
```

#### Accessible Example

```tsx
import * as React from 'react';
import Radio from '@workday/canvas-kit-react/radio';
import FormField from '@workday/canvas-kit-react/form-field';

<FormField label="My Field" inputId="my-radio-field">
  <Radio disabled={false} checked={checked} onChange={this.handleCheck} />;
</FormField>;
```

If use inside a FormField doesn't work for your use case, you can use the `aria-labelledby`
attribute.

```tsx
import * as React from 'react';
import Radio from '@workday/canvas-kit-react/radio';
<label id="123">Label</label>
...
<Radio checked={checked} onChange={this.handleCheck} aria-labelledby="123" />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `checked: boolean`

> Whether or not the radio input is checked (`true`) or not checked (`false`)

Default: `false`

---

#### `disabled: boolean`

> Whether or not the radio input is disabled (not able to be checked on or off)

Default: `false`

---

#### `id: string`

> The HTML attribute `id` for the underlying radio input and label component. This is required if
> `label` is defined.

Default: A uniquely generated id

#### `label: string`

> The content of the label associated to the radio input component.

---

#### `onChange: (e: React.ChangeEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the radio input state changes.

---

#### `value: string`

> The `value` attribute of the input radio.

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the underlying radio input element. Use this to imperatively check or focus this
> component.

# Radio Button Group

> Group of radio inputs. This is a
> [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) component.

## Usage

#### Simple Example

**Note:** While a base radio group component is provided in this package, it is **not accessible**
when used as is. It should be used in tandem with [`FormField`](../../form-field/react) to be made
fully accessible (see below).

```tsx
import * as React from 'react';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

<RadioGroup name="contact">
  <Radio id="1" value="email" label="E-mail" />
  <Radio id="2" value="phone" label="Phone" />
  <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
  <Radio id="4" value="mail" label="Mail" />
</RadioGroup>;
```

#### Accessible Example

```tsx
import * as React from 'react';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import FormField from '@workday/canvas-kit-react/form-field';

<FormField label="My Field" useFieldset={true}>
  <RadioGroup name="contact">
    <Radio id="1" value="email" label="E-mail" />
    <Radio id="2" value="phone" label="Phone" />
    <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
    <Radio id="4" value="mail" label="Mail" />
  </RadioGroup>
</FormField>;
```

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<Radio>[]`

> Radio inputs to toggle between.

---

### Optional

#### `value: string | number`

> Identify which item is selected (toggled=true). If a string is passed, the Radio with the
> corresponding value will be selected.

---

#### `onChange: (value:string | number)=> void`

> Callback function when a radio input is selected. The value (if defined) or the index of the input
> will be returned.

---

#### `name: string`

> If specified, will be passed as the common `name` prop to all `Radio` children. This enables you
> to avoid specifying `name` on each child.

---

#### `grow: boolean`

> If true, the button will grow to its container's width.

Default: `false`

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

Default: `undefined`
