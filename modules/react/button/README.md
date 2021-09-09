# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

For `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `DeleteButton`, or `IconButton`, view the
[documentation on Storybook](https://workday.github.io/canvas-kit/?path=/docs/components-buttons-button-react--primary).

[> Workday Design Reference](https://design.workday.com/components/buttons/buttons)

---

## Installation

```sh
yarn add @workday/canvas-kit-react
```

---

# Hyperlink

```tsx
import * as React from 'react';
import {Hyperlink} from '@workday/canvas-kit-react/button';

<Hyperlink href={url}>Link</Hyperlink>;
```

Hyperlink will apply our link styling, but follow the font styles of it's container (size, weight,
line-height, etc.).

## Component Props

### Required

> None

### Optional

#### `href: string`

> The href url of the anchor tag

---

#### `as: React.ElementType`

> The alternative container type for the button. If `as="a"` is provided, We use Emotion's special
> `as` prop to render an `a` tag instead of a `button`.

> When defined, all props available via `React.AnchorHTMLAttributes<HTMLAnchorElement>` (e.g.
> `href`, `target`, etc.) become available.

Default: `undefined`

---

---

# ToolbarIconButton

> Button containing an icon. Icon may be a component from
> [`canvas-kit-react-icon`](../../icon/react) or an svg element. Note: This button is intended to be
> used within a toolbar.

## Usage

```tsx
import * as React from 'react';
import {ToolbarIconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

<ToolbarIconButton icon={activityStreamIcon} aria-label="Activity Stream" />;
```

## Static Properties

> None

## Component Props

### Required

#### `aria-label: string`

> The accessibility label to indicate the action triggered by clicking the toolbar icon button.

---

### Optional

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

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

#### `icon: CanvasSystemIcon`

> The icon of the button. Optional because ToolbarIconButton can also wrap a SystemIcon component.

---

#### `shouldMirrorIcon: boolean`

> If set to `true`, transform the SVG's x-axis to mirror the graphic

Default: `false`

---

# ToolbarDropdownButton

> Button containing an icon or custom element. Icon may be a component from
> [`canvas-kit-react-icon`](../../icon/react) or an svg element. By default, the button has a down
> chevron to the right indicating that it's a dropdown button. Note: This button is intended to be
> used within a toolbar.

## Usage

```tsx
import * as React from 'react';
import {ToolbarDropdownButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
<ToolbarDropdownButton icon={activityStreamIcon} aria-label="Activity Stream" />;
```

## Static Properties

> None

## Component Props

### Required

#### `aria-label: string`

> The accessibility label to indicate the action triggered by clicking the toolbar icon button.

---

### Optional

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

### `icon: CanvasSystemIcon`

> The icon of the button. Optional because ToolbarDropdownButton can also wrap a SystemIcon
> component.

---

#### `shouldMirrorIcon: boolean`

> If set to `true`, transform the SVG's x-axis to mirror the graphic

Default: `false`

---

### Deprecated Buttons

> We have rolled out our next iteration of our buttons and will be deprecating the old style (orange
> primary, and accompanying secondary, and delete). These are still avialable, but will be removed
> in the first major release after they are available for all Workday customers. The biggest change
> is with regards to colors and styling, but the behavior should remain the same.

If you need to continue to use the old style buttons, you can use the `deprecated_Button` component.
Usage will be the same as before, but you must change your imports. Note: this will be removed
entirely in a future release.

```tsx
import * as React from 'react';
import {deprecated_Button as Button} from '@workday/canvas-kit-react/button';

<Button>Button Label</Button>;
```

Deprecation tags have been added to all the pieces regarding the old buttons including it's types
and the component itself. Tslint and your IDE should reflect this warning but you should still be
able to compile your code.
