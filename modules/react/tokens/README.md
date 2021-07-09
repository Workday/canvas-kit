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
    - [Rem Units](#rem-units)
    - [Object Structure](#object-structure)
    - [Levels (Hierarchy)](#levels-hierarchy)
      - [Usage](#usage-3)
      - [Quick Reference](#quick-reference)
        - [Title](#title)
        - [Heading](#heading)
        - [Body](#body)
        - [Subtext](#subtext)
    - [Properties](#properties)
      - [Usage](#usage-4)
      - [Quick Reference](#quick-reference-1)
        - [Font Families](#font-families)
        - [Font Sizes](#font-sizes)
        - [Font Weights](#font-weights)
    - [Variants](#variants)
      - [Usage](#usage-5)
    - [Creating Combinations](#creating-combinations)

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

Our type tokens are the heart of all our typography. These tokens are designed to help you easily
create consistent type throughout your application while also providing flexibility when needed.
There are several important aspects to understand in order to put them to best use:

- Fonts
- `Rem` Units
- Object Structure
- Hierarchy
- Properties
- Variants
- Creating Combinations

### Fonts

To use the Canvas Kit font
[install and import the `@workday/canvas-kit-react-fonts` module](https://github.com/Workday/canvas-kit/tree/master/modules/fonts/react).

> **Note:** This module sources fonts from the Workday CDN.

### Rem Units

Canvas Kit v5 introduced `rem` units (instead of `px`) to our type tokens. This update follows the
guidance [from the WCAG spec](https://www.w3.org/TR/WCAG21/#resize-text) and provides better support
for users who change their browser's default font size. If you'd like to learn more about `rem` and relative units, you can
review this
[documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems).

> **Note:** We are using `16px` as our base font-size for these values. This is a browser standard
> and also fairly common across Workday. However, _if your body text is set to a value other than
> `16px`_, you will need to adjust that value for text to render properly.

### Object Structure

The `type` tokens are divided into three main parts:

- `levels` (the type hierarchy)
- `properties` (`fontFamilies`, `fontSizes`, and `fontWeights`)
- `variants` (modifiers for type styles)

Each part serves its own purpose but is also designed to be combined with the others. Knowing how
and when to combine tokens is key to getting the most out of them.

### Levels (Hierarchy)

Type `levels` contain our type hierarchy. When applying type styles, we recommend using these tokens
first, as they handle the vast majority of styling for you for most use cases. Each size applies
`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, and `color` styles for you,
so you can create consistent type quickly and easily. The type hierarchy is now organized in four
levels:

| Hierarchy Levels | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `title`          | Intended for large page titles                        |
| `heading`        | Intended for headings and large text                  |
| `body`           | Intended for standard body text                       |
| `subtext`        | Intended for small subtext content or in tight spaces |

And each level has three sizes: `large`, `medium`, and `small`. This organization allows the
hierarchy to provide guidance for usage while also not being mapped to particular semantic elements.

#### Usage

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

const ContentSection = () => (
  <section>
    <h2 css={type.levels.heading.large}>Section Heading</h2>
    <p css={type.levels.subtext.large}>This is section body text.</p>
  </section>
);
```

#### Quick Reference

Here's a quick reference guide for the font-sizes and font-weights of each level's sizes:

##### Title

_Intended for large page titles_

| Size     | Properties                                              |
| -------- | ------------------------------------------------------- |
| `large`  | fontSize: `56px` (`3/5rem`), fontWeight: `bold` (`700`) |
| `medium` | fontSize: `48px` (`3rem`), fontWeight: `bold` (`700`)   |
| `small`  | fontSize: `40px` (`2.5rem`), fontWeight: `bold` (`700`) |

##### Heading

_Intended for headings and large text_

| Size     | Properties                                               |
| -------- | -------------------------------------------------------- |
| `large`  | fontSize: `32px` (`2rem`), fontWeight: `bold` (`700`)    |
| `medium` | fontSize: `28px` (`1.75rem`), fontWeight: `bold` (`700`) |
| `small`  | fontSize: `24px` (`1.5rem`), fontWeight: `bold` (`700`)  |

##### Body

_Intended for standard body text_

| Size     | Properties                                                   |
| -------- | ------------------------------------------------------------ |
| `large`  | fontSize: `20px` (`1.25rem`), fontWeight: `regular` (`400`)  |
| `medium` | fontSize: `18px` (`1.125rem`), fontWeight: `regular` (`400`) |
| `small`  | fontSize: `16px` (`1rem`), fontWeight: `regular` (`400`)     |

##### Subtext

_Intended for small subtext content or in tight spaces_

| Size     | Properties                                            |
| -------- | ----------------------------------------------------- |
| `large`  | fontSize: `14px` (`0.875rem`), fontWeight: `regular` (`400`) |
| `medium` | fontSize: `12px` (`0.75rem`), fontWeight: `regular` (`400`)  |
| `small`  | fontSize: `10px` (`0.625rem`), fontWeight: `regular` (`400`) |

### Properties

As previously mentioned, you'll most often you will want to reach for `levels`, but in some
situations you may only need to set one or two type values for styling. Type `properties` give you
an atomic-level of control when you want to explicitly set a particular value.

| Property       | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| `fontFamilies` | Contains font-family tokens: `default` and `monospace`           |
| `fontSizes`    | Contains font-size tokens: keys are in `px`, values are in `rem` |
| `fontWeights`  | Contains font-weight tokens: `regular`, `medium`, and `bold`     |

#### Usage

Here's an example using `fontFamilies`, `fontSizes`, and `fontWeights`.

> _Note:_ `fontSizes` keys are in pixel values as a convenient reference, but the values are the
> base-16 rem equivalent. E.g. `fontSizes[12]` returns `0.75rem`.

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

const customTextStyles = {
  fontFamily: type.properties.fontFamilies.default,
  fontSize: type.properties.fontSizes[16],
  fontWeight: type.properties.fontWeights.medium,
};

const CustomText = () => (
  <p css={customTextStyles}>This is custom Roboto medium text using type properties.</p>
);
```

#### Quick Reference

Here's a quick reference guide for the values contained in each property:

##### Font Families

| Name        | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| `default`   | `"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif` |
| `monospace` | `"Roboto Mono", "Courier New", Courier, monospace`           |

##### Font Sizes

| Name (`px`) | Value (`rem`) |
| ----------- | ------------- |
| `10`        | `'0.625rem'`  |
| `12`        | `'0.75rem'`   |
| `14`        | `'0.875rem'`  |
| `16`        | `'1rem'`      |
| `18`        | `'1.125rem'`  |
| `20`        | `'1.25rem'`   |
| `24`        | `'1.5rem'`    |
| `28`        | `'1.75rem'`   |
| `32`        | `'2rem'`      |
| `40`        | `'2.5rem'`    |
| `48`        | `'3rem'`      |
| `56`        | `'3.5rem'`    |

##### Font Weights

| Name      | Value |
| --------- | ----- |
| `regular` | `400` |
| `medium`  | `500` |
| `bold`    | `700` |

### Variants

Variants are type style modifiers. You'll often use them in conjunction with other type tokens. We
support three type variants:

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| `error`   | Used for making errors more visible               |
| `hint`    | Used for help text and secondary content          |
| `inverse` | Used for any text on a dark or colored background |

#### Usage

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

const HintText = (props) => (
  <label css={{ ...type.levels.subtext.medium, type.variants.hint }} {...props}>
    Example Hint Variant Label
  </label>
);
```

### Creating Combinations

As previously mentioned, in most cases all you'll need will be the `levels` of the type hierarchy.
But these tokens can also be used to create style combinations when necessary. Below is an example:

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

const listItemBaseStyles = {
  padding: 0,
  ...type.levels.subtext.large,
};

interface InverseListItemProps {
  isActive?: boolean;
}

const InverseListItem = (props: InverseListItemProps) => {
  const listItemActiveStyles = props.isActive
    ? {
        fontWeight: type.properties.fontWeight.medium,
        ...type.variants.inverse,
      }
    : {};

  return <li css={{...listItemBaseStyles, ...listItemActiveStyles}}>First List Item</li>;
};
```
