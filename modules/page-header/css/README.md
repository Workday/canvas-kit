# Canvas Kit Page Header

The page header for our application.

**Example:**

```html
<header class="wdc-page-header">
  <div class="wdc-page-header-container">
    <h2 class="wdc-page-header-title">Page Title</h2>
    <div class="wdc-icon-list wdc-icon-list-white">
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

## Usage

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-page-header/index.scss';
```

### Marketing Contexts

If you would like to use it in a marketing context with a fixed width and padding that matches other
marketing content, simply replace `.wdc-page-header-container` with the
[marketing container](../canvas-kit-css-marketing/#container) component
(`.wdc-marketing-container`).

**Example:**

```html
<header class="wdc-page-header">
  <div class="wdc-marketing-container">
    <h2 class="wdc-page-header-title">Page Title</h2>
    <div class="wdc-icon-list wdc-icon-list-white">
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
