# Canvas Kit Avatar

A component showing a user's photo with a circular crop.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

```tsx
import * as React from 'react';
import {Avatar, AvatarVariant} from '@workday/canvas-kit-react/avatar';

// Basic button with click handler
<Avatar onClick={someFunction} />

// Rendering as a div instead of a button
<Avatar as="div" />

// Using static properties on Avatar
<Avatar
  size="extraSmall"
  variant="dark"
/>
```

## Component Props

### Required

> None

### Optional

#### `variant: "light" | "dark"`

> The variant of the avatar if using a default image.

Default: "light"

| String  | Description                      |
| ------- | -------------------------------- |
| "light" | Light grey background, dark icon |
| "dark"  | Dark blue background, white icon |

```tsx
<Avatar variant="dark" />
```

---

#### `size: "extraSmall" | "small" | "medium" | "large" | "extraLarge" | "extraExtraLarge" | (string & {})`

> The diameter of the avatar in pixels. Can be given custom size as a string in either px or rem.

Default: "medium"

| Name              | Size (px) |
| ----------------- | --------- |
| "extraSmall"      | 16        |
| "small"           | 24        |
| "medium"          | 32        |
| "large"           | 40        |
| "extraLarge"      | 64        |
| "extraExtraLarge" | 120       |

```tsx
<Avatar size="large" />

// Custom Size.
// Note: Please use the predefined sizes as it works nicely with the Canvas Design
System

<Avatar size="48px"/>
```

---

#### `altText: string`

> The alt text of the Avatar image. This prop is also used for the aria-label.

```tsx
<Avatar altText="User-Avatar-Button" />
```

---

#### `url: string`

> The URL of the user's photo. Expects a square (1:1) photo.

```tsx
<Avatar url="https://example.com/image.png" />
```

---

#### `onClick: (e: React.MouseEvent<HTMLButtonElement>) => void`

> An onClick function to pass to the underlying `<button>` element.

```tsx
<Avatar onClick={fn} />
```

---

#### `objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset"`

> An objectFit property that can customize how to resize your image to fit its container.

```tsx
<Avatar url="https://example.com/image.png" objectFit="cover" />
```

---

#### `ref: React.Ref<HTMLButtonElement>`

> A ref to the underlying `<button>` or `<div>` element.

```tsx
<Avatar ref={ref} />
```

---

#### `as: 'div'`

> Option to display the avatar as a div instead of a button.

```tsx
<Avatar as="div" />
```
