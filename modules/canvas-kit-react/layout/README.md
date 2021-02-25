# Canvas Kit Layout

The layout component is used to create layouts for your application. The component comes with the
`Layout` and `Column` component. Layout and Columns can be utilized to create a combination of
different workday specific layouts. Layouts should be used to create the main layout on the page.

# Layout

> Layout Container

## Usage

```tsx
import {Layout} from '@workday/canvas-kit-react-layout';

// Basic
<Layout>...</Layout>

// No spacing and no gutter
<Layout gutter={0} spacing={0}>...</Layout>

// Layout with a max container width
<Layout capWidth={true}>...</Layout>
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

# Column

> The column acts as a pillar for building layouts. Columns widths can be fluid, 12 columns, or a
> fixed. Columns should be used exclusively with `Layout` to build the main page layouts. `width`
> and `columns` props are mutually exclusive. The `width` prop will take precedence over the
> `columns` prop.

```tsx
import {Layout} from '@workday/canvas-kit-react-layout';

// Fluid layouts
<Layout>
  <Layout.Column />
  <Layout.Column />
</Layout>

// 12 column layouts
<Layout>
  <Layout.Column columns={4}/>
  <Layout.Column columns={8}/>
</Layout>

// Fixed column width
<Layout>
  <Layout.Column width={'400px'}/>
  <Layout.Column columns={8}/>
</Layout>

// Custom spacing
<Layout>
  <Layout.Column spacing={0}/>
  <Layout.Column />
</Layout>
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
