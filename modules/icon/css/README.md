# Canvas Kit Icon

Icon injection and coloring toolkit for Canvas Kit icons. Uses
[SVGInjector](https://github.com/iconic/SVGInjector).

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-icon
```

# Usage

Icons will load from the CDN by default. The injector will look for the `.wdc-icon` selector. You
may also use a [custom icon selector](#custom-icon-selector).

## JavaScript

Import script and execute.

```js
import initializeIcons from '@workday/canvas-kit-css-icon';

initializeIcons();
```

## HTML

Apply `.wdc-icon` to an element to enable icon injection. Icons may be configured using a variety of
`data-*` attributes.

```html
<i className="wdc-icon" data-icon="shield" data-category="accent" />
<i className="wdc-icon" data-icon="benefits" data-category="applet" />
<i className="wdc-icon" data-icon="activityStream" data-category="system" />
```

## Data Attributes

### Required

#### `data-icon`

> Icon name in `camelCase`.

---

#### `data-category`

> The category of the icon. Must be one of the following: `accent`, `applet`, or `system`. Each
> category supports its own set of data attributes (see below).

## Colors

Canvas Kit icons support colors in a variety of contexts depending on the category of the icon.

In general, colors should be drawn from the
[Canvas palette](https://design.workday.com/resources/colors). The color must be written in
`camelCase`. If a hue name is used but no color shade is defined (e.g. `blueberry`), the color will
default to the 500 weight (e.g. `blueberry500`).

In some cases, a custom color value (e.g. `#FFFFFF`) may also be used (see below).

# Accent Icons

## Usage

```html
<i className="wdc-icon" data-icon="shield" data-category="accent" />
<i className="wdc-icon" data-icon="shield" data-category="accent" data-color="pomegranate500" />
<i className="wdc-icon" data-icon="shield" data-category="accent" data-size="80" />
<i
  className="wdc-icon"
  data-icon="shield"
  data-category="accent"
  data-color="frenchVanilla100"
  data-transparent="true"
/>
```

## Data Attributes

### Optional

#### `data-color`

> Icon color from the [Canvas palette](https://design.workday.com/resources/colors) or a custom
> color.

Default: `blueberry500`

#### `data-size`

> Size of the icon in `px`.

Default: `56`

#### `data-transparent`

> Toggle for transparent accent icon background. If `null`, the background fill will be white.

Default: `null`

# Applet Icons

## Usage

```html
<i className="wdc-icon" data-icon="benefits" data-category="applet" />
<i className="wdc-icon" data-icon="benefits" data-category="applet" data-color="pomegranate" />
<i className="wdc-icon" data-icon="benefits" data-category="applet" data-size="60" />
```

## Data Attributes

### Optional

#### `data-color`

> Icon hue from the [Canvas palette](https://design.workday.com/resources/colors) (e.g. `cinnamon`,
> `chiliMango`, etc.). Applet icons only support base hues and will not accept shades.

Default: `blueberry`

#### `data-size`

> Size of the icon in `px`.

Default: `92`

# System Icons

## Usage

System icons contain up to 3 layers that may be colored independently: `accent`, `fill`, and
`background`.

```html
<i className="wdc-icon" data-icon="activityStream" data-category="system" />
<i
  className="wdc-icon"
  data-icon="activityStream"
  data-category="system"
  data-fill-color="blueberry500"
  data-accent-color="frenchVanilla100"
  data-background-color="blueberry500"
/>
<i className="wdc-icon" data-icon="activityStream" data-category="system" data-size="48" />

<!-- Hover Colors -->
<i
  className="wdc-icon"
  data-icon="activityStream"
  data-category="system"
  data-fill-color="blueberry500"
  data-accent-color="frenchVanilla100"
  data-background-color="blueberry500"
  data-hover-fill-color="cantaloupe500"
  data-hover-accent-color="frenchVanilla100"
  data-hover-background-color="cantaloupe500"
/>

<!-- Circle Background -->
<i
  className="wdc-icon"
  data-icon="activityStream"
  data-category="system"
  data-circle-background="true"
/>
<i
  className="wdc-icon"
  data-icon="activityStream"
  data-category="system"
  data-circle-background="blueberry400"
/>
```

## Data Attributes

All system icon colors will accept colors from the
[Canvas palette](https://design.workday.com/resources/colors) or a custom color.

### Optional

#### `data-color`

> Icon color. This will define `data-accent-color` and `data-fill-color`. `data-accent-color` and
> `data-fill-color` will override this property if defined.

Default: `colors.primary.iconStandard`

#### `data-hover-color`

> Icon color on hover. This will define `data-hover-accent-color` and `data-hover-fill-color`.
> `data-hover-accent-color` and `data-hover-fill-color` will override this property if defined.

Default: `colors.primary.iconHover`

#### `data-accent-color`

> Accent color. This will override `data-color`.

#### `data-hover-accent-color`

> Accent color on hover. This will override `data-hover-color`.

#### `data-background-color`

> Background color.

Default: `transparent`

#### `data-hover-background-color`

> Background color on hover.

Default: `transparent`

#### `data-fill-color`

> Fill color. This will override `data-color`.

#### `data-hover-fill-color`

> Fill color on hover. This will override `data-hover-color`.

#### `data-circle-background`

> Background color for the circle background. Set it to `true` to render the circle background in
> its default color (`soap300`). You may also use a color from the
> [Canvas palette](https://design.workday.com/resources/colors) or a custom color. If `null`, the
> circle background will not be rendered.
>
> The icon color will be determined based on contrast with the provided circle background color.
> System icons with the circle background _cannot_ have hover colors.

Default: `null`

#### `data-size`

> Size of the icon in `px`.

Default: `24`

# Injection Configuration

## Default Options

```js
initializeIcons((iconPath = null), (selector = '.wdc-icon'));
```

## Icon Path

You may define a custom path to a folder containing Canvas icons. Within this folder, each icon set
must be named according to the structure below.

**Folder Structure**

```
icons
|--- system
|------ *.svg
|--- accent
|------ *.svg
|--- applet
|------ *.svg
```

```js
initializeIcons('./assets/icons');
```

## Custom Icon Selector

Pass a selector string to the second argument of the initialization function to target a different
selector when injecting.

```js
initializeIcons(null, '.wdc-custom-icon');
```

# Canvas Kit CSS Icon List

Allows styling for arranging and spacing a list of icons.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-icon
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-icon/index.scss';
```

## Usage

```html
<div class="wdc-icon-list wdc-icon-list-white">
  <div class="wdc-icon-list-icon">
    <!-- wd-icon-export.svg -->
  </div>
  <div class="wdc-icon-list-icon">
    <!-- wd-icon-fullscreen.svg -->
  </div>
</div>
```
