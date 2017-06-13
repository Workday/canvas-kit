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

### Plain Text

Use `.wdc-form-text` to style plain form text.

```html
<div class="wdc-form-field-wrapper">
  <label class="wdc-form-label" for="text">Text Label</label>
  <div class="wdc-form-field">
    <span class="wdc-form-text" id="text">Here is some text</span>
  </div>
</div>
```

### Text Input

Use `.wdc-form-textinput` to style text `<input>` elements.

```html
<div class="wdc-form-field-wrapper">
  <label class="wdc-form-label" for="textinput">Input Label</label>
  <div class="wdc-form-field">
    <input
      type="text"
      class="wdc-form-textinput"
      placeholder="Here's a placeholder"
      id="textinput"
    />
  </div>
</div>
```

### Text Area

Use `.wdc-form-textarea` to style `<textarea>` elements.

```html
<div class="wdc-form-field-wrapper">
  <label class="wdc-form-label" for="textarea">Textarea Label</label>
  <div class="wdc-form-field">
    <textarea class="wdc-form-textarea" placeholder="Here's a placeholder" id="textarea"></textarea>
  </div>
</div>
```

### Select

Use `.wdc-form-select` to style `<select>` elements.

```html
<div class="wdc-form-field-wrapper">
  <label class="wdc-form-label">Select Label</label>
  <div class="wdc-form-field">
    <select class="wdc-form-select" id="select">
      <option disabled selected>Select an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
</div>
```

### Checkbox

Add `.wdc-form-checkbox` to a checkbox `<input>` element.

> **NOTE:** excluding the `.wdc-form-field` wrapper or the following `<label>` element will break
> the layout and show a native checkbox.
>
> Here is why: It's technically a bug that webkit browsers allow pseudo elements on inputs. This
> means that styling a checked checkbox by using `input:after` is not supported in Firefox, IE, etc.
> To get around this, we layer the `before` and `after` pseudo elements of the adjacent label ontop
> of the native checkbox to give the visual we want.

```html
<div class="wdc-form-field-wrapper">
  <div class="wdc-form-field">
    <input type="checkbox" class="wdc-form-checkbox" />
    <label class="wdc-form-label">Checkbox Label</label>
  </div>
</div>

<div class="wdc-form-field-wrapper">
  <div class="wdc-form-field">
    <input type="checkbox" class="wdc-form-checkbox" disabled />
    <label class="wdc-form-label">Disabled Checkbox Label</label>
  </div>
</div>

<div class="wdc-form-field-wrapper">
  <div class="wdc-form-field">
    <input type="checkbox" class="wdc-form-checkbox" checked readonly />
    <label class="wdc-form-label">Checked Checkbox Label</label>
  </div>
</div>

<div class="wdc-form-field-wrapper">
  <label class="wdc-form-label">Checkbox with lefthand label</label>
  <div class="wdc-form-field">
    <input type="checkbox" class="wdc-form-checkbox" checked readonly />
    <label class="wdc-form-label">Checked Checkbox Label</label>
  </div>
</div>
```

#### Checkbox Without a Label

This is highly discouraged. However, if you absolutely must show a checkbox without a label (i.e. as
the first column in a table row), here is how it can be achieved:

```html
<div class="wdc-form-checkbox-nolabel">
  <input type="checkbox" class="wdc-form-checkbox" id="checkbox2" />
  <label htmlFor="checkbox2" class="wdc-form-label"></label>
</div>
```

#### Checkbox Groups

Wrap a set of chekboxes in a `.wdc-form-field-wrapper.wdc-form-group` container. Place checkboxes
within `.wdc-form-group-fields`. Each checkbox option should be in its own `.wdc-form-field`
container.

```html
<div class="wdc-form-field-wrapper wdc-form-group">
  <label class="wdc-form-label">Checkbox Group</label>

  <div class="wdc-form-group-fields">
    <div class="wdc-form-field">
      <input type="checkbox" class="wdc-form-checkbox" />
      <label class="wdc-form-label">Checkbox Label</label>
    </div>

    <div class="wdc-form-field">
      <input type="checkbox" class="wdc-form-checkbox" />
      <label class="wdc-form-label">Checkbox Label</label>
    </div>

    <div class="wdc-form-field">
      <input type="checkbox" class="wdc-form-checkbox" />
      <label class="wdc-form-label">Checkbox Label</label>
    </div>
  </div>
</div>
```

### Radios

Wrap a set of radios in a `.wdc-form-field-wrapper.wdc-form-group` container. Place radio select
options within `.wdc-form-group-fields`. Each radio select option should be in its own
`.wdc-form-field` container.

> The `.wdc-form-group-fields` wrapper is necessary to display error styling.

