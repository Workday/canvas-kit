
## Opacity

Opacity tokens control transparency values for UI elements. Use them to create visual hierarchy, indicate states, and guide user focus.

## Opacity Tokens

| Token              | Value  | Usage                                    |
| ------------------- | ------ | ---------------------------------------- |
| `opacity.zero`      | `0`    | Dev only                                 |
| `opacity.disabled`  | `0.4`  | Disabled states for interactive elements on static surfaces |
| `opacity.overlay`   | `0.64` | Modal scrims and backdrop overlays       |
| `opacity.contrast`  | `0.84` | High contrast surfaces                   |
| `opacity.shadow.first` | `0.12` | Alpha on first shadow                    |
| `opacity.shadow.second` | `0.08` | Alpha on second shadow                   |
| `opacity.full`      | `1`    | Dev only                                 |

### `opacity.zero`

**Value:** `0`

Dev only. Fully transparent.

### `opacity.disabled`

**Value:** `0.4`

Use on disabled states for interactive elements on static surfaces. Avoid using this if disabled elements may appear on top of something else.

### `opacity.overlay`

**Value:** `0.64`

Use on modal scrims and overlay surfaces to create a subtle visual effect.

### `opacity.contrast`

**Value:** `0.84`

Use on high contrast surfaces like Tooltip or the contrast variant of Status Indicator.

### `opacity.shadow.first`

**Value:** `0.12`

Alpha on first shadow.

### `opacity.shadow.second`

**Value:** `0.08`

Alpha on second shadow.

### `opacity.full`

**Value:** `1`

Dev only. No transparency, fully solid.

## Usage Guidance

Use opacity to situations where background colors may be dynamic or unknown.

- **Hierarchy:** Different opacity levels help distinguish foreground elements from background elements, ensuring content is easily readable and important actions stand out.
- **Focus:** Apply more opacity to interactive elements or those requiring immediate attention to draw the user's attention.
- **State:** Changes in opacity indicate the interaction state of the element—active (100% opacity) or disabled (40% opacity), providing valuable feedback to the user.
- **Atmosphere:** Subtle opacity variations add depth and visual interest to interfaces.

### Disabled States

### When to Use `opacity.disabled`

Use `opacity.disabled` for interactive elements guaranteed to be on static surface or background colors (parent container has solid fill). This applies to most interactive elements.

**Use `opacity.disabled` when:**
- The element sits on a static surface or background color
- The parent container has a solid fill
- The element is part of the standard page layout

**Use dedicated disabled colors instead when:**
- Component appears over other elements (modals, popovers, tooltips)
- Background is dynamic or unknown
- Alternative methods are needed to maintain visibility and avoid collisions

This guidance applies to all components and all their states unless the above criteria require dedicated disabled colors.

### Opacity vs Color Overlays

**Opacity overlays** (`opacity.overlay`):
- Used for modal scrims and backdrop overlays
- Applied directly to elements using CSS `opacity` property
- Creates a translucent layer that dims content behind it
- Value: `0.64` (64% opacity)

**Color overlays** (`surface/overlay/*`, `accent/overlay/*`):
- Used for interactive state feedback (hover, pressed)
- Applied using `background-image` with linear gradients
- Reusable across all base colors
- Surface overlays use lighter colors (`slate.A100`, `slate.A200`)
- Accent overlays use darker colors (`slate.900/12`, `slate.900/8`)

**Key difference:** Opacity overlays dim content, while color overlays provide interaction feedback without changing the base color's appearance.

## Web Examples

### Javascript / Typescript

```tsx
// styles.ts
import {system} from '@workday/canvas-tokens-web';

const disabledButtonStyles = {
  opacity: `var(${system.opacity.disabled})`,
};

const modalScrimStyles = {
  opacity: `var(${system.opacity.overlay})`,
};
```

### CSS

```css
// styles.css
@import '@workday/canvas-tokens-web/css/system/_variables.css';
.disabled-button {
  opacity: var(--cnvs-sys-opacity-disabled);
}

.modal-scrim {
  opacity: var(--cnvs-sys-opacity-overlay);
}
```
