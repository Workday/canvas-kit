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
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
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

## useThemedRing

This is a way to automatically add themed colors to your inputs. This is helpful when showing alerts
to users. It supports `error`, `alert`, and `success` states. It will try and use the corresponding
`main` colors from your `CanvasThemePalette` unless they do not meet accessibility contrast, in
which case the outer ring will use the `darkest` color. This hook will also show a `focusOutline`
ring when the input is focused. Note: You should not rely on these colors alone to differentiate
alerts, but use them in combination with icons or hint text.

### Usage

```tsx
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';

export const MyInput = ({handleChange}) => {
  const [value, setValue] = React.useState('invalid@email');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const alertStyles = useThemedRing('alert');

  return (
    <TextInput>
      <TextInput.Label>Email</TextInput.Label>
      <TextInput.Field css={alertStyles} onChange={handleChange} value={value} />
      <TextInput.Hint>Please enter a valid email.</TextInput.Hint>
    </TextInput>
  );
};
```
