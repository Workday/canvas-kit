# Canvas Kit React Slider

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

slider component

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

or

```sh
yarn add @workday/canvas-kit-labs-react-slider
```

## Usage

```tsx
import * as React from 'react';
import Slider from '@workday/canvas-kit-react-slider';

const sliderProps: SliderProps = {
  max: 100,
  min: 0,
  step: 1,
  startValue: 50,
  showTextInput: true,
};

<Slider {...sliderProps} />;
```

## Component Props

### Required

#### `max: number`

> Max number for the slider.

---

#### `min: number`

> Min number for the slider.

---

#### `startValue: number`

> The starting value for the slider.

---

### Optional

#### step: number

> How much to increase or decrease the value by when using the input slider.

---

#### showTextInput: boolean

> If specified, this will show a text input to the right of the slider to manually enter the range value using number keys.

---

#### onChange?: (newValue: number) => void

> If specified, this callback is executed when the value is changed.

---

#### onSliderStartDrag?: (newValue: number) => void

> If specified, this callback is executed when the mouse is pressed.

---

#### onKeyDown?: (newValue: number) => void

> If specified, this callback is executed when a key is pressed.

---

#### onKeyUp?: (newValue: number) => void

> If specified, this callback is executed when a key is released.

---

#### onSliderEndDrag?: (newValue: number) => void

> If specified, this callback is executed when the mouse is released.

---
