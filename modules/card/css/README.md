# Canvas Kit Card

A card is a flexible and extensible content container that includes options for positioning. The
card content includes classes for header and body.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-card
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-card/index.scss';
```

## Usage

Card sizes follow the 12 column grid system. To adjust sizes append the size modifier to the
`.wdc-card-{size}` class. For the tablet breakpoint, columns double if less than 50% or round up to
100% if greater than 50%. On mobile all card sizes increase to 100%.

#### Card Sizes

```html
<div class="wdc-card-container">
  <div class="wdc-card-4">
    <div class="wdc-card-header">
      Card Header
    </div>
    <div class="wdc-card-body">
      .wdc-card-4
    </div>
  </div>
  <div class="wdc-card-4">
    <div class="wdc-card-header">
      Card Header
    </div>
    <div class="wdc-card-body">
      .wdc-card-4
    </div>
  </div>
  <div class="wdc-card-4">
    <div class="wdc-card-header">
      Card Header
    </div>
    <div class="wdc-card-body">
      .wdc-card-4
    </div>
  </div>
</div>
```

### Variants

#### Card with No Padding

Card padding may be removed by add the `.wdc-card-no-padding` modifier.

```html
<div class="wdc-card-container">
  <div class="wdc-card-6 wdc-card-no-padding">
    <div class="wdc-card-header">
      Card Header
    </div>
    <div class="wdc-card-body">
      .wdc-card-6.wdc-card-no-padding
    </div>
  </div>
  <div class="wdc-card-6">
    <div class="wdc-card-header">
      Card Header
    </div>
    <div class="wdc-card-body">
      .wdc-card-6
    </div>
  </div>
</div>
```

#### Card Positioning

Card positioning can be changed by adding a modifier to the container class,
`.wdc-card-container-{position}`. Positioning options are: `start`, `end`, `center`, `between`,
`around`. These modifiers apply flex positioning to the cards.

```html
<div class="wdc-card-container wdc-card-container-space-around">
  <div class="wdc-card-2">
    <div class="wdc-card-header">
      Card Header
    </div>
    <div class="wdc-card-body">
      .wdc-card-container .wdc-card-container-space-around
    </div>
  </div>
</div>
```
