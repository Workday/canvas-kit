import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import React from 'react';

type ColorPickerState = {
  color: string;
  colors: string[];
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
  console.warn('color', colors);
  const [customColor, setCustomColor] = React.useState('');

  const state = {
    color,
    colors,
    customColor,
  };

  const events = useEventMap(colorPickerEventMap, state, config, {
    registerColor(data: {color: string}) {
      setColors(colors => colors.concat(data.color));
    },

    unregisterColor(data: {color: string}) {
      console.warn('called on load', data.color);
      setColors(colors => colors.filter(color => color !== data.color));
    },

    setCursorColor(data: {color: string}) {
      setCursorColor(data.color);
    },

    next() {},

    previous() {},

    setCustomColor(data: {color: string}) {
      setCustomColor(data.color);
    },
    setColor(data: {color: string}) {
      setColor(data.color);
    },
  });

  return {
    state,
    events,
  };
};
