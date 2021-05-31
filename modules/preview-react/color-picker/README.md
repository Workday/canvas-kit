# Canvas Kit React Color Picker

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/preview-react/README.md">
  <img src="https://img.shields.io/badge/PREVIEW-beta-blueviolet" alt="PREVIEW: Beta" />
</a>  This component is in Preview because it has not been converted to a [Compound Component](../../docs/mdx/COMPOUND_COMPONENTS.mdx) yet. There is also work other teams are doing on Color Picker that may replace this implementation.

Color Picker is a popup for selecting a color.

The Color Picker is designed to be used different contexts. The pattern shown below is one where the
Color Picker is used as a popup from a button target by using hooks around the callbacks provided by
the component.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

```tsx
import * as React from 'react';
import ColorPicker from '@workday/canvas-kit-labs-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper, Popup} from '@workday/canvas-kit-react/popup';

const MyComponent: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [color, setColor] = React.useState('');
  const ref = React.useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSubmit = React.useCallback(
    (submitColor: string) => {
      setColor(submitColor.toUpperCase());
      setIsOpen(false);
    },
    [setIsOpen]
  );

  return (
    <>
      <SecondaryButton ref={ref} variant="primary" onClick={toggleOpen}>
        Toggle Color Picker
      </SecondaryButton>
      <Popper placement={'bottom'} open={isOpen} anchorElement={ref.current!}>
        <Popup style={{marginTop: 8}} padding={PopupPadding.s}>
          <ColorPicker
            resetColor={colors.blueberry400}
            resetLabel={'Reset'}
            showCustomHexInput={true}
            onColorChange={handleSubmit}
            onColorReset={() => handleSubmit(colors.blueberry400)}
            onSubmitClick={toggleOpen}
            value={color}
          />
        </Popup>
      </Popper>
    </>
  );
};
```

## Static Properties

> None

## Component Props

### Required

#### `onColorChange: (color: string) => void`

> This handler is called when the user selects a color through either a mouse or keyboard event. It
> is called with the hex value of the color selected by the user, or with a custom hex value entered
> by the user in the custom input.

### Optional

#### `onColorReset: Function`

> When this handler is provided, a Reset button will be displayed at the top of the picker using the
> `resetLabel` provided. This handler is called when the reset button is selected through either a
> mouse or keyboard event.

---

#### `resetColor: string`

> The color to display as part of the Reset button. It is strongly recommended that consumers
> provide a properly globalized value.

> Note: This prop is only necessary when the `onColorReset` handler is provided.

---

#### `resetLabel: string`

> The text to display as part of the Reset button. It is strongly recommended that consumers provide
> a properly globalized value.

> Note: This prop is only necessary when the `onColorReset` handler is provided.

Default: `Reset`

---

#### `value: string`

> The hex value of the color to display styled in a selected state. If the value doesn't match one
> of the available colors, the hex value will be displayed in the custom input.

---

#### `colorSet: string[]`

> The hex values of the colors to display in the color picker grid. If no custom colors are
> provided, a default set will be rendered.

---

#### `showCustomHexInput: boolean`

> When `true` the `ColorInput` component and a submit button will be displayed at the bottom of the
> picker allowing the user to enter a custom hex value.

Default: `false`

---

#### `customHexInputLabel: string`

> The text to display abover the custom input. It is strongly recommended that consumers provide a
> properly globalized value.

> Note: This prop is only used when `showCustomHexInput` is `true`.

Default: `Custom Hex Color`

---

#### `onSubmitClick: (event: React.FormEvent) => void`

> When this handler is provided, an action can be tied to clicking the check button provided. This
> handler is called when the check button is selected through a keyboard event only.

> Note: This prop is only used when `showCustomHexInput` is `true`.

---
