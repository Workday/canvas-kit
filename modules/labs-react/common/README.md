# Canvas Kit React Common

![LABS: Beta](https://img.shields.io/badge/LABS-beta-orange)

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This module is work in progress and currently in pre-release.

a collection of shared components used across canvas-kit-react

## Installation

```sh
yarn add @workday/canvas-kit-labs-react/common
```

For more detailed information on this component, please refer to the
[storybook documentation](https://workday.github.io/canvas-kit/?path=/docs/labs-common)

## useThemeRTL

This is a way to automatically transform CSS, applied using either Emotion's css attribute or by a
style attribute, when there is a RTL theme in use. Instead of authoring two sets of CSS objects, one
for each language direction. Now you can author the LTR version and this hook will automatically
create the RTL counterpart for you on the fly. This works for both object and string template
Emotion methods.

For convenience we also export a ComponentStyles type if you want to organize your styles all
together.

### Usage

```tsx
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {ComponentStyles, useThemeRTL} from '@workday/canvas-kit-labs-react/common';
const styles: ComponentStyles = {
  panel: {
    margin: '8px',
  },
  top: {
    top: '8px',
  },
  red: {
    color: 'red',
  },
};
export const HelloWorld = () => {
  const {themeRTL} = useThemeRTL();
  return (
    <div css={themeRTL(styles.panel, styles.top)} style={themeRTL(styles.red)}>
      Hello World
    </div>
  );
};
```
