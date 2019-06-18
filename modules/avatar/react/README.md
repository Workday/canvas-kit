# Canvas Kit Avatar

A component showing a user's photo with a circular crop.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-avatar
```

## Usage

```tsx
import * as React from 'react';
import {Avatar, AvatarTheme, AvatarSize} from '@workday/canvas-kit-react-avatar';

// Basic
<Avatar />

// Using static properties on Avatar
<Avatar
  size={Avatar.Size.xs}
  themeColor={Avatar.ThemeColor.Dark}
  onClick={() => { window.alert('Avatar Clicked') }}
/>

// Using AvatarTheme and AvatarSize imports directly
<Avatar size={AvatarSize.xs} themeColor={AvatarTheme.Dark} />
```

## Static Properties

#### `ThemeColor: AvatarTheme`

```tsx
<Avatar themeColor={Avatar.ThemeColor.Dark} />
```

---

#### `Size: AvatarSize | number`

```tsx
<Avatar size={Avatar.Size.xs} />

// Custom Size.
// Note: Please use the predefined sizes as it works nicely with the Canvas Design System
<Avatar size={48} />
```

## Component Props

### Required

> None

### Optional

#### `themeColor: AvatarTheme`

> The theme of the avatar if using a default image.

Default: `AvatarTheme.Light`

| Theme   | Description                      |
| ------- | -------------------------------- |
| `Light` | Light grey background, dark icon |
| `Dark`  | Dark blue background, white icon |

---

#### `size: AvatarSize`

> The diameter of the avatar in pixels

Default: `AvatarSize.m`

| Name  | Size (px) |
| ----- | --------- |
| `xs`  | 16        |
| `s`   | 24        |
| `m`   | 32        |
| `l`   | 40        |
| `xl`  | 64        |
| `xxl` | 120       |

---

#### `altText: string`

> Text describing what the avatar is showing.

---

#### `url: string`

> The URL of the user's photo. Expects a square (1:1) photo.

---

#### `buttonRef: React.Ref<HTMLButtonElement>`

> A ref to the underlying `<button>` element.

---

#### `onClick: (React.SyntheticEvent) => void`

> A `click` event handler for this component.
