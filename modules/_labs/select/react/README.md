# Canvas Kit Select (with Canvas-styled Menu)

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

A Canvas-styled Select with a Canvas-styled menu. This is a
[_controlled_](https://reactjs.org/docs/forms.html#controlled-components) component.

Undocumented props (`disabled`, `name`, etc.) should behave similarly to how you would expect from a standard `<select>` element.

**Note:** There is also a non-Labs Select. The non-Labs Select uses the default-styled menu whereas the Labs Select uses a custom Canvas-styled menu.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-select
```

## Usage

#### Example

In this example, `options` is an array of objects. Each option contains a `label` (analagous to the text content of an `<option>`) and a `value` (analagous to the `value` attribute of an `<option>`).

**Note:** While a base Select component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [`FormField`](../canvas-kit-react-form-field/README.md)
to be made fully accessible (see below).

```tsx
import * as React from 'react';
import Select from '@workday/canvas-kit-labs-react-select';

const options = [
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Fax (disabled)', value: 'fax', disabled: true},
  {label: 'Mail', value: 'mail'},
];

<Select name="contact" onChange={this.handleChange} options={options} value={value} />;
```

#### Accessible Example

```tsx
import * as React from 'react';
import Select from '@workday/canvas-kit-labs-react-select';
import FormField from '@workday/canvas-kit-react-form-field';

const options = [
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Fax (disabled)', value: 'fax', disabled: true},
  {label: 'Mail', value: 'mail'},
];

<FormField label="My Field" inputId="my-select-field">
  <Select name="contact" onChange={this.handleChange} options={options} value={value} />
</FormField>;
```

#### Example with Array of Strings

`options` may also be formatted as an array of strings rather than an array of objects.

```tsx
import * as React from 'react';
import Select from '@workday/canvas-kit-labs-react-select';
import FormField from '@workday/canvas-kit-react-form-field';

const options = ['California', 'Florida', 'New York', 'Pennsylvania', 'Texas'];

<FormField label="My Field" inputId="my-select-field">
  <Select name="state" onChange={this.handleChange} options={options} value={value} />
</FormField>;
```

#### Example with Custom Options

Each option in `options` may contain any number of other key/value pairs. You may then define your own `renderOption` function to customize how each option is rendered using that custom data.

```tsx
import * as React from 'react';
import Select from '@workday/canvas-kit-labs-react-select';
import FormField from '@workday/canvas-kit-react-form-field';
import {colors, typeColors} from '@workday/canvas-kit-react-core';
import {activityStreamIcon, avatarIcon, uploadCloudIcon, userIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

const options = [
  {value: 'Activity Stream', icon: activityStreamIcon},
  {value: 'Avatar', icon: avatarIcon},
  {value: 'Upload Cloud', icon: uploadCloudIcon},
  {value: 'User', icon: userIcon},
];

const renderOption = option => {
  const iconColor = option.focused ? typeColors.inverse : colors.blackPepper100;
  return (
    <div style={{alignItems: 'center', display: 'flex', padding: '3px 0'}}>
      <SystemIcon icon={option.icon} color={iconColor} colorHover={iconColor} />
      <div style={{marginLeft: 5}}>{option.value}</div>
    </div>
  );
};

<FormField label="My Field" inputId="my-select-field">
  <Select name="icon" onChange={this.handleChange} options={options} renderOption={renderOption} value={value} />
</FormField>;
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<Select error={Select.ErrorType.Alert} />
```

## Component Props

### Required

#### `options: (Option | string)[]`

> The options of the Select. `options` may be an array of objects or an array of strings.
>
> If `options` is an array of objects, each object must adhere to the `Option` interface:
>
> * `value: string` (required, analagous to the `value` attribute of an `<option>`)
> * `disabled: boolean` (optional)
> * `id: string` (optional, a random `id` will be assigned to the object if one isn't provided)
> * `label: string` (optional, analagous to the text content of an `<option>`)
>
> If `label` is omitted, the `value` will be used to render the option.
>
> Additionally, each option may contain any number of other key/value pairs. These keys will be passed through to the `option` parameter of the `renderOption` prop and may be used to customize how each option is rendered.

### Optional

#### `error: ErrorType`

> The type of error associated with the Select (if applicable).

| Type  | Description     |
| ----- | --------------- |
| Error | Red outline.    |
| Alert | Orange outline. |

---

#### `renderOption: (option: NormalizedOption) => React.ReactNode`

> The function called to render the content of each option.
>
> The `option` argument passed to the function is an object which contains the following:
>
> * `disabled: boolean`
> * `focused: boolean` (set to `true` if the option has keyboard focus)
> * `id: string`
> * `label: string`
> * `selected: boolean` (set to `true` if the option is selected)
> * `value: string`
>
> Additionally, each `option` will contain any other key/value pairs you defined in the `options` prop.
>
> If you omit the `renderOption` prop, each option will be rendered using a default `renderOption` function provided by the component.

---

#### `value: string`

> The value of the Select.
