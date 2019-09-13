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
The title and body content can be styled using `.wdc-modal-title` and `.wdc-modal-body`,
respectively.

```html
<div class="wdc-modal-bg">
  <div class="wdc-modal">
    <div class="wdc-modal-title">Modal Title</div>
    <div class="wdc-modal-body">Modal content</div>
  </div>
</div>
```

### With Close Button

```jsx
import {xIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react';

<div className="wdc-modal-bg">
  <div className="wdc-modal">
    <div className="wdc-modal-close">
      <button onClick={this.onCloseClick} className="wdc-btn-icon-plain">
        <SystemIcon icon={xIcon} />
      </button>
    </div>
    <div className="wdc-modal-title">Modal Title</div>
    <div className="wdc-modal-body">Modal content</div>
  </div>
</div>;
```

### Padding

The default padding for the modal is `32px`. Use `wdc-modal-padding-s` to set the padding to `16px`
or `wdc-modal-no-padding` to set the padding to `0`.

```html
<div class="wdc-modal wdc-modal-no-padding">
  <div class="wdc-modal-title">Modal Title</div>
  <div class="wdc-modal-body">Modal content</div>
</div>
```

### Animation Origin Modifiers

Eight directions are available. Each direction will change the the animation origin when the modal
enters the DOM. Use origin classes in addition to `.wdc-modal` to specify the direction.

- `.wdc-modal-animation-origin-top-center`
- `.wdc-modal-animation-origin-right-center`
- `.wdc-modal-animation-origin-bottom-center`
- `.wdc-modal-animation-origin-left-center`
- `.wdc-modal-animation-origin-top-left`
- `.wdc-modal-animation-origin-top-right`
- `.wdc-modal-animation-origin-bottom-right`
- `.wdc-modal-animation-origin-bottom-left`

```html
<div class="wdc-modal wdc-modal-animation-origin-top-center">
  <div class="wdc-modal-title">Modal Title</div>
  <div class="wdc-modal-body">Modal content</div>
</div>
```
