# Canvas Kit Labs React Core

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/UNSTABLE-alpha-orange" alt="UNSTABLE: Alpha" />
</a>  This component is work in progress and currently in pre-release.

## Type

This new type hierarchy is in the process of being introduced into our products. It relies on larger
font sizes/weights to increase legibility and promote reducing density in UI design. The font size,
line height and weight has changed across every level of the hierarchy. The `dataViz` and `h` levels
have been combined into `title`. This was to eliminate confusion of heading usage between product
use cases (often using smaller type styles) and marketing use cases (using larger type styles). It
also avoids the oddity of using `type.h1` on an `<h3>` element for example.

### Usage

The usage is the same as the current hierarchy, you just need a different import.

```tsx
import {type} from '@workday/canvas-kit-labs-react-core';

const MyLabel = styled('label')({
  ...type.body2,
  ...type.variant.label,
});
```

### Sizes

| Name     | Size(px) | Usage Examples                                       |
| -------- | -------- | ---------------------------------------------------- |
| `title1` | 56       | Marketing headings for large marquees/heros          |
| `title2` | 48       | Marketing headings                                   |
| `title3` | 40       | Marketing headings                                   |
| `title4` | 32       | Marketing headings                                   |
| `title5` | 24       | Page headers                                         |
| `title6` | 20       | Sub-headings                                         |
| `body1`  | 20       | Large paragraph text for marketing, articles, etc.   |
| `body2`  | 16       | Paragraphs, large buttons, navigation, sub-headings  |
| `body3`  | 14       | Buttons, form labels, hint text, menus, descriptions |
| `small1` | 12       | Caption, pills, satus indicators                     |
| `small2` | 10       | Data visualization labels, Mobile labels             |

## Margin & Padding Spacing

Spacing functions provide margin and padding spacing. These are available with the `space` function.
The `space` function utilizes the following props:

**Margin Props**

- `m` margin
- `mt` margin-top
- `mr` margin-right
- `mb` margin-bottom
- `ml` margin-left
- `mx` margin-left & margin-right
- `my` margin-top & margin-bottom

**Padding Props**

- `p` padding
- `pt` padding-top
- `pr` padding-right
- `pb` padding-bottom
- `pl` padding-left
- `px` padding-left & padding-right
- `py` padding-top & padding-bottom

## Usage

```tsx
import {spacing, spacingNumbers} from '@workday/canvas-kit-react-core';
import {space} from '@workday/canvas-kit-labs-react-core';

spacing.s; // 16px
spacingNumbers.s; // 16

...

const Box = styled('div')(space)

<Box p={spacing.xl} pb={64} m={40} mx={10}>
  ...
</Box>

/*
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 40px;
  margin-left: 10px;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 64px;
  padding-left: 40px;
*/
```
