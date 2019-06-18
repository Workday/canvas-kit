# Canvas Kit Errors and Alerts

Components to display errors, warnings, and other alerts.

## Usage

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-alert/index.scss';
```

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

### Alert Bar

Use by applying `.wdc-alert-bar`.

**Components**  
`.wdc-alert-bar-text` - Contains the alert/error text.  
`.wdc-alert-bar-right` - Rightmost area containing a link.

```html
<a class="wdc-alert-bar" href="#">
  <span class="wdc-alert-bar-text">
    12 Alerts
  </span>
  <span class="wdc-alert-bar-link">
    View All
  </span>
</a>
```

#### Error Bar

Apply the error bar style by adding `.wdc-alert-bar-error`. This can be combined with the minimized
state as well.

```html
<a class="wdc-alert-bar wdc-alert-bar-error" href="#">
  <span class="wdc-alert-bar-text">
    24 Errors and 12 Alerts
  </span>
  <span class="wdc-alert-bar-link">
    View All
  </span>
</a>
```

#### Minimized

Apply the minimized state by adding `.wdc-alert-bar-mini`. Text will truncate with an ellipsis if
longer than maximum width.

```html
<a class="wdc-alert-bar wdc-alert-bar-mini" href="#">
  <span class="wdc-alert-bar-text">
    12 Alerts
  </span>
  <span class="wdc-alert-bar-right">
    View All
  </span>
</a>
```

#### Responsive

Responsive styles will modify both the full and minimized alert bars at smaller screen sizes. The
full alert bar will have a fixed width while the minimized bar will only have the icon shown.

## Accessibility

See [canvas-kit-core](../../core/css#accessibility) for accessibility guidelines.
