# Canvas Kit Form Field

Form element styles and other common form styles.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-form
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-form/index.scss';
```

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

## Usage

```html
<form class="wdc-form">
  <div class="wdc-form-field-wrapper">
    <label class="wdc-form-label wdc-form-label-required" for="email">Email</label>
    <div class="wdc-form-field">
      <input type="text" class="wdc-form-textinput" placeholder="email@address.com" id="email" />
    </div>
  </div>

  <div class="wdc-form-field-wrapper">
    <label class="wdc-form-label wdc-form-label-required" for="password">Password</label>
    <div class="wdc-form-field">
      <input type="password" class="wdc-form-textinput" id="password" />
    </div>
  </div>
</form>
```

## Inline Labels

Form labels are rendered above the fields by default. You can enable inline labels (side by side),
by applying the `.wdc-form-inline-labels` class to `.wdc-form`.

```html
<div class="wdc-form wdc-form-inline-labels">
  <div class="wdc-form-field-wrapper">
    <label htmlFor="textinput" class="wdc-form-label wdc-form-label-required">Input Label</label>
    <div class="wdc-form-field">
      <input
        type="text"
        class="wdc-form-textinput"
        placeholder="Here's a placeholder"
        id="textinput"
      />
    </div>
  </div>
</div>
```

If you need to toggle this programmatically (i.e. for mobile responsive), you can use the
`wdc-form-inline-labels()` mixin.

```css
@media (max-width: 640px) {
  .wdc-form {
    @include wdc-form-inline-labels();
  }
}
```

## Accessibility

See [canvas-kit-core](../../core/css#accessibility) for accessibility guidelines.

## Form Controls

Form controls are available as both classes and mixins. Using the class is preferred.

Group form labels and fields using `.wdc-form-field`.

### Labels

Use `.wdc-form-label` on `<label>` elements.

**Required field labels**  
Labels for required fields should use `.wdc-form-label-required` to add a red asterisk next to the
label.

```html
<div class="wdc-form-field-wrapper">
  <label class="wdc-form-label wdc-form-label-required">Required Label</label>
  <label class="wdc-form-label">Input Label</label>
</div>
```

## Errors and Alerts

Use `.wdc-form-error` or `.wdc-form-alert` to apply error or alert styling to form controls.

Error styling is available as both classes and mixins. Using the class is preferred.

**Example**

```html
<div class="wdc-form">
  <div class="wdc-form-field-wrapper wdc-form-field-error">
    <label class="wdc-form-label">Input Label</label>
    <div class="wdc-form-field">
      <input type="text" class="wdc-form-textinput wdc-form-error" />
      <div class="wdc-form-error-message"><strong>Error:</strong> Error message</div>
    </div>
  </div>
</div>
```

### Form Fields

Use `.wdc-form-field-error` for errors and `.wdc-form-field-alert` for alerts. Applying error and
alert styling will display an icon on the left next to the input.

**Messages**  
Add messages to errors and alerts by wrapping your message with `.wdc-form-error-message` or
`.wdc-form-alert-message`. Using `strong` will bolden text with the respective error/alert color.

Place the message element after the form controls.

```html
<div class="wdc-form-error-message"><strong>Error:</strong> Error message</div>

<div class="wdc-form-alert-message"><strong>Alert:</strong> Alert message</div>
```

### Text Input

Use `.wdc-form-error`/`.wdc-form-alert` with `.wdc-form-textinput`.

```html
<div class="wdc-form">
  <div class="wdc-form-field-wrapper wdc-form-field-error">
    <label class="wdc-form-label">Input Label</label>
    <div class="wdc-form-field">
      <input type="text" class="wdc-form-textinput wdc-form-error" />
      <div class="wdc-form-error-message"><strong>Error:</strong> Error message</div>
    </div>
  </div>
</div>
```
