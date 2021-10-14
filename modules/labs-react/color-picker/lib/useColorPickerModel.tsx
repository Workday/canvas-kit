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
  up(): void;
  down(): void;
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
    shouldUp: 'up',
    shouldDown: 'down',
  },
  callbacks: {
    onSetColor: 'setColor',
    onSetCustomColor: 'setCustomColor',
    onSetCursorColor: 'setCursorColor',
    onNext: 'next',
    onPrevious: 'previous',
    onRegisterColor: 'registerColor',
    onUnregisterColor: 'unregisterColor',
    onUp: 'up',
    onDown: 'down',
  },
});

export type ColorPickerModelConfig = {
  initialColor?: string;
  columnCount?: number;
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

  const getOffsetItem = (offset: number) => (color: string, colors: string[]) => {
    const currentIndex = colors.findIndex(swatch => swatch === color);

    let nextIndex = currentIndex + offset;
    if (nextIndex < 0) {
      nextIndex = colors.length - 1;
    } else if (nextIndex >= colors.length) {
      nextIndex = 0;
    }

    return colors[nextIndex];
  };

  const getOffsetUpItem = () => (cursorColor: string, colors: string[]) => {
    const currentIndex = colors.indexOf(cursorColor);
    const nextIndex = colors.indexOf(colors[currentIndex - 8]);
    let nextUpIndex = colors[currentIndex - 8];
    console.warn('nextIndex', nextIndex);
    if (nextIndex <= 0) {
      console.warn('in here');
      console.warn('nextIndex', nextIndex);
      nextUpIndex = colors[colors.length - nextIndex];
    }

    return nextUpIndex;
  };

  const getOffsetDownItem = () => (cursorColor: string, colors: string[]) => {
    const currentIndex = colors.indexOf(cursorColor);

    return colors[currentIndex + 8];
  };

  const getNext = getOffsetItem(1);
  const getPrevious = getOffsetItem(-1);
  const getUp = getOffsetUpItem();
  const getDown = getOffsetDownItem();

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
      setCursorColor(getNext(cursorColor, colors));
    },

    previous() {
      setCursorColor(getPrevious(cursorColor, colors));
    },

    up() {
      setCursorColor(getUp(cursorColor, colors));
    },

    down() {
      setCursorColor(getDown(cursorColor, colors));
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
