# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

For `PrimaryButton`, `SecondaryButton`, `TertiaryButton` or `DeleteButton`, view the
[documentation on Storybook](https://workday.github.io/canvas-kit/?path=/docs/components-buttons--docs).

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

# BaseButton

As part of the restructure of our Buttons, we've created a low level `BaseButton` component. This
component isn't intended to be used outside of Canvas Kit, but we do export it for very specific use
cases which we'll outline below. The `BaseButton` is a styled `button` element which extends our
style properties which allow us to customize a buttons `colors`, `padding`, `width` and other style
properties.

Basic example:

```tsx
import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {BaseButton} from '@workday/canvas-kit-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';

const getBasicButtonColors = () => {
  return {
    default: {
      background: colors.blueberry400,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    hover: {
      background: colors.blueberry500,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    active: {
      background: colors.blueberry500,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    focus: {
      background: colors.blueberry400,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    disabled: {
      background: colors.blueberry400,
    },
  };
};

export type BasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export const BasicButton = ({children, ...elemProps}: BasicButtonProps) => {
  return (
    <BaseButton colors={getPaginationButtonColors(toggled)} {...elemProps}>
      <BaseButton.Label>{children}</BaseButton.Label>
      <BaseButton.Icon icon={plusIcon} />
    </BaseButton>
  );
};
```

**Note:** Under the hood, `BaseButton` uses our `Box` component which allows `BaseButton` to accept
style properties. Because of the flexibility of this component, consumers can use this to create
toggled buttons or a specific button that doesn't fall under the main use case you see in our design
system.

**Disclaimer** We strongly advise consumers not to use this component if possible and to rely on our
`PrimaryButton`, `SecondaryButton` and `TertiaryButton` when possible.
