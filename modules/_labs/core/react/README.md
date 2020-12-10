# Canvas Kit Labs React Core

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This component is work in progress and currently in pre-release.

Includes:

- [Type](#type)
- [Margin & Padding Spacing](#margin-padding-spacing)
- [Providers](#providers)
- [Theming](#theming)

## Type

This new type hierarchy is in the process of being introduced into our products. It relies on larger
font sizes/weights to increase legibility and promote reducing density in UI design. Other than the
visual size and weight changes across every level of hierarchy, there are a few naming changes:
`type.dataViz1` and `type.dataViz2` have been renamed to `type.brand1` and `type.brand2`,
respectively.

### Usage

The usage is the same as the current hierarchy, you just need a different import.

```tsx
import {type} from '@workday/canvas-kit-labs-react-core';

const MyLabel = styled('label')({
  ...type.body,
  ...type.variant.label,
});
```

### Breaking Change

> When the breaking change is made, anyone using the current type guide will need to update the
> references for `dataViz1` and `dataViz2`.

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
