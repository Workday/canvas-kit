# Canvas Kit Tokens

Canvas Kit Tokens contains values and base styles that are shared across the kit.

Includes:

- [Canvas Kit Tokens](#canvas-kit-tokens)
  - [Installation](#installation)
  - [Colors](#colors)
    - [Usage](#usage)
    - [Semantic constants](#semantic-constants)
  - [Border Radius](#border-radius)
  - [Space](#space)
    - [Usage](#usage-1)
  - [Depth](#depth)
    - [Usage](#usage-2)
  - [Type](#type)
    - [Fonts](#fonts)
    - [Hierarchy](#hierarchy)
    - [Usage](#usage-3)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Colors

Workday Canvas Colors are directly exported from `@workday/canvas-colors-web`. Colors come in shades
from 100 (lighter) - 600 (darker). These can be used directly, but
[semantic constants](#semantic-constants) are preferred.

Colors (100-600):

- Cinnamon
- Peach
- Chili Mango
- Cantaloupe
- Sour Lemon
- Juicy Pear
- Kiwi
- Green Apple
- Watermelon
- Jewel
- Toothpaste
- Blueberry
- Plum
- Berry Smoothie
- Blackberry
- Island Punch
- Grape Soda
- Pomegranate
- Fruit Punch
- Root Beer
- Toasted Marshmallow
- Coconut
- Cappuccino
- Soap
- Licorice
- French Vanilla
- Black Pepper

### Usage

```tsx
import {colors} from '@workday/canvas-kit-react/tokens';

colors.blueberry400;
```

> Each of the colors have a gradient version as well

```tsx
import {colors} from '@workday/canvas-kit-react/tokens';

colors.gradients.blueberry;
```

### Semantic constants

To ensure consistency across implementations, our semantic constants should be used wherever
possible. This allows us to swap out the color of a button or icon for example, without having to
find every instance of it and change the color manually.

We have several semantic groupings:

- `commonColors`
- `buttonColors`
  - `delete`
  - `primary`
  - `secondary`
- `iconColors`
- `statusColors`
- `typeColors`

```tsx
import {iconColors} from '@workday/canvas-kit-react/tokens';

iconColors.hover;
```

## Border Radius

Border Radius variables are in a "t-shirt size" format. Border Radius values are in `px` format.

| Variable | Size (px) |
| -------- | --------- |
| `zero`   | `0`       |
| `s`      | `'2px'`   |
| `m`      | `'4px'`   |
| `l`      | `'8px'`   |
| `circle` | `'999px'` |

## Space

Space variables are in a "t-shirt size" format. Space values are in `px` format (`space`) or number
format (`spaceNumbers`).

| Variable | Size (px) | Size (number) |
| -------- | --------- | ------------- |
| `xxxs`   | `'4px'`   | `4`           |
| `xxs`    | `'8px'`   | `8`           |
| `xs`     | `'12px'`  | `12`          |
| `s`      | `'16px'`  | `16`          |
| `m`      | `'24px'`  | `24`          |
| `l`      | `'32px'`  | `32`          |
| `xl`     | `'40px'`  | `40`          |
| `xxl`    | `'64px'`  | `64`          |
| `xxxl`   | `'80px'`  | `80`          |

The following space types are also provided: `CanvasSpace`, `CanvasSpaceValues`,
`CanvasSpaceNumbers`, `CanvasSpaceNumberValues`

Below are descriptions of these types:

| Name                      | Description                                  |
| ------------------------- | -------------------------------------------- |
| `CanvasSpace`             | `space` object with string px values         |
| `CanvasSpaceValues`       | string px values for CanvasSpace             |
| `CanvasSpaceNumbers`      | `spaceNumbers` object with numeric px values |
| `CanvasSpaceNumberValues` | numeric px values for CanvasSpaceNumbers     |

### Usage

```tsx
import {space, spaceNumbers} from '@workday/canvas-kit-react/tokens';

const iconSize = 20;

const buttonSyles = {
  paddingTop: space.xs,
  paddingRight: space.s,
  paddingBottom: space.xs,
  paddingLeft: spaceNumbers.s + iconSize,
};
```

## Depth

Five levels of depth are available. They are directly exported from `@workday/canvas-depth-web`.

| Level            | Usage Recommendations             |
| ---------------- | --------------------------------- |
| Depth -1 (inset) | Inset card depth                  |
| Depth 1          | Standard card depth               |
| Depth 2          | Increased card depth on hover     |
| Depth 3          | Active cards, popups              |
| Depth 4          | Cards on white backgrounds, menus |

### Usage

```tsx
import {depth} from '@workday/canvas-kit-react/tokens';

depth.inset;
depth['2'];
```

## Type

Type styles are available as objects to use alone or with
[Emotion](https://github.com/emotion-js/emotion).

### Fonts

To use the Canvas Kit font
[install and import the `@workday/canvas-kit-react-fonts` module](https://github.com/Workday/canvas-kit/tree/master/modules/fonts/react).
Note that this module sources fonts from the Workday CDN.

### Hierarchy


| Hierarchy Levels | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `display`        | Intended for large heroes and images                  |
| `title`          | Intended for large page titles                        |
| `heading`        | Intended for headings and large text                  |
| `body`           | Intended for standard body text                       |
| `subtext`        | Intended for small subtext content or in tight spaces |

| Properties    | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| `fonts`       | Contains font-family tokens: `normal` and `monospace`            |
| `fontSizes`   | Contains font-size tokens: keys are in `px`, values are in `rem` |
| `fontWeights` | Contains font-weight tokens: `regular`, `medium`, and `bold`     |

| Variants  | Description                                       |
| --------- | ------------------------------------------------- |
| `error`   | Used for making errors more visible               |
| `hint`    | Used for help text and secondary content          |
| `inverse` | Used for any text on a dark or colored background |

### Usage

If you're working in emotion, you can simply spread the type objects to use their styles.

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

const MyLabel = styled('label')({
  ...type.levels.subtext.large,
  fontWeight: type.properties.fontWeights.medium,
});
```

If you are only using one object, you can do this inline with the `style` attribute. For headings,
styled components are also available.

```tsx
import {H2, type} from '@workday/canvas-kit-react/tokens';

<h1 style={type.h1}>H1 Header</h1>;
<H2>H2 Header</H2>;
```

To combine objects inline, you can also use emotion's `css` function.

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

<label css={[canvas.type.body, canvas.type.variant.label]}>Label Text</label>;
```
