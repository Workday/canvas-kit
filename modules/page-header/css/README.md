# Canvas Kit Page Header

The page header for our application.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-page-header
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-page-header/index.scss';
```

## Usage

### Default

```html
<header class="wdc-page-header">
  <div class="wdc-page-header-container">
    <h2 class="wdc-page-header-title">Page Title</h2>
    <div class="wdc-icon-list">
      <div class="wdc-icon-list-icon">
        <!-- wd-icon-export.svg -->
      </div>
      <div class="wdc-icon-list-icon">
        <!-- wd-icon-fullscreen.svg -->
      </div>
    </div>
  </div>
</header>
```

### With Cap Width

```html
<header class="wdc-page-header">
  <div class="wdc-page-header-container wdc-page-header-cap-width">
    <h2 class="wdc-page-header-title">Page Title</h2>
    <div class="wdc-icon-list">
      <div class="wdc-icon-list-icon">
        <!-- wd-icon-export.svg -->
      </div>
      <div class="wdc-icon-list-icon">
        <!-- wd-icon-fullscreen.svg -->
      </div>
    </div>
  </div>
</header>
```
