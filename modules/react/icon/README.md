# Canvas Kit Icon

Components assisting the rendering of Canvas accent, applet, and system icons.

A Workday asset package must be used with these components. No icons are bundled with this package.

To browse a full list of icons, take a look at the
[Canvas Design System resources](https://design.workday.com/resources) page.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

### Design Assets

Install one of the following icon packages:

```sh
@workday/canvas-accent-icons-web
@workday/canvas-applet-icons-web
@workday/canvas-system-icons-web
```

# Accent Icons

## Usage

Use with `@workday/canvas-accent-icons-web`.

```tsx
import { colors } from '@workday/canvas-kit-react/core'
import { AccentIcon } from '@workday/canvas-kit-react/icon'
import { shieldIcon } from '@workday/canvas-accent-icons-web'

<AccentIcon icon={shieldIcon} />
<AccentIcon icon={shieldIcon} color={colors.pomegranate500} />
<AccentIcon icon={shieldIcon} size={80} />
```

## Static Properties

> None

## Component Props

### Required

#### `icon: CanvasIcon`

> Icon to display from `@workday/canvas-accent-icons-web`.

### Optional

#### `color: string`

> Icon color from `@workday/canvas-colors-web`.

Default: `colors.blueberry500`

---

#### `size: number`

> Size of the icon.

Default: `56`

---

#### `transparent: boolean`

> Toggle for transparent accent icon background. If false, the background fill will be white.

Default: `false`

---

#### `iconRef: React.Ref<HTMLSpanElement>`

> Returns the ref to the rendered icon.

---

# Applet Icons

## Usage

Use with `@workday/canvas-applet-icons-web`.

```tsx
import { AppletIcon } from '@workday/canvas-kit-react/icon'
import { benefitsIcon } from '@workday/canvas-applet-icons-web'

<AppletIcon icon={benefitsIcon} />
<AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
<AppletIcon icon={benefitsIcon} size={60} />
```

## Static Properties

#### `Colors: BrandingColor`

> An enum of the various Canvas hues (`Pomegranate`, `Blueberry`, `Cinnamon`, etc.).

```tsx
<AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
```

- `Cinnamon`
- `Peach`
- `ChiliMango`
- `Cantaloupe`
- `SourLemon`
- `JuicyPear`
- `Kiwi`
- `GreenApple`
- `Watermelon`
- `Jewel`
- `Toothpaste`
- `Blueberry`
- `Plum`
- `BerrySmoothie`
- `Blackberry`
- `IslandPunch`
- `GrapeSoda`
- `Pomegranate`
- `FruitPunch`
- `RootBeer`
- `ToastedMarshmallow`
- `Cappuccino`
- `Licorice`
- `BlackPepper`

## Component Props

### Required

#### `icon: CanvasIcon`

> Icon to display from `@workday/canvas-applet-icons-web`.

### Optional

#### `color: AppletIcon.Colors`

> Icon color hue. Must use a member of the `AppletIcon.Colors` static enum.

Default: `AppletIcon.Colors.Blueberry`

---

#### `size: number`

> Size of the icon in `px`.

Default: `92`

---

#### `iconRef: React.Ref<HTMLSpanElement>`

> Returns the ref to the rendered icon.

---

# System Icons

## Usage

Use with `@workday/canvas-system-icons-web`.

```tsx
import { colors } from '@workday/canvas-kit-react/core'
import { SystemIcon } from '@workday/canvas-kit-react/icon'
import { activityStreamIcon } from '@workday/canvas-system-icons-web'

<SystemIcon icon={activityStreamIcon} />
<SystemIcon icon={activityStreamIcon} color={colors.blueberry500} />
<SystemIcon
  icon={activityStreamIcon}
  accent={colors.frenchVanilla100}
  fill={colors.blueberry500}
  background={colors.blueberry500}
/>
<SystemIcon icon={activityStreamIcon} size={48} />
```

## Static Properties

> None

## Component Props

### Required

#### `icon: CanvasIcon`

> Icon to display from `@workday/canvas-system-icons-web`

### Optional

#### `size: number`

> Size of the icon in `px`.

Default: `24`

---

#### `color: string`

> Icon color. This will define `accent` and `fill`. `accent` and `fill` will override this property
> if defined.

Default: `iconColors.standard`

---

#### `colorHover: string`

> Hover color of the icon. This will define `accentHover` and `fillHover`.

Default: `iconColors.hover`

---

#### `accent: string`

> `.wd-icon-accent` color. This will override `color`.

---

#### `accentHover: string`

> `.wd-icon-accent` color on hover. This will override `colorHover`.

---

#### `background: string`

> `.wd-icon-background` color.

Default: `'transparent'`

---

#### `backgroundHover: string`

> `.wd-icon-background` color on hover.

Default: `'transparent'`

---

#### `fill: string`

> `.wd-icon-fill` color. This will override `color`.

---

#### `fillHover: string`

> `.wd-icon-fill` color on hover. This will override `colorHover`.

---

#### `iconRef: React.Ref<HTMLSpanElement>`

> Returns the ref to the rendered icon.

---

# System Icon Circle

A system icon with a colored circular background. Icon color will be determined based on contrast
against the background color provided.

## Usage

Use with `@workday/canvas-accent-icons-web`.

```tsx
import { colors } from '@workday/canvas-kit-react/core'
import { SystemIconCircle } from '@workday/canvas-kit-react/icon'
import { shieldIcon } from '@workday/canvas-accent-icons-web'

<SystemIconCircle icon={shieldIcon} />
<SystemIconCircle icon={shieldIcon} background={colors.pomegranate500} />
```

## Static Properties

> None

## Component Props

### Required

#### `icon: CanvasIcon`

> Icon to display from `@workday/canvas-accent-icons-web`.

### Optional

#### `background: string`

> Background color from `@workday/canvas-colors-web`.

Default: `colors.soap300`

---

#### `size: SystemIconCircleSize | number`

> Size of the icon.

Default: `SystemIconCircleSize.l` (`40`)

---

#### `iconRef: React.Ref<HTMLSpanElement>`

> Returns the ref to the rendered icon.

---

# Graphics

## Usage

Use with `@workday/canvas-graphics-web`.

```tsx
import { colors } from '@workday/canvas-kit-react/core'
import { Graphic } from '@workday/canvas-kit-react/icon'
import { badgeAchievementGraphic } from '@workday/canvas-graphics-web'

<Graphic src={badgeAchievementGraphic} />
<Graphic src={badgeAchievementGraphic} width={80}/>
<Graphic src={badgeAchievementGraphic} height={80}/>
<Graphic src={badgeAchievementGraphic} grow={true} />
```

## Static Properties

#### `Size: SystemIconCircleSize`

> The size of the circle background. The icon will scale to fit.

| Size | Pixels |
| ---- | ------ |
| xs   | 16     |
| s    | 24     |
| m    | 32     |
| l    | 40     |
| xl   | 64     |
| xxl  | 120    |

## Component Props

### Required

#### `src: CanvasGraphic`

> Graphic to display from `@workday/canvas-graphics-web`

### Optional

#### `width: number | string`

> Graphic width in `px`. `width` takes precedence over `height` in order to preserve the graphic's
> ratio.

Default: `width of graphic`

---

#### `height: number | string`

> Graphic height in `px`. If set, `width` will be set to `100%`.

Default: `height of graphic`

---

#### `grow: boolean`

> Expand graphic to fit container. `grow` takes precedence over both `width` and `height`.

Default: `false`

#### `iconRef: React.Ref<HTMLSpanElement>`

> Returns the ref to the rendered icon.

---
