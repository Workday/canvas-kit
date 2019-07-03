# Modal

Canvas Modals come in three sizes: `sm`, `md`, `lg`. Canvas Modals use flex box for the positioning
of modal. Toggle classes are `wdc-fade` and `wdc-fade-in`.

## Usage

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '@workday/canvas-kit-css-modal/index.scss';
```

## Modal Sizes

|         | Small          | Medium         | Large          |
| ------- | -------------- | -------------- | -------------- |
| Widths  | 448px          | 664px          | 1120px         |
| Classes | `wdc-modal-sm` | `wdc-modal-md` | `wdc-modal-lg` |

## Small Modal

Reserved for yes/no promts to the user.

```html
<div class="wdc-modal-container wdc-fade">
  <div class="wdc-modal wdc-modal-sm">
    <div class="wdc-modal-header">
      <div class="wdc-modal-title">
        Modal Title
      </div>
      <div class="wdc-modal-close-btn">
        <svg class="wd-icon-x" ... />
      </div>
    </div>
    <div class="wdc-modal-body">
      Modal body text goes here.
    </div>
    <div class="wdc-modal-footer">
      <button class="wdc-btn wdc-btn-primary">
        Save Changes
      </button>
      <button class="wdc-btn">
        Cancel
      </button>
    </div>
  </div>
</div>
```

## Medium Modal

Reserved for 2-3 input prompts for user.

```html
<div class="wdc-modal-container wdc-fade">
  <div class="wdc-modal wdc-modal-md">
    <div class="wdc-modal-header">
      <div class="wdc-modal-title">
        Modal Title
      </div>
      <div class="wdc-modal-close-btn">
        <svg class="wd-icon-x" ... />
      </div>
    </div>
    <div class="wdc-modal-body">
      Modal body text goes here.
    </div>
    <div class="wdc-modal-footer">
      <button class="wdc-btn wdc-btn-primary">
        Save Changes
      </button>
      <button class="wdc-btn">
        Cancel
      </button>
    </div>
  </div>
</div>
```

## Large Modal

Reserved for large amounts of input promts from user.

```html
<div class="wdc-modal-container wdc-fade">
  <div class="wdc-modal wdc-modal-lg">
    <div class="wdc-modal-header">
      <div class="wdc-modal-title">
        Modal Title
      </div>
      <div class="wdc-modal-close-btn">
        <svg class="wd-icon-x" ... />
      </div>
    </div>
    <div class="wdc-modal-body">
      Modal body text goes here.
    </div>
    <div class="wdc-modal-footer">
      <button class="wdc-btn wdc-btn-primary">
        Save Changes
      </button>
      <button class="wdc-btn">
        Cancel
      </button>
    </div>
  </div>
</div>
```
