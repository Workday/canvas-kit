# Canvas Kit Skeleton

A component that renders a skeleton (a placeholder for future content). The skeleton component takes
in children skeleton components and displays them with an animated sheen to indicate loading.

[> Workday Design Reference](https://design.workday.com/components/indicators/skeleton-loader)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-skeleton
```

# Skeleton

This component places its children in a `div` marked with the `aria-hidden` attribute. It announces
itself by utilizing a visually hidden div.

## Usage

```tsx
import * as React from 'react';
import {
  Skeleton,
  SkeletonHeader,
  SkeletonShape,
  SkeletonText,
} from '@workday/canvas-kit-react-skeleton';

<Skeleton>
  <SkeletonShape width={50} height={50} borderRadius={99} />
  <SkeletonHeader />
  <h1>Hello!</h1>
  <SkeletonText lineCount={3} />
</Skeleton>;
```

> Note: In this example, non-Skeleton elements like `<h1>Hello!</h1>` will still show. This allows
> the flexibility for users to create more custom Skeletons.

## Static Properties

> None

## Component Props

### Optional

#### `aria-label: string`

> For accessibility reasons, `aria-label` is transformed into a text representation (visually
> hidden, but announced by screen readers) of the loader.
>
> IMPORTANT: Since we take over the use of `aria-label` here, the attribute does not get applied to
> the container element. We anticipate that this will change in a future major version.

Default: `"Loading"`

# SkeletonHeader

A component that renders a header placeholder for a skeleton. This component has a width of `100%`
and fixed height of `28px`.

## Usage

```tsx
import * as React from 'react';
import {Skeleton, SkeletonHeader} from '@workday/canvas-kit-react-skeleton';

<Skeleton>
  <SkeletonHeader />
</Skeleton>;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `backgroundColor: string`

> Can be used to define the color of the skeleton. Accepts hex colors in string format.

Default: `soap200`

# SkeletonShape

A component that renders a general shape placeholder for a skeleton. It gives the ability to alter
the borderRadius, width, and height to make various rectangular and circular shapes.

## Usage

```tsx
import * as React from 'react';
import {Skeleton, SkeletonShape} from '@workday/canvas-kit-react-skeleton';

<Skeleton>
  <SkeletonShape width={50} height={50} borderRadius={99} />
</Skeleton>;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `width: number | string`

> The width of the shape in `px` or `%`.

Default: `"100%"`

#### `height: number | string`

> The height of the shape in `px` or `%`.

Default: `"100%"`

#### `borderRadius: number | string`

> The borderRadius of the shape in `px` or `%`.

Default: `0`

#### `backgroundColor: string`

> Can be used to define the color of the skeleton. Accepts hex colors in string format.

Default: `soap200`

# SkeletonText

A component that renders a text placeholder for a skeleton. Each line has a width of `100%` and a
fixed height of `21px`. If there is more then one line of text the last line of the SkeletonText
will have a width of `60%`.

## Usage

```tsx
import * as React from 'react';
import {Skeleton, SkeletonText} from '@workday/canvas-kit-react-skeleton';

<Skeleton>
  <SkeletonText lineCount={3} />
</Skeleton>;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `lineCount: number`

> The number of "lines" that it will display. If there's more than one line, then the last line will
> have a width of `60%`

Default: `2`

#### `backgroundColor: string`

> Can be used to define the color of the skeleton. Accepts hex colors in string format.

Default: `soap200`
