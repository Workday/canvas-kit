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

Use `.wdc-modal` to create a modal container with the translucent overlay. Use `.wdc-popup` within
the `.wdc-modal` to create the popup. See [Popup](?path=/story/css-popup--all) for instructions on
how to configure the popup.

```html
<div class="wdc-modal">
  <div class="wdc-popup">
    <div class="wdc-popup-title">Popup Title</div>
    <div class="wdc-popup-body">Popup content</div>
  </div>
</div>
```
