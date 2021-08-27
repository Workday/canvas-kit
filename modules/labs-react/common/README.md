# Canvas Kit React Common

![LABS: Beta](https://img.shields.io/badge/LABS-beta-orange)

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This module is work in progress and currently in pre-release.

a collection of shared components used across canvas-kit-react

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
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
import {space} from '@workday/canvas-kit-react/tokens';
const styles: ComponentStyles = {
  panel: {
    // `themeRTL` will transform this to `marginRight` when the direction is `RTL`
    marginLeft: space.xxs,
  },
  top: {
    top: space.xxs,
  },
};
export const HelloWorld = ({backgroundImagePath}) => {
  const {themeRTL, theme} = useThemeRTL();

  const panelStyles = {
    ...styles.panel,
    color: theme.canvas.palette.neutral.main,
  };

  const backgroundStyles = {
    // `themeRTL` will transform this to `url(${backgroundImagePath}) right top` when the direction is `RTL`
    background: `url(${backgroundImagePath}) left top`,
  };

  return (
    <div css={themeRTL(panelStyles, styles.top)} style={themeRTL(backgroundStyles)}>
      Hello World
    </div>
  );
};
```
