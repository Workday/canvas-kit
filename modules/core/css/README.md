# Canvas Kit Core

Canvas Kit Core contains values and base styles that are shared across the kit.

Includes:

- [Colors](#colors)
- [Spacing](#spacing)
- [Depth](#depth)
- [Fonts](#fonts)
- [Type](#type)
- [Accessibility](#accessibility)

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-core
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

You may also import specific modules from `/lib`.

```scss
@import '~@workday/canvas-kit-css-core/index.scss';
@import '~@workday/canvas-kit-css-core/lib/colors.scss';
```

## Colors

Workday Canvas color variables in weights from 100 - 600. Colors are in hex code format.

See `lib/colors.scss` for the full list of available colors.

```scss
$wdc-color-cinnamon-600: #a31c12;
$wdc-color-cinnamon-500: #de2e21;
$wdc-color-cinnamon-400: #ff5447;
$wdc-color-cinnamon-300: #ff867d;
$wdc-color-cinnamon-200: #fcc2bd;
$wdc-color-cinnamon-100: #ffeeed;
```

**Colors**  
Cinnamon  
Peach  
Chili Mango  
Cantaloupe  
Sour Lemon  
Juicy Pear  
Kiwi  
Green Apple  
Watermelon  
Jewel  
Toothpaste  
Blueberry  
Plum  
Berry Smoothie  
Blackberry  
Island Punch  
Grape Soda  
Pomegranate  
Fruit Punch  
Root Beer  
Toasted Marshmallow  
Coconut  
Cappuccino  
Soap  
Licorice  
French Vanilla  
Black Pepper

## Border Radius

Border Radius variables in t-shirt size format. Spacing values are in `px` format.

| Variable              | Size  |
| --------------------- | ----- |
| `$wdc-spacing-zero`   | 0     |
| `$wdc-spacing-s`      | 2px   |
| `$wdc-spacing-m`      | 4px   |
| `$wdc-spacing-l`      | 8px   |
| `$wdc-spacing-circle` | 999px |

## Spacing

Spacing variables in t-shirt size format. Spacing values are in `px` format.

| Variable            | Size |
| ------------------- | ---- |
| `$wdc-spacing-xxxs` | 4px  |
| `$wdc-spacing-xxs`  | 8px  |
| `$wdc-spacing-xs`   | 12px |
| `$wdc-spacing-s`    | 16px |
| `$wdc-spacing-m`    | 24px |
| `$wdc-spacing-l`    | 32px |
| `$wdc-spacing-xl`   | 40px |
| `$wdc-spacing-xxl`  | 64px |
| `$wdc-spacing-xxxl` | 80px |

## Depth

Five levels of depth available in CSS classes and SASS mixins.

> The CSS classes are implemented using the equivalent SASS mixin.

**HTML**

```html
<div class="wdc-depth-1">
  <h4 class="wdc-type-h5">Depth 1</h4>
</div>
```

**SCSS**

```scss
.standardItem {
  @include wdc-depth-1();
}
```

**Depth -1:** Inset card depth  
Class: `.wdc-depth-inset`  
Mixin: `wdc-depth-inset`

**Depth 1:** Standard card depth  
Class: `.wdc-depth-1`  
Mixin: `wdc-depth-1`

**Depth 2:** Increased card depth on hover  
Class: `.wdc-depth-2`  
Mixin: `wdc-depth-2`

**Depth 3:** Active, Task Orch, Pop Ups, Async Notification  
Class: `.wdc-depth-3`  
Mixin: `wdc-depth-3`

**Depth 4:** Cards on white backgrounds, Menus, Prompt window  
Class: `.wdc-depth-4`  
Mixin: `wdc-depth-4`

## Fonts

To use the Canvas Kit Fonts install and import the `@workday/canvas-kit-css-fonts` module. Using the
Canvas Kit Fonts module is the preferred method to using Workday's typography. You will be able to
add the fonts into your project with an import statement.

```scss
@import '~@workday/canvas-kit-css-fonts/index.scss';
```

Canvas Kit uses Roboto (Light, Regular, Medium, Bold) and Roboto Mono provided by
`canvas-kit-css-assets`.

All Roboto fonts are included as weights of Roboto:

| Font           | Weight |
| -------------- | ------ |
| Roboto Light   | 300    |
| Roboto Regular | 400    |
| Roboto Medium  | 500    |
| Roboto Bold    | 700    |

Roboto Mono is included as weight 400.

**Usage**

```scss
.fontClass {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
```

## Type

Type styles are available as classes and mixins. Using the class is preferred. Use mixins to
override CSS only if necessary,

**Base Type**  
Applies base body and font styles. Any type styles must be descendants of `.wdc-type` for the Canvas
fonts to be used.

```html
<div class="wdc-type">
  <h1 class="wdc-type-h1">Header</h1>
  <p class="wdc-type-body">Body text</p>
</div>
```

If you don't want to wrap your type elements with `.wdc-type`, you may also use the `wdc-type` mixin
to set the default styling. For preset defaults (i.e. all headers, body font, links, etc.), simply
apply `.wdc` to your body tag or a similar wrapper.

```scss
body {
  @include wdc-type();
}
```

There are mixins provided so you can do this for all levels of the type hierarchy if you'd like:

```scss
p {
  @include wdc-type-body();
}
h1 {
  @include wdc-type-h1();
}
h2 {
  @include wdc-type-h2();
}
...
```

**Headings**  
Modifies font size and weight.

```html
<h1 class="wdc-type-h1">H1 Header</h1>
<h2 class="wdc-type-h2">H2 Header</h2>
<h3 class="wdc-type-h3">H3 Header</h3>
<h4 class="wdc-type-h4">H4 Header</h4>
<h5 class="wdc-type-h5">H5 Header</h5>
```

**Body**

```html
<p class="wdc-type-body">Body text</p>
<p class="wdc-type-body-2">Smaller body text</p>
```

**Small**

```html
<p class="wdc-type-small">Small text</p>
```

### Variations

You can modify any of the type hierarchy with the below variations:

**Label**

```html
<span class="wdc-type-variant-label">Label Text</span>
```

**Button**

```html
<span class="wdc-type-variant-button">Button Text</span>
```

**Caps**

```html
<span class="wdc-type-variant-caps">Caps Text</span>
```

**Hint**

```html
<span class="wdc-type-variant-hint">Hint Text</span>
```

**Error**

```html
<span class="wdc-type-variant-error">Error Text</span>
```

**Link**

```html
<a href="#" class="wdc-type-variant-link">Link Text</a>
```

**Mono**

```html
<span class="wdc-type-variant-mono">Mono Text</span>
```

**Inverse**

```html
<button class="wdc-type-variant-inverse">White Text</button>
```

## Accessibility

By default, browsers add an outline around focusable elements. This is great for keyboard
accessibility but is not the best visual experience for users who don't need it. To provide the best
visual experience for all users, canvas-kit-css-core uses `what-input` to prevent outlines on mouse
events while showing outlines during keyboard navigation. To include `what-input` into your project
please view the [what-input github repository](https://github.com/ten1seven/what-input).

Canvas-kit-css-core includes an `accessibility.scss` file that will target specific `what-input`
styles. The elements within canvas-kit-css will prevent browser outlines from being shown during
mouse events by default. You can apply the class `.wdc-a11y` to `body` or any other element to
implement the same functionality for all focusable elements within a given element.

If you want to control when the outlines are shown/hidden yourself, you can use the
`wdc-show-outlines()` and `wdc-hide-outlines()` mixins.
