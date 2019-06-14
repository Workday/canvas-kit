# Canvas Kit Grid System

Canvas Kit Grid System is based on a 12 column grid. The Canvas Grid System uses the flexbox layout
for positioning of columns.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-grid-system
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-grid-system/index.scss';
```

## Usage

### Grid Options

|              | Small         | Medium        | Large         | Extra Large  |
| ------------ | ------------- | ------------- | ------------- | ------------ |
| Breakpoint   | > 320px       | > 768px       | > 992px       | > 1200px     |
| Gutter Width | 16px          | 16px          | 24px          | 40px         |
| Class Prefix | `wdc-col-sm-` | `wdc-col-md-` | `wdc-col-lg-` | `wdc-col-xl` |

### Responsive Grids

Responsive modifiers allow you to specify different column sizes for different breakpoints.

```html
<div class="wdc-row">
  <div class="wdc-col-sm-2 wdc-col-md-1 wdc-col-lg-3 wdc-col-xl-1">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-sm-4 wdc-col-md-2 wdc-col-lg-3 wdc-col-xl-5">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-sm-4 wdc-col-md-3 wdc-col-lg-3 wdc-col-xl-5">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-sm-2 wdc-col-md-6 wdc-col-lg-3 wdc-col-xl-1">
    <div class="demo-box"></div>
  </div>
</div>
```

### Fluid Grids

Fluid grids are percentage based columns for resizing content.

```html
<div class="wdc-row">
  <div class="wdc-col-11">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
</div>
<div class="wdc-row">
  <div class="wdc-col-10">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-2">
    <div class="demo-box"></div>
  </div>
</div>
<div class="wdc-row">
  <div class="wdc-col-9">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-3">
    <div class="demo-box"></div>
  </div>
</div>
<div class="wdc-row">
  <div class="wdc-col-8">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-4">
    <div class="demo-box"></div>
  </div>
</div>
```

### Grids with Offsets

Offsets for columns.

```html
<div class="wdc-row">
  <div class="wdc-col-offset-11 wdc-col-1">
    <div class="demo-box"></div>
  </div>
</div>
```

### Auto Widths

Flex grow the columns to the parent container.

```html
<div class="wdc-row">
  <div class="wdc-col">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col">
    <div class="demo-box"></div>
  </div>
</div>
```

### Positioning

#### Horizontal

Horizonal position for columns.

```html
<div class="wdc-row wdc-row-start">
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
</div>
<div class="wdc-row wdc-row-center">
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
</div>
<div class="wdc-row wdc-row-end">
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
</div>
```

#### Vertical

Vertical position for columns.

```html
<div class="wdc-row wdc-row-top">
  <div class="wdc-col">
    <div class="demo-box demo-box-big"></div>
  </div>
  <div class="wdc-col">
    <div class="demo-box"></div>
  </div>
</div>
<div class="wdc-row wdc-row-middle">
  <div class="wdc-col">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col">
    <div class="demo-box demo-box-big"></div>
  </div>
</div>
<div class="wdc-row wdc-row-bottom">
  <div class="wdc-col">
    <div class="demo-box demo-box-big"></div>
  </div>
  <div class="wdc-col">
    <div class="demo-box"></div>
  </div>
</div>
```

### Grid Distribution

Position content with `wdc-row-around` and `wdc-row-between`.

```html
<div class="wdc-row wdc-row-around">
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
</div>
<div class="wdc-row wdc-row-between">
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
  <div class="wdc-col-1">
    <div class="demo-box"></div>
  </div>
</div>
```
