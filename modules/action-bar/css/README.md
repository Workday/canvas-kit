# Canvas Kit Action Bar

Full width action bar fixed to bottom of screen.

## Usage

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-action-bar/index.scss';
```

## Action Bar

The Action Bar consists of two components, `wdc-action-bar` and `wdc-action-bar-container`. All
button sets should be wrapped around `wdc-action-bar-container`.

> The primary action button should be left aligned followed by secondary buttons. The primary button
> is on the right only in task orchestration.

```html
<div class="wdc-action-bar">
  <div class="wdc-action-bar-container">
    <button class="wdc-btn wdc-btn-primary">Button</button>
    <button class="wdc-btn">Button</button>
    <button class="wdc-btn">Button</button>
  </div>
</div>
```

### Fixed Positioning

Use `.wdc-action-bar.wdc-action-bar-fixed` to fix the Action Bar to the bottom of the page.

```html
<div class="wdc-action-bar wdc-action-bar-fixed">
  <div class="wdc-action-bar-container">
    <button class="wdc-btn wdc-btn-primary">Button</button>
  </div>
</div>
```

### Responsive

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
<div class="wdc-action-bar">
	<div class="wdc-action-bar-container">
		<button class="wdc-btn wdc-btn-primary">Done</button>
		<button class="wdc-btn wdc-btn-icon-rounded wdc-action-bar-container-item-natural">
			<svg ...>
		</button>
	</div>
</div>
```
