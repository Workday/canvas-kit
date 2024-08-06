# Canvas Kit Avatar

A component showing a user's photo with a circular crop.

## Installation

```sh
yarn add @workday/canvas-kit-react
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

---

#### `altText: string`

> The alt text of the Avatar image. This prop is also used for the aria-label.

---

#### `url: string`

> The URL of the user's photo. Expects a square (1:1) photo.

---


---

#### `objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset"`

> An objectFit property that can customize how to resize your image to fit its container.

---

#### `ref: React.Ref<HTMLButtonElement>`

> A ref to the underlying `<button>` or `<div>` element.

---

#### `as: 'div'`

> Option to display the avatar as a div instead of a button.
