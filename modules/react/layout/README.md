# Canvas Kit React Layout

A collection of layout components.

## Installation

```sh
yarn add @workday/canvas-kit-react/layout
```

For more detailed information on this component, please refer to the
[storybook documentation](https://workday.github.io/canvas-kit/?path=/docs/components-layout-grid--docs)

# Canvas Kit Layout

The layout component is used to create layouts for your application. The component comes with the
`DeprecatedLayout` and `DeprecatedColumn` component. Layout and Columns can be utilized to create a
combination of different workday specific layouts. Layouts should be used to create the main layout
on the page.

# Layout (deprecated)

> Layout Container

## Usage

```tsx
import {DeprecatedLayout} from '@workday/canvas-kit-react/layout';

// Basic
<DeprecatedLayout>...</DeprecatedLayout>

// No spacing and no gutter
<DeprecatedLayout gutter={0} spacing={0}>...</DeprecatedLayout>

// Layout with a max container width
<DeprecatedLayout capWidth={true}>...</DeprecatedLayout>
```

## Static Properties

#### `Column: ReactNode`

## Component Props

### Required

> None

---

### Optional

#### `spacing: number`

> The spacing around columns

---

#### `gutter: number`

> The padding of the outside container

Default: `12`

---

#### `capWidth: boolean`

> If the max width of container is 1280px

---

# Column (deprecated)

> The column acts as a pillar for building layouts. Columns widths can be fluid, 12 columns, or a
> fixed. Columns should be used exclusively with `DeprecatedLayout` to build the main page layouts.
> `width` and `columns` props are mutually exclusive. The `width` prop will take precedence over the
> `columns` prop.

```tsx
import {DeprecatedLayout} from '@workday/canvas-kit-react/layout';

// Fluid layouts
<DeprecatedLayout>
  <DeprecatedLayout.Column />
  <DeprecatedLayout.Column />
</DeprecatedLayout>

// 12 column layouts
<DeprecatedLayout>
  <DeprecatedLayout.Column columns={4}/>
  <DeprecatedLayout.Column columns={8}/>
</DeprecatedLayout>

// Fixed column width
<DeprecatedLayout>
  <DeprecatedLayout.Column width={'400px'}/>
  <DeprecatedLayout.Column columns={8}/>
</DeprecatedLayout>

// Custom spacing
<DeprecatedLayout>
  <DeprecatedLayout.Column spacing={0}/>
  <DeprecatedLayout.Column />
</DeprecatedLayout>
```

## Static Properties

> None

## Component Props

### Required

> None

---

### Optional

#### `width: number | string`

> The width of the columns. This will take precedence over the `columns` prop.

---

#### `columns: number (1 through 12)`

> The size of the 12 column grid

---

#### `spacing: number`

> The left and right padding for the column (inherits from Layout prop)

Default: `12`

# Flex

View the
[documentation for Flex](https://workday.github.io/canvas-kit/?path=/docs/components-layout-flex--docs)
on Storybook.

# Box

View the
[documentation for Box](https://workday.github.io/canvas-kit/?path=/docs/components-layout-box--docs)
on Storybook.
