# Canvas Kit Action Bar

Full width action bar that can be fixed to the bottom of the screen.

<a href="../README.md">
  <img src="https://img.shields.io/badge/-maintenance mode-important" alt="Mainenance Mode" />
</a>

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-action-bar
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-action-bar/index.scss';
```

## Usage

The Action Bar consists of two components, `wdc-action-bar` and `wdc-action-bar-container`. All
button sets should be wrapped around `wdc-action-bar-container`.

> The primary action button should be left aligned followed by secondary buttons. The primary button
> is on the right only in task orchestration.

```html
<div class="wdc-action-bar" role="region" aria-label="Action Bar">
  <div class="wdc-action-bar-container">
    <button class="wdc-btn wdc-btn-primary">Button</button>
    <button class="wdc-btn">Button</button>
    <button class="wdc-btn">Button</button>
  </div>
</div>
```

### Variants

#### `.wdc-action-bar.wdc-action-bar-fixed`

> Fixes the toolbar to the bottom of the window (uses `position: fixed`)

```html
<div class="wdc-action-bar wdc-action-bar-fixed" role="region" aria-label="Action Bar">
  <div class="wdc-action-bar-container">
    <button class="wdc-btn wdc-btn-primary">Button</button>
  </div>
</div>
```

#### Responsive Behavior

At 575px, responsive styles will take effect:

- Applies a flex box to the buttons
- Makes single-button groups full width
- All buttons will become the same width (`flex: 1`).
- Button order will become reversed, making left-aligned primary buttons right-aligned.

> When on a mobile form factor, the button placement should flip to have the primary button on the
> far right.

```html
<div class="wdc-action-bar-container">
  <button class="wdc-btn wdc-btn-primary">Next</button>
  <button class="wdc-btn">Back</button>
</div>
```

#### Natural width buttons

In some cases, you may want some buttons to retain their natural width at smaller screen sizes. For
instance, the **related actions** button.

```html
<div class="wdc-action-bar" role="region" aria-label="Action Bar">
	<div class="wdc-action-bar-container">
		<button class="wdc-btn wdc-btn-primary">Done</button>
		<button class="wdc-btn wdc-action-bar-container-item-natural">
			<svg ...>
		</button>
	</div>
</div>
```
