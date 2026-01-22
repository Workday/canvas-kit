# Canvas Kit Select (with Canvas-styled Menu)

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/preview-react/README.md">
  <img src="https://img.shields.io/badge/PREVIEW-beta-blueviolet" alt="PREVIEW: Beta" />
</a> This component is in Preview because it has not been converted to a [Compound Component](../../docs/mdx/COMPOUND_COMPONENTS.mdx) yet.

A Canvas-styled Select with a Canvas-styled menu. This is a
[_controlled_](https://reactjs.org/docs/forms.html#controlled-components) component.

Undocumented props (`disabled`, `name`, etc.) should behave similarly to how you would expect from a
standard `<select>` element.

The menu is rendered using a portal by way of the Canvas Kit Popper.

**Note:** There is also a non-Labs Select. The non-Labs Select uses the standard browser-provided
menu whereas the Labs Select uses a custom Canvas-styled menu.

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

#### Example

In this example, `options` is an array of objects. Each option contains a `label` (analagous to the
text content of an `<option>`) and a `value` (analagous to the `value` attribute of an `<option>`).

**Note:** While a base Select component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [`FormField`](../../../form-field/react) to be made
fully accessible (see below).

```tsx
import * as React from 'react';
import {Select} from '@workday/canvas-kit-preview-react/select';

function Example() {
  const options = [
    {label: 'E-mail', value: 'email'},
    {label: 'Phone', value: 'phone'},
    {label: 'Fax (disabled)', value: 'fax', disabled: true},
    {label: 'Mail', value: 'mail'},
  ];

  const [value, setValue] = React.useState('email');

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  return <Select onChange={handleChange} options={options} value={value} />;
}
```

#### Accessible Example

```tsx
import * as React from 'react';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';

function Example() {
  const options = [
    {label: 'E-mail', value: 'email'},
    {label: 'Phone', value: 'phone'},
    {label: 'Fax (disabled)', value: 'fax', disabled: true},
    {label: 'Mail', value: 'mail'},
  ];

  const [value, setValue] = React.useState('email');

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <FormField label="My Select Field" inputId="my-select-field">
      <Select onChange={handleChange} options={options} value={value} />
    </FormField>
  );
}
```

#### Example with Array of Strings

`options` may also be formatted as an array of strings rather than an array of objects.

```tsx
import * as React from 'react';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';

function Example() {
  const options = ['California', 'Florida', 'New York', 'Pennsylvania', 'Texas'];

  const [value, setValue] = React.useState('California');

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <FormField label="My Select Field" inputId="my-select-field">
      <Select onChange={handleChange} options={options} value={value} />
    </FormField>
  );
}
```

#### Example with Custom Options Data

Each option in `options` may contain a `data` object with any number of key/value pairs. This `data`
object is carried over to the `option` passed into the `renderOption` function where it may then be
used to customize how each option is rendered.

```tsx
import * as React from 'react';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {colors, typeColors} from '@workday/canvas-kit-react/tokens';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

function Example() {
  const options = [
    {value: 'Activity Stream', data: {icon: activityStreamIcon}},
    {value: 'Avatar', data: {icon: avatarIcon}},
    {value: 'Upload Cloud', data: {icon: uploadCloudIcon}},
    {value: 'User', data: {icon: userIcon}},
  ];

  const renderOption = option => {
    const iconColor = option.focused ? typeColors.inverse : colors.blackPepper100;
    return (
      <div style={{alignItems: 'center', display: 'flex', padding: '3px 0'}}>
        <SystemIcon icon={option.data.icon} color={iconColor} colorHover={iconColor} />
        <div style={{marginLeft: 5}}>{option.value}</div>
      </div>
    );
  };

  const [value, setValue] = React.useState('Activity Stream');

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <FormField label="My Select Field" inputId="my-select-field">
      <Select onChange={handleChange} options={options} renderOption={renderOption} value={value} />
    </FormField>
  );
}
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<Select error={Select.ErrorType.Caution} />
```

## Component Props

### Required

#### `options: (Option | string)[]`

> The options of the Select. `options` may be an array of objects or an array of strings.
>
> If `options` is an array of objects, each object must adhere to the `Option` interface:
>
> - `data: object` (optional)
> - `disabled: boolean` (optional)
> - `id: string` (optional, a random `id` will be assigned to the object if one isn't provided)
> - `label: string` (optional, analagous to the text content of an `<option>`)
> - `value: string` (required, analagous to the `value` attribute of an `<option>`)
>
> If `label` is omitted, the `value` will be used to render the option.
>
> The `data` object is carried over to the `option` passed into the `renderOption` function where it
> may then be used to customize how each option is rendered.

### Optional

#### `error: ErrorType`

> The type of error associated with the Select (if applicable).

| Type  | Description     |
| ----- | --------------- |
| Error | Red outline.    |
| Alert | Orange outline. |

---

#### `ref: React.Ref<HTMLButtonElement>`

> A ref to be forwarded to the underlying `<button>` element (the collapsed form of the Select
> component is rendered as a `<button>`). Use this to imperatively modify the button element.

Default: `undefined`

---

#### `renderOption: (option: RenderableOption) => React.ReactNode`

> The function called to render the content of each option.
>
> The `option` argument passed to the function is an object which contains the following:
>
> - `data: object` (data object carried over from the corresponding option originally passed into
>   the component)
> - `disabled: boolean`
> - `focused: boolean` (set to `true` if the option has keyboard focus)
> - `id: string`
> - `label: string`
> - `selected: boolean` (set to `true` if the option is selected)
> - `value: string`
>
> If you omit the `renderOption` prop, each option will be rendered using a default `renderOption`
> function provided by the component.

---

#### `value: string`

> The value of the Select.
