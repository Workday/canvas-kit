import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import React from 'react';

type ColorPickerState = {
  color: string;
  customColor: string;
};

type ColorPickerEvents = {
  setColor(data: {color: string}): void;
  setCustomColor(data: {color: string}): void;
};

export type ColorPickerModel = Model<ColorPickerState, ColorPickerEvents>;

export const colorPickerEventMap = createEventMap<ColorPickerEvents>()({
  guards: {
    shouldSetColor: 'setColor',
    shouldSetCustomColor: 'setCustomColor',
  },
  callbacks: {
    onSetColor: 'setColor',
    onSetCustomColor: 'setCustomColor',
  },
});

export type ColorPickerModelConfig = {
  initialColor?: string;
} & Partial<ToModelConfig<ColorPickerState, ColorPickerEvents, typeof colorPickerEventMap>>;

export const useColorPickerModel = (config: ColorPickerModelConfig = {}): ColorPickerModel => {
  const [color, setColor] = React.useState(config.initialColor || '');
  const [customColor, setCustomColor] = React.useState('');

  const state = {
    color,
    customColor,
  };

  const events = useEventMap(colorPickerEventMap, state, config, {
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
