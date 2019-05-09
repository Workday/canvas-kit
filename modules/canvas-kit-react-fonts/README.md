# Canvas Kit Fonts

By default, no fonts are included with Canvas Kit modules. To use official Canvas Kit fonts, install
and import the `@workday/canvas-kit-react-fonts` module. Note that this module sources fonts from
the Workday CDN.

## Installation

```sh
yarn add @workday/canvas-kit-react-fonts
```

## Usage

Canvas Kit components uses the CSS-in-JS library [emotion](https://emotion.sh) for styling. So the
preferred method for adding fonts to a project is to use the library's `injectGlobal` method. It
will apply emotion styles globally to your project. If you're using Canvas Kit components already,
you should have emotion added to your project. If not, start by adding it as a dependency:

```sh
yarn add emotion
```

Then in your index or main file of your project...

```tsx
import {injectGlobal} from 'emotion';
import fonts from '@workday/canvas-kit-react-fonts';

// Inject all of Canvas' @font-face declarations to <head> via emotion
injectGlobal(...fonts);
```

Finally, use one of our official typography styles from the `canvas-kit-react-core` module. If you
need to build your own typography styles use `fontFamily` or `monoFontFamily` font lists from the
same module.

Examples:

```tsx
import {css} from 'react-emotion';
import {type} from '@workday/canvas-kit-react-core';

...

render(
  // Uses the official 'body' style from Canvas' typography styles
  return <p className={css(type.body)}>Lorem Ipsum...</p>
)
```

or

```tsx
import styled from 'react-emotion';
import {fontFamily, monoFontFamily} from '@workday/canvas-kit-react-core';

// Custom typography using the official Canvas font list
const customParagraph = styled('p')({
  fontFamily: fontFamily, // "Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif
});

const customPre = styled('pre')({
  fontFamily: monoFontFamily, // "Roboto Mono", "Courier New", Courier, monospace
});
```
