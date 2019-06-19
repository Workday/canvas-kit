# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

#### Disclaimer

> The documentation below is for the current Canvas buttons. The next iteration of our buttons have
> been implemented in this module, but will not be documented until we're ready to roll them out
> across all our products. We want to discourage their use until everyone can uptake them
> simultaneously for consistencies sake.
>
> The new buttons include new `ButtonTypes`, icon support, and the `ButtonSizes` equate to different
> button and font sizes.
>
> **If you would like to use the new buttons, please consult the design systems team and get
> approval first**

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-button
```

## Usage

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';

<Button>Button Label</Button>;
```

## Static Properties

#### `Sizes: ButtonSizes`

```tsx
<Button buttonSize={Button.Sizes.Small}>Small Button</Button>
```

---

#### `Types: ButtonTypes`

```tsx
<Button buttonType={Button.Types.Primary}>Primary Button</Button>
```

## Component Props

### Required

#### `children: ReactNode`

> Buttons cannot be empty

### Optional

#### `buttonType: ButtonTypes`

> The type of the button

Default: `ButtonTypes.Secondary`

| Theme       | Description                     |
| ----------- | ------------------------------- |
| `Primary`   | Orange background, white text   |
| `Secondary` | Gray background, dark gray text |
| `Delete`    | Red background, dark text       |

---

#### `buttonSize: ButtonSizes`

> The type of the button

Default: `ButtonSizes.Large`

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

#### `Sizes: ButtonSizes`

```tsx
<IconButton buttonSize={IconButton.Sizes.Small} icon={xIcon} />
```

---

#### `Types: IconButtonTypes`

```tsx
<IconButton buttonType={IconButton.Types.Plain} icon={xIcon} />
```

## Component Props

> Same as [`Button`](#canvas-kit-button) Undocumented props are spread to the `button` element.

---

### Optional

#### `buttonType: IconButtonTypes`

> The type of the icon button

Default: `IconButtonTypes.Circle`

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

#### `buttonSize: IconButton.Sizes.Small | IconButton.Sizes.Medium`

> The size of the icon button

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
