# Canvas Kit CSS Icon

Icon injection and coloring toolkit for Canvas icons. Uses
[SVGInjector](https://github.com/iconic/SVGInjector).

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-icon
```

## Usage

Icons will load from CDN by default and the injector will look for the `.wdc-icon` selector.

**HTML** Apply class `.wdc-icon` on an element to enable icon injection.

```html
<i className="wdc-icon" data-icon="activityStream" data-category="system" />
<i className="wdc-icon" data-icon="apple" data-category="accent" data-color="chiliMango" />
<i className="wdc-icon" data-icon="rocket" data-category="applet" data-hue="cinnamon" />
```

**JavaScript** Import script and execute.

```js
import initializeIcons from '@workday/canvas-kit-css-icon';

initializeIcons();
```

## Icon Configuration

Icons may be configured through `data-*` properties below.

### Selecting an icon

```html
<i className="wdc-icon" data-icon="activityStream" data-category="system" />
```

##### `data-icon`

Icon name in camelCase.

##### `data-category`

The category of the icon. Must be one of the following: `system`, `accent`, `applet`.

### Coloring

#### System Icons

System icons contain up to 3 layers that can be colored independently.

```html
<i
  className="wdc-icon"
  data-icon="activityStream"
  data-category="system"
  data-fill-color="cinnamon300"
  data-accent-color="cinnamon300"
  data-background-color="frenchVanilla100"
/>

<-- Shorthand Coloring -->
<i
  className="wdc-icon"
  data-icon="activityStream"
  data-category="system"
  data-fill-color="blueberry"
  data-accent-color="blueberry"
  data-background-color="transparent"
/>
```

**`data-fill-color`  
`data-accent-color`  
`data-background-color`**

Use a color in the [Canvas palette](https://design.workday.com/resources/colors). Color must be
written in camelCase.

If a hue name is used but no color shade is defined (e.g. `blueberry`), the color will default to
the 500 weight (e.g. `blueberry500`).

A custom color value (e.g. `#FFFFFF`) may also be used.

#### Accent Icons

Accent icons may be colored in 1 color.

```html
<i className="wdc-icon" data-icon="apple" data-category="accent" data-color="cinnamon300" />

<-- Shorthand Coloring -->
<i className="wdc-icon" data-icon="apple" data-category="accent" data-color="chiliMango" />
```

**`data-color`**

See [System Icons coloring](#system-icons).

#### Applet Icons

Applet icons are colored by hues (e.g. blueberry). Selecting a hue will apply the proper color
shades to the applet.

```html
<i className="wdc-icon" data-icon="rocket" data-category="applet" data-color="cinnamon" />
```

**`data-color`**

> Applet icons only support base hues and will not accept shades.

Use a hue in the [Canvas palette](https://design.workday.com/resources/colors). Hue must be written
in camelCase. For example, `cinnamon`.

## Injection Configuration

**Default Options**

```js
initializeIcons((iconPath = null), (selector = '.wdc-icon'));
```

### Icon Path

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

### Icon Selector

Pass a selector string to the 2nd argument of the initialization function to target a different
selector when injecting.

```js
initializeIcons(null, '.wdc-custom-icon');
```

# Canvas Kit CSS Icon List

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
