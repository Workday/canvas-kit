# Canvas Kit Page Header

The page header for our application.

<a href="../README.md">
  <img src="https://img.shields.io/badge/-maintenance mode-important" alt="Mainenance Mode" />
</a>

[> Workday Design Reference](https://design.workday.com/components/navigation/headers)

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
      <button class="wdc-btn-icon-inverse" aria-label="Export">
        <i class="wdc-icon" data-icon="export" data-category="system" />
      </button>
      <button class="wdc-btn-icon-inverse" aria-label="Fullscreen">
        <i class="wdc-icon" data-icon="fullscreen" data-category="system" />
      </button>
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
      <button class="wdc-btn-icon-inverse" aria-label="Export">
        <i class="wdc-icon" data-icon="export" data-category="system" />
      </button>
      <button class="wdc-btn-icon-inverse" aria-label="Fullscreen">
        <i class="wdc-icon" data-icon="fullscreen" data-category="system" />
      </button>
    </div>
  </div>
</header>
```
