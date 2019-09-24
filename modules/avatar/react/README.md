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
import {Avatar, AvatarVariant} from '@workday/canvas-kit-react-avatar';

// Basic
<Avatar />

// Using static properties on Avatar
<Avatar
  size={Avatar.Size.xs}
  variant={Avatar.Variant.Dark}
/>

// Using AvatarVariant import directly
<Avatar size={Avatar.Size.xs} variant={AvatarVariant.Dark} />
```

## Static Properties

#### `variant: AvatarVariant`

```tsx
<Avatar variant={Avatar.Variant.Dark} />
```

---

#### `Size: SystemIconCircleSize | number`

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

#### `variant: AvatarVariant`

> The variant of the avatar if using a default image.

Default: `AvatarVariant.Light`

| Variant | Description                      |
| ------- | -------------------------------- |
| `Light` | Light grey background, dark icon |
| `Dark`  | Dark blue background, white icon |

---

#### `size: SystemIconCircleSize | number`

> The diameter of the avatar in pixels

Default: `Avatar.Size.m`

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

# Canvas Kit AvatarButton

Button containing an Avatar.

## Usage

```tsx
import * as React from 'react';
import {AvatarButton, AvatarVariant} from '@workday/canvas-kit-react-avatar';

// Basic
<AvatarButton />

// Using static properties on AvatarButton
<AvatarButton
  size={AvatarButton.Size.xs}
  variant={AvatarButton.Variant.Dark}
  onClick={() => { window.alert('AvatarButton Clicked') }}
/>

// Using AvatarVariant import directly
<AvatarButton size={AvatarButton.Size.xs} variant={AvatarVariant.Dark} />
```

## Static Properties

#### `Variant: AvatarVariant`

```tsx
<AvatarButton variant={AvatarButton.Variant.Dark} />
```

---

#### `Size: SystemIconCircleSize | number`

```tsx
<AvatarButton size={AvatarButton.Size.xs} />

// Custom Size.
// Note: Please use the predefined sizes as it works nicely with the Canvas Design System
<AvatarButton size={48} />
```

## Component Props

### Required

> None

### Optional

#### `Variant: AvatarVariant`

> The variant of the avatar if using a default image.

Default: `AvatarVariant.Light`

| Variant | Description                      |
| ------- | -------------------------------- |
| `Light` | Light grey background, dark icon |
| `Dark`  | Dark blue background, white icon |

---

#### `size: SystemIconCircleSize | number`

> The diameter of the avatar in pixels

Default: `AvatarButton.Size.m`

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
