# Canvas Kit Core

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/UNSTABLE-alpha-orange" alt="UNSTABLE: Alpha" />
</a>  This component is work in progress and currently in pre-release.

## Type

This new type hierarchy is in the process of being introduced into our products. It relies on larger
font sizes/weights to increase legibility and promote reducing density in UI design. Other than the
visual size and weight changes across every level of hierarchy, there are a few naming changes:
`type.dataViz1` and `type.dataViz2` have been renamed to `type.brand1` and `type.brand2`,
respectively.

### Usage

The usage is the same as the current hierarchy, you just need a different import.

```tsx
import {type} from '@workday/canvas-kit-react-labs-core';

const MyLabel = styled('label')({
  ...type.body,
  ...type.variant.label,
});
```

### Breaking Change

> When the breaking change is made, anyone using the current type guide will need to update the
> references for `dataViz1` and `dataViz2`.
