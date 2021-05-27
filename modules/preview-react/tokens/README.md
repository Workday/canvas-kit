# Canvas Kit Preview React Tokens

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/preview-react/README.md">
  <img src="https://img.shields.io/badge/PREVIEW-beta-blueviolet" alt="PREVIEW: Beta" />
</a>  This package is in Preview because we are experimenting with a new type hierarchy.

## Type

This new type hierarchy is in the process of being introduced into our products. It relies on larger
font sizes/weights to increase legibility and promote reducing density in UI design. Other than the
visual size and weight changes across every level of hierarchy, there are a few naming changes:
`type.dataViz1` and `type.dataViz2` have been renamed to `type.brand1` and `type.brand2`,
respectively.

### Usage

The usage is the same as the current hierarchy, you just need a different import.

```tsx
import {type} from '@workday/canvas-kit-preview-react/tokens';

const MyLabel = styled('label')({
  ...type.body,
  ...type.variant.label,
});
```
