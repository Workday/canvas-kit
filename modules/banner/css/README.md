# Canvas Kit Banner

Errors and Alerts notify users of missteps that happen within a workflow and describe how the user
can take appropriate action to resolve them.

[> Workday Design Reference](https://design.workday.com/components/indicators/banners)

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-banner
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

```scss
@import '~@workday/canvas-kit-css-banner/index.scss';
```

## Usage

Use by applying `.wdc-banner`.

`.wdc-banner-text` - Contains the alert/error text.  
`.wdc-banner-right` - Rightmost area containing a link.

```html
<a class="wdc-banner" href="#">
  <span class="wdc-banner-text">
    12 Alerts
  </span>
  <span class="wdc-banner-link">
    View All
  </span>
</a>
```

### Variant

#### `.wdc-banner-error`

> Set the banner variant as `error`

```html
<a class="wdc-banner wdc-banner-error" href="#">
  <span class="wdc-banner-text">
    24 Errors and 12 Alerts
  </span>
  <span class="wdc-banner-link">
    View All
  </span>
</a>
```

#### `.wdc-banner-sticky`

> Set the banner variant as `sticky`. Text will truncate with an ellipsis if longer than maximum
> width.

```html
<a class="wdc-banner wdc-banner-sticky" href="#">
  <span class="wdc-banner-text">
    12 Alerts
  </span>
  <span class="wdc-banner-link">
    View All
  </span>
</a>
```

#### Responsive

Responsive styles will modify both the full and minimized alert bars at smaller screen sizes. The
full alert bar will have a fixed width while the minimized bar will only have the icon shown.

## Accessibility

See [canvas-kit-core](../../core/css#accessibility) for accessibility guidelines.
