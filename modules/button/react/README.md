# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-button
```

---

## Deprecation Warning

> We are rolling out our next iteration of our buttons and will be deprecating the old style (orange
> primary, and accompanying secondary, and delete). These are still avialable, but will be removed
> in the first major release after they are available for all Workday customers. The biggest change
> is with regards to colors and styling, but the behavior should remain the same.

### New Button

Anywhere you were using `Button`, you will automatically get the updated styling (previously
`beta_Button`). This will be a visual breaking change (padding and colors have changed). Note, we
are still supporting the import for `beta_Button` as well. However, if you are using
`import {beta_Button as Button}...` you can remove it now too since this too will be removed in a
future release. The new buttons include: blue primary button, and accompanying secondary, delete,
outline, and dropdown buttons. The import and usage is documented below.

### Deprecated Buttons

If you need to continue to use the old style buttons, you can use the `deprecated_Button` class.
Usage will be the same as before, but you must change your imports. Note: this will be removed
entirely in a future release.

```tsx
import * as React from 'react';
import {deprecated_Button as Button} from '@workday/canvas-kit-react-button';

<Button>Button Label</Button>;
```

Deprecation tags have been added to all the pieces regarding the old buttons including it's types
and the component itself. Tslint and your IDE should reflect this warning but you should still be
able to compile your code.

---

## Button

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';

<Button>Button Label</Button>;
```

## Static Properties

#### `Sizes: ButtonSize`

```tsx
<Button size={Button.Size.Small}>Small Button</Button>
```

---

#### `Types: ButtonVariant`

```tsx
<Button variant={Button.Variant.Primary}>Primary Button</Button>
```

## Component Props

### Required

#### `children: ReactNode`

> Buttons cannot be empty

### Optional

#### `variant: ButtonVariant`

> The type of the button

Default: `ButtonVariant.Secondary`

| Theme       | Description                     |
| ----------- | ------------------------------- |
| `Primary`   | Blue background, white text     |
| `Secondary` | Gray background, dark gray text |
| `Delete`    | Red background, dark text       |

---

#### `size: ButtonSize`

> The type of the button

Default: `ButtonSize.Large`

| Theme    | Description                            |
| -------- | -------------------------------------- |
| `Small`  | 18px tall, small padding, small text   |
| `Medium` | 24px tall, medium padding, medium text |
| `Large`  | 40px tall, large padding, larger text  |

---

#### `grow: boolean`

> If true, the button will grow to its container's width.

Default: `false`

---

#### `buttonRef: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

# Icon Button

> Button containing an icon. Icon may be a component from
> [`canvas-kit-react-icon`](../../icon/react) or an svg element.

## Usage

```tsx
import * as React from 'react';
import {IconButton} from '@workday/canvas-kit-react-button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

<IconButton title="Activity Stream" aria-label="Activity Stream">
  <SystemIcon icon={activityStreamIcon} />
</IconButton>;

<IconButton icon={activityStreamIcon} title="Activity Stream" aria-label="Activity Stream" />;
```

## Static Properties

#### `Sizes: ButtonSize`

```tsx
<IconButton size={IconButton.Size.Small} icon={xIcon} />
```

---

#### `Types: IconButtonVariant`

```tsx
<IconButton variant={IconButton.Variant.Plain} icon={xIcon} />
```

## Component Props

> Same as [`Button`](#canvas-kit-button) Undocumented props are spread to the `button` element.

---

### Required

#### `aria-label: string`

> The accessibility label to indicate the action triggered by clicking the icon button.

---

### Optional

#### `variant: IconButtonVariant`

> The type of the icon button

Default: `IconButtonVariant.Circle`

| Theme           | Description                                      |
| --------------- | ------------------------------------------------ |
| `Square`        | Square, white background, dark gray icon         |
| `SquareFilled`  | Square, gray background, dark gray icon          |
| `Plain`         | Dark gray icon                                   |
| `Circle`        | Circular, dark gray icon                         |
| `CircleFilled`  | Circular, gray background, dark gray icon        |
| `Inverse`       | Circular, transparent background, white icon     |
| `InverseFilled` | Circular, semitransparent background, white icon |

---

#### `size: ButtonSize.Small | ButtonSize.Medium`

> The size of the icon button

Default: `ButtonSize.Medium`

| Theme                       | Description                   | Is Default |
| --------------------------- | ----------------------------- | ---------- |
| `Small`                     | 32px Diameter, 20px Icon Size | False      |
| `Medium`                    | 40px Diameter, 24px Icon Size | True       |
| `Small` (Square Icon Type)  | 32px x 32px, 24px Icon Size   | True       |
| `Medium` (Square Icon Type) | 40px x 40px, 24px Icon Size   | False      |

---

#### `toggled: boolean | undefined`

> If defined as a boolean, then it manages the button state: on (`true`) or off (`false`). This is a
> [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) `button` component. If
> left `undefined` then the button is not considered toggle-able (`aria-pressed` is `undefined`) and
> will act as a normal button.

Default: `undefined`

---

#### `onToggleChange: (toggled: boolean | undefined) => void`

> The callback that is fired when a button toggle prop changes This is true when the toggle changes
> from `true` to `false` but also if you disable the toggle-ability of a button (in other words, if
> `toggle` changes from a `boolean` to `undefined`). This is important because the `aria-pressed`
> attribute for accessibility is goverened by whether or not the `toggle` prop is defined.

---

#### `value: string`

> Value of the button. Must be unique if used within an IconButtonToggleGroup.

## Accessibility Notes

> The content of an IconButton is not always clear to the user. In order to better convey what the
> icon represents, the IconButton should be initialized with `title` and `aria-label` attributes.

# Icon Button Toggle Group

> Group of buttons containing an icon. This is a
> [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) component.

## Usage

```tsx
import * as React from 'react';
import {IconButton, IconButtonToggleGroup} from '@workday/canvas-kit-react-button';
import {listViewIcon, worksheetsIcon} from '@workday/canvas-system-icons-web';

<IconButtonToggleGroup>
  <IconButton icon={listViewIcon} value="list-view" title="List View" aria-label="List View" />
  <IconButton icon={worksheetsIcon} value="table-view" title="Worksheets" aria-label="Worksheets" />
</IconButtonToggleGroup>;
```

**Note:** while managing state using a unique `value` for each `IconButton` child is encouraged, you
can also use indexes and omit the `value` field. It is strongly recommended to not mix these two
methods.

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<IconButton>[]`

> Icon buttons to toggle between.

---

### Optional

#### `value: string | number`

> Identify which item is selected (toggled=true).  
> If a string is passed, the IconButton with the corresponding value will be selected.  
> If a number is passed, the IconButton with the corresponding index will be selected.

---

#### `isRTL: boolean`

> Identify whether to render from right to left

---

#### `onChange: (value:string | number)=> void`

> Callback function when a toggle button is selected. The value (if defined) or the index of the
> button will be returned.