```html
<div class="wdc-form-field-wrapper wdc-form-group">
  <label class="wdc-form-label">Radio Select Label</label>

  <div class="wdc-form-group-fields">
    <div class="wdc-form-field">
      <input type="radio" class="wdc-form-radio" name="radio" checked />
      <label class="wdc-form-label">Option 1</label>
    </div>

    <div class="wdc-form-field">
      <input type="radio" class="wdc-form-radio" name="radio" />
      <label class="wdc-form-label">Option 2</label>
    </div>

    <div class="wdc-form-field">
      <input type="radio" class="wdc-form-radio" name="radio" />
      <label class="wdc-form-label">Option 3</label>
    </div>
  </div>
</div>
```

## States

State styling may be explicitly applied to form controls using the classes below.

| State    | Class                |
| -------- | -------------------- |
| hover    | `.wdc-form-hover`    |
| focus    | `.wdc-form-focus`    |
| disabled | `.wdc-form-disabled` |
| checked  | `.wdc-form-checked`  |

**Examples**

```html
<div class="wdc-form-field-wrapper">
  <label class="wdc-form-label" for="textinput">Input Label</label>
  <div class="wdc-form-field">
    <input
      type="text"
      class="wdc-form-textinput wdc-form-focus"
      placeholder="Here's a placeholder"
      id="textinput"
    />
  </div>
</div>

<div class="wdc-form-field-wrapper">
  <div class="wdc-form-field">
    <input type="checkbox" class="wdc-form-checkbox wdc-form-disabled" />
    <label class="wdc-form-label">Checkbox</label>
  </div>
</div>

<div class="wdc-form-field-wrapper">
  <div class="wdc-form-field">
    <input type="radio" class="wdc-form-radio wdc-form-checked" name="radio" />
    <label class="wdc-form-label">Option</label>
  </div>
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

### Text Area

Use `.wdc-form-error`/`.wdc-form-alert` with `.wdc-form-textarea`.

```html
<div class="wdc-form">
  <div class="wdc-form-field-wrapper wdc-form-field-error">
    <label class="wdc-form-label">Input Label</label>
    <div class="wdc-form-field">
      <textarea class="wdc-form-textarea wdc-form-error"></textarea>
      <div class="wdc-form-error-message"><strong>Error:</strong> Error message</div>
    </div>
  </div>
</div>
```

### Select

Use `.wdc-form-error`/`.wdc-form-alert` with `.wdc-form-select`.

```html
<div class="wdc-form-field-wrapper wdc-form-field-alert">
  <label class="wdc-form-label">Select</label>
  <div class="wdc-form-field">
    <select class="wdc-form-select wdc-form-alert">
      <option disabled selected>Select an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    <div class="wdc-form-alert-message"><strong>Alert:</strong> Alert message</div>
  </div>
</div>
```

### Checkbox

Use `.wdc-form-error`/`.wdc-form-alert` with `.wdc-form-checkbox`.

If using a `.wdc-form-field`, apply `.wdc-form-field-error-inline` to ensure correct positioning for
the error/alert icon.

```html
<div class="wdc-form-field-wrapper wdc-form-field-error wdc-form-field-error-inline">
  <div class="wdc-form-field">
    <input type="checkbox" class="wdc-form-checkbox wdc-form-error" id="checkbox-error" />
    <label class="wdc-form-label">Checkbox Label</label>
    <div class="wdc-form-error-message"><strong>Error:</strong> Alert message</div>
  </div>
</div>
```

### Checkbox and Radio Groups

Use `.wdc-form-field-error`/`.wdc-form-field-alert` with `.wdc-form-group-fields` to apply
error/alert styling to entire group.

**Checkbox Group**

```html
<div class="wdc-form-field-wrapper wdc-form-group">
  <label class="wdc-form-label">Checkbox Group</label>

  <div class="wdc-form-group-fields wdc-form-field-error">
    <div class="wdc-form-field">
      <input type="checkbox" class="wdc-form-checkbox" />
      <label class="wdc-form-label">Checkbox Label</label>
    </div>

    <div class="wdc-form-field">
      <input type="checkbox" class="wdc-form-checkbox" />
      <label class="wdc-form-label">Checkbox Label</label>
    </div>

    <div class="wdc-form-field">
      <input type="checkbox" class="wdc-form-checkbox" />
      <label class="wdc-form-label">Checkbox Label</label>
    </div>
  </div>
  <div class="wdc-form-alert-message"><strong>Error:</strong> Error message</div>
</div>
```

**Radio Group**

```html
<div class="wdc-form-field-wrapper wdc-form-group">
  <label class="wdc-form-label">Radio Select Label</label>

  <div class="wdc-form-group-fields wdc-form-field-alert">
    <div class="wdc-form-field">
      <input type="radio" class="wdc-form-radio" name="radioAlert" checked />
      <label class="wdc-form-label">Option 1</label>
    </div>

    <div class="wdc-form-field">
      <input type="radio" class="wdc-form-radio" name="radioAlert" />
      <label class="wdc-form-label">Option 2</label>
    </div>

    <div class="wdc-form-field">
      <input type="radio" class="wdc-form-radio" name="radioAlert" />
      <label class="wdc-form-label">Option 3</label>
    </div>
  </div>

  <div class="wdc-form-alert-message"><strong>Alert:</strong> Alert message</div>
</div>
```
