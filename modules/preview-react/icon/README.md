# Assets

Assets are graphics used to communicate meaning or highlight areas of interaction within user
interfaces. They enhance usability, reinforce metaphors, and bring clarity to components and
patterns. Assets may be presented individually or grouped with related information in components.

## Types of Assets

Assets in the Canvas Kit design system are organized into two primary types:

- **System Icons:** Utility icons intended for use in UI actions and functional controls.
- **Expressive Icons:** Decorative icons used to add additional context.

## System Icons

System Icons are small symbols used to convey simple actions and functions. They are the most common
icons encountered in products and help communicate metaphors at a glance.

For detailed documentation, refer to the
[System Icon Docs](https://canvas.workdaydesign.com/styles/assets/system-icons).

### Install

System Icon props closely mirror those of the `SystemIconCircle` component. Key props you may use
include:

| Prop         | Type             | Description                                                     |
| ------------ | ---------------- | --------------------------------------------------------------- |
| `icon`       | CanvasSystemIcon | Icon asset from `@workday/canvas-system-icons-web`              |
| `color`      | string           | Sets the main icon’s (fill and accent layers) color             |
| `accent`     | string           | Accent layer color for the system icon                          |
| `inverse`    | boolean          | If set to `true`, the icon will be displayed in inverse variant |
| `size`       | string, number   | The size of the icon                                            |
| `background` | string           | Color behind (or inside) the icon, used for the circular style  |

To use System Icons, install the following packages:

```sh
npm install @workday/canvas-kit-preview-react @workday/canvas-system-icons-web
```

### System Icon Component

```tsx
import { colors } from '@workday/canvas-kit-react/tokens';
import { SystemIcon } from '@workday/canvas-kit-preview-react/icon';
import { activityStreamIcon } from '@workday/canvas-system-icons-web';

<SystemIcon icon={activityStreamIcon} />
<SystemIcon icon={activityStreamIcon} color={system.color.accent.info} />
<SystemIcon
  icon={activityStreamIcon}
  accent={system.color.accent.info}
  color={system.color.accent.info}
  background={system.color.surface.info.default}
/>
<SystemIcon icon={activityStreamIcon} size="xl" />
```

**Props**

| Prop                  | Type               | Description                                                                                                                                                                                                                                                                       |
| --------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`icon` (required)** | `CanvasSystemIcon` | The icon asset from `@workday/canvas-system-icons-web`.                                                                                                                                                                                                                           |
| `color`               | string             | Sets the main icon’s (fill and accent layers) color.                                                                                                                                                                                                                              |
| `accent`              | string             | Accent layer color for the system icon.                                                                                                                                                                                                                                           |
| `inverse`             | `boolean`          | If set to `true`, the icon will be displayed in inverse variant.                                                                                                                                                                                                                  |
| `size`                | `string`, `number` | The size of the icon circle wrapper                                                                                                                                                                                                                                               |
| `shouldMirror`        | boolean            | If set to `true`, transform the SVG's x-axis to mirror the graphic. Use this if you want to always mirror the icon regardless of the content direction. If the SVG should mirror only when in an right-to-left language, use `shouldMirrorInRTL` instead.                         |
| `shouldMirrorInRTL`   | boolean            | If set to `true`, transform the SVG's x-axis to mirror the graphic when the content direction is `rtl`. Icons don't have enough context to know if they should be mirrored in all cases. Setting this to `true` indicates the icon should be mirrored in right-to-left languages. |

---

## System Icon Circle

A system icon with a colored circular background. Icon color will be determined based on contrast
against the background color provided.

### Usage

```tsx
import { colors } from '@workday/canvas-kit-react/tokens';
import { SystemIconCircle } from '@workday/canvas-kit-preview-react/icon';
import { shieldIcon } from '@workday/canvas-accent-icons-web';

<SystemIconCircle icon={shieldIcon} />
<SystemIconCircle icon={shieldIcon} background={system.color.accent.warning} />
<SystemIconCircle icon={shieldIcon} shouldMirror={true} />
```

**Props**

| Prop                  | Type               | Description                                                                                                                                                                                                                                                                       |
| --------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`icon` (required)** | `CanvasSystemIcon` | The icon asset from `@workday/canvas-system-icons-web`.                                                                                                                                                                                                                           |
| `color`               | string             | Sets the icon color.                                                                                                                                                                                                                                                              |
| `background`          | string             | Sets background color of the icon circle wrapper.                                                                                                                                                                                                                                 |
| `inverse`             | `boolean`          | If set to `true`, the icon will be displayed in inverse variant.                                                                                                                                                                                                                  |
| `size`                | `string`, `number` | The size of the icon circle wrapper                                                                                                                                                                                                                                               |
| `shouldMirror`        | boolean            | If set to `true`, transform the SVG's x-axis to mirror the graphic. Use this if you want to always mirror the icon regardless of the content direction. If the SVG should mirror only when in an right-to-left language, use `shouldMirrorInRTL` instead.                         |
| `shouldMirrorInRTL`   | boolean            | If set to `true`, transform the SVG's x-axis to mirror the graphic when the content direction is `rtl`. Icons don't have enough context to know if they should be mirrored in all cases. Setting this to `true` indicates the icon should be mirrored in right-to-left languages. |

- The `size` prop accepts a string or number value.
- The preview component has `inverse` prop for inverse variant.

---

## Expressive Icons

Expressive icons are decorative and are used to provide additional illustration or context, but are
not a strict "language" of UI actions.

### Usage

```tsx
import { ExpressiveIcon } from '@workday/canvas-kit-preview-react/icon';
import { astronomyIcon } from '@workday/canvas-expressive-icons-web';

<ExpressiveIcon icon={astronomyIcon} />
<ExpressiveIcon icon={astronomyIcon} size="xl" />
<ExpressiveIcon icon={astronomyIcon} color="system.color.accent.info" />
```

**Props**

| Prop                  | Type                                   | Description                                                           |
| --------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| **`icon` (required)** | `CanvasExpressiveIcon`                 | The icon asset from `@workday/canvas-expressive-icons-web`.           |
| `color`               | string                                 | Sets the icon ouline main color.                                      |
| `accent`              | string                                 | Sets the icon accent color for accent layer (`wd-icon-accent`).       |
| `size`                | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` | The size of the icon. Can use any of the available token size values. |

---

## SVG Support

You may also use your own SVG icons.

```tsx
import { SVGIcon } from '@workday/canvas-kit-preview-react/icon';

<SVGIcon src={mySVG} />
<SVGIcon src={mySVG} size={32} />
<SVGIcon src={mySVG} color="system.color.accent.info" />
```

**Props**

| Prop              | Type                                     | Description                                             |
| ----------------- | ---------------------------------------- | ------------------------------------------------------- |
| `src`             | CanvasSystemIcon or CanvasExpressiveIcon | SVG string or element                                   |
| `size`            | string, number                           | Size                                                    |
| `color`           | string                                   | Fill color                                              |
| `shouldMirror`    | boolean                                  | If `true`, mirrors (flips) the SVG horizontally         |
| `shouldMirrorRtl` | boolean                                  | If `true`, mirrors the SVG only in right-to-left layout |

---

## Additional Resources

- Full icon sets and design guidance:
  [Canvas System Assets Documentation](https://canvas.workdaydesign.com/styles/assets/overview)
