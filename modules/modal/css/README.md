# Canvas Kit Modal

A Modal component that allows you to render a Popup with a translucent overlay.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-modal
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-modal/index.scss';
```

## Usage

Use `.wdc-modal-bg` to create the background overlay and `.wdc-modal` to create the modal itself.
The title and body content can be styled using `.wdc-modal-heading` and `.wdc-modal-body`,
respectively.

```html
<div class="wdc-modal-bg">
  <div class="wdc-modal" role="dialog" aria-labelledby="modal-heading">
    <div class="wdc-modal-heading" id="modal-heading">Modal Title</div>
    <div class="wdc-modal-body">Modal content</div>
  </div>
</div>
```

### With Close Button

```html
<div class="wdc-modal-bg">
  <div class="wdc-modal" role="dialog" aria-labelledby="modal-heading">
    <div class="wdc-modal-close">
      <button onClick="{this.onCloseClick}" class="wdc-btn-icon-plain" aria-label="Close">
        <i class="wdc-icon" data-icon="x" data-category="system" />
      </button>
    </div>
    <div class="wdc-modal-heading" id="modal-heading">Modal Title</div>
    <div class="wdc-modal-body">Modal content</div>
  </div>
</div>
```

### Padding

The default padding for the modal is `32px`. Use `wdc-modal-padding-s` to set the padding to `16px`
or `wdc-modal-no-padding` to set the padding to `0`.

```html
<div class="wdc-modal wdc-modal-no-padding" role="dialog" aria-labelledby="modal-heading">
  <div class="wdc-modal-heading" id="modal-heading">Modal Title</div>
  <div class="wdc-modal-body">Modal content</div>
</div>
```
