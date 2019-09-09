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

Use `.wdc-popup` to create a popup. Use `.wdc-popup-title` within `.wdc-popup` to style the popup's
title. `p` elements also have adjusted margins.

```html
<div class="wdc-popup">
  <div class="wdc-popup-title">Popup Title</div>
  <div>Popup content</div>
</div>
```

### With Close Button

```jsx
import {xIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react';

<div class="wdc-popup">
  <div className="wdc-popup-close">
    <button onClick={this.onCloseClick} className="wdc-btn-icon-plain">
      <SystemIcon icon={xIcon} />
    </button>
  </div>
  <div class="wdc-popup-title">Popup Title</div>
  <div>Popup content</div>
</div>;
```

### Padding

The default padding for the Popup is set to `32px`. You can adjust padding based on these classes
`wdc-popup-no-padding` or `wdc-popup-padding-s` which sets the padding to `16px`

```html
<div class="wdc-popup wdc-popup-no-padding">
  <div class="wdc-popup-title">Popup Title</div>
  <div>Popup content</div>
</div>
```

### Animation Origin Modifiers

Eight directions are available. Each direction will change the the animation origin when the popup
enters the DOM. Use origin classes in addition to `.wdc-popup`. When something triggers your popup,
it is good practice to have the popup animate from whatever triggered it.

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
  <div>Popup content</div>
</div>
```
