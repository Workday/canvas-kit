# Canvas Kit Popup

A Popup component that allows you to render content in a container on top of a page.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-popup
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-popup/index.scss';
```

## Usage

Use `.wdc-popup` to create a popup. The title and body content can be styled using
`.wdc-popup-title` and `.wdc-popup-body`, respectively.

```html
<div class="wdc-popup">
  <div class="wdc-popup-title">Popup Title</div>
  <div class="wdc-popup-body">Popup content</div>
</div>
```

### With Close Button

```html
<div class="wdc-popup">
  <div class="wdc-popup-close">
    <button onClick="{this.onCloseClick}" class="wdc-btn-icon-plain">
      <i class="wdc-icon" data-icon="x" data-category="system" />
    </button>
  </div>
  <div class="wdc-popup-title">Popup Title</div>
  <div class="wdc-popup-body">Popup content</div>
</div>
```

### Padding

The default padding for the popup is `32px`. Use `wdc-popup-padding-s` to set the padding to `16px`
or `wdc-popup-no-padding` to set the padding to `0`.

```html
<div class="wdc-popup wdc-popup-no-padding">
  <div class="wdc-popup-title">Popup Title</div>
  <div class="wdc-popup-body">Popup content</div>
</div>
```

### Animation Origin Modifiers

Eight directions are available. Each direction will change the the animation origin when the popup
enters the DOM. Use origin classes in addition to `.wdc-popup` to specify the direction. When
something triggers your popup, it is good practice to have the popup animate from whatever triggered
it.

- `.wdc-popup-animation-origin-top-center`
- `.wdc-popup-animation-origin-right-center`
- `.wdc-popup-animation-origin-bottom-center`
- `.wdc-popup-animation-origin-left-center`
- `.wdc-popup-animation-origin-top-left`
- `.wdc-popup-animation-origin-top-right`
- `.wdc-popup-animation-origin-bottom-right`
- `.wdc-popup-animation-origin-bottom-left`

```html
<div class="wdc-popup wdc-popup-animation-origin-top-center">
  <div class="wdc-popup-title">Popup Title</div>
  <div class="wdc-popup-body">Popup content</div>
</div>
```
