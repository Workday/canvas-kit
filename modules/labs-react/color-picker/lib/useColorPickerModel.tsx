import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import React from 'react';

type ColorPickerState = {
  color: string;
  colors: string[];
  cursorColor: string;
  customColor: string;
};

type ColorPickerEvents = {
  setColor(data: {color: string}): void;
  setCustomColor(data: {color: string}): void;
  setCursorColor(data: {color: string}): void;
  next(): void;
  previous(): void;
  registerColor(data: {color: string}): void;
  unregisterColor(data: {color: string}): void;
};

export type ColorPickerModel = Model<ColorPickerState, ColorPickerEvents>;

export const colorPickerEventMap = createEventMap<ColorPickerEvents>()({
  guards: {
    shouldSetColor: 'setColor',
    shouldSetCustomColor: 'setCustomColor',
    shouldSetCursorColor: 'setCursorColor',
    shouldNext: 'next',
    shouldPrevious: 'previous',
    shouldRegisterColor: 'registerColor',
    shouldUnregisterColor: 'unregisterColor',
  },
  callbacks: {
    onSetColor: 'setColor',
    onSetCustomColor: 'setCustomColor',
    onSetCursorColor: 'setCursorColor',
    onNext: 'next',
    onPrevious: 'previous',
    onRegisterColor: 'registerColor',
    onUnregisterColor: 'unregisterColor',
  },
});

export type ColorPickerModelConfig = {
  initialColor?: string;
} & Partial<ToModelConfig<ColorPickerState, ColorPickerEvents, typeof colorPickerEventMap>>;

export const useColorPickerModel = (config: ColorPickerModelConfig = {}): ColorPickerModel => {
  const [color, setColor] = React.useState(config.initialColor || '');
  const [colors, setColors] = React.useState([] as string[]);
  const [cursorColor, setCursorColor] = React.useState('');
  const [customColor, setCustomColor] = React.useState('');
  const initialCurrentRef = React.useRef('');

  const getFirst = (colors: string[]) => {
    return colors[0];
  };

  const getLast = (colors: string[]) => {
    return colors[colors.length - 1];
  };

  const getItem = (color: string, colors: string[]) => {
    console.warn('get item', color);
    const swatch = color ? colors.find(swatch => swatch === color) : getFirst(colors); // no id, return first item
    console.warn('SWATCH', swatch);
    // assert(item, `Item not found: ${id}`);
    return swatch;
  };

  const getOffsetItem = (offset: number) => (color: string, colors: string[]) => {
    // const item = getItem(color, colors);

    const currentIndex = colors.findIndex(swatch => swatch === color);
    let nextIndex = currentIndex + offset;
    if (nextIndex < 0) {
      nextIndex = colors.length - 1;
    } else if (nextIndex >= colors.length) {
      nextIndex = 0;
    }
    // const disabledAttribute = items[nextIndex].ref.current?.getAttribute('disabled');
    // if (disabledAttribute !== null || disabledAttribute === 'false') {
    //   // The next item is disabled, try again
    //   return getOffsetItem(offset)(items[nextIndex].id, items);
    // }
    console.warn('colors[nextIndex]', colors[nextIndex]);

    return colors[nextIndex];
  };

  const getNext = getOffsetItem(1);
  const getPrevious = getOffsetItem(-1);

  const state = {
    color,
    colors,
    customColor,
    cursorColor,
  };

  const events = useEventMap(colorPickerEventMap, state, config, {
    registerColor(data: {color: string}) {
      if (!initialCurrentRef.current) {
        initialCurrentRef.current = data.color;
        setCursorColor(initialCurrentRef.current);
      }
      setColors(colors => colors.concat(data.color));
    },

    unregisterColor(data: {color: string}) {
      setColors(colors => colors.filter(color => color !== data.color));
    },

    setCursorColor(data: {color: string}) {
      setCursorColor(data.color);
    },

    next() {
      getOffsetItem(1);
    },

    previous() {
      setCursorColor(getPrevious(cursorColor, colors));
    },

    setCustomColor(data: {color: string}) {
      setCustomColor(data.color);
    },
    setColor(data: {color: string}) {
      setCursorColor(data.color);
      setColor(data.color);
    },
  });

  return {
    state,
    events,
  };
};
