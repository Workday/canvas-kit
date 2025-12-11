---
source_file: styling/stories/mdx/CreateStyles.mdx
live_url: https://workday.github.io/canvas-kit/styling/stories/mdx/CreateStyles
---

<Meta title="Styling/Getting Started/Create Styles" />

# Create Styles

The primary utility function is the `createStyles` function. It makes a call to the `css` function
from `@emotion/css`. Emotion still does most of the heavy lifting by handling the serialization,
hashing, caching, and style injection.

## Basic Example

In this example, the HTML will look like:

```html
<div class="css-m39zwu"></div>
```

The CSS will look like this:

```css
.css-m39zwu {
  background: var(--cnvs-sys-color-bg-primary-default);
  color: var(--cnvs-sys-color-text-inverse);
}
```
<InformationHighlight className="sb-unstyled" cs={{marginBlock: system.space.x4,}}>
	<InformationHighlight.Icon />
	<InformationHighlight.Heading> Note</InformationHighlight.Heading>
	<InformationHighlight.Body>
		The `createStyles` function handles wrapping our Tokens in `var(--tokenName)`.
	</InformationHighlight.Body>
</InformationHighlight>

We're using `className` for simplicity here.

```tsx
import React from 'react';

import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.bg.primary.default,
  color: system.color.text.inverse,
});

export const CreateStyles = () => {
  return <button className={styles}>Click Me</button>;
};

```

<InformationHighlight className="sb-unstyled" variant="caution" cs={{marginBlock: system.space.x4,}}>
	<InformationHighlight.Icon />
	<InformationHighlight.Heading> Caution: Performance Hit</InformationHighlight.Heading>
	<InformationHighlight.Body>
		Do not inline the call to `createStyles` in the render function of a component. This will cause performance issues as a new style is inserted into the browser on every render.
	</InformationHighlight.Body>
</InformationHighlight>

```tsx
// Bad example (inside render function)

function MyComponent() {
  const styles = createStyles({color: system.color.static.red.default}); // Don't do this
  return <PrimaryButton className={createStyles({color: system.color.static.red.default})}>Text</PrimaryButton>;
}
```

## When to Use `createStyles`

`createStyles` is a great way to generate static styles when styling our components that don't rely
on dynamic styles. Use `createStyles` if you want to create re useable styles or need to apply
simple style overrides to our components.

## When to Use Something Else

You should use [stencils](/docs/styling-getting-started-stencils--docs) when styling our components
that have complex styles and dynamic properties.

## Proper Usage

```tsx
// Bad example (inside render function)

function MyComponent() {
  const styles = createStyles({color: system.color.static.red.default}); // Don't do this
  return <PrimaryButton cs={styles}>Text</PrimaryButton>;
}

// Good example (outside render function)

const styles = createStyles({color: system.color.static.red.default});

function MyComponent() {
  return <PrimaryButton cs={styles}>Text</PrimaryButton>;
}
```

<InformationHighlight className="sb-unstyled" cs={{marginBlock: system.space.x4,}}>
	<InformationHighlight.Icon />
	<InformationHighlight.Heading>Note</InformationHighlight.Heading>
	<InformationHighlight.Body>
		Most of our components support using the `cs` prop to apply the static styles. It merges everything together and applies `className` and `style` attributes to a React element
	</InformationHighlight.Body>
</InformationHighlight>

## Performance Benefits

`createStyles` is performant because:

- Styles are statically evaluated when styles are defined outside the render function
- No new StyleSheets are injected during render
- It works well with the browser's selector cache
