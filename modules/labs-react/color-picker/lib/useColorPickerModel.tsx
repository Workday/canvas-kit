/* eslint-disable workday-custom-rules/restricted-imports */
import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {defaultGetId} from '@workday/canvas-kit-react/tabs/lib/list';
// eslint-disable-next-line workday-custom-rules/restricted-imports
import {
  SelectionEvents,
  SelectionModel,
  SelectionModelConfig,
  SelectionState,
  useSelectionModel,
} from '@workday/canvas-kit-react/tabs/lib/selection';
import React from 'react';

type ColorPickerState<T = unknown> = SelectionState<T> & {
  color: string;
  customColor: string;
  columnCount: number;
};

type ColorPickerEvents<T = unknown> = SelectionEvents<T> & {
  setColor(data: {color: string}): void;
  setCustomColor(data: {color: string}): void;
};

export interface ColorPickerModel<T = unknown> extends SelectionModel<T> {
  state: ColorPickerState<T>;
  events: ColorPickerEvents<T>;
}

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
  columnCount?: number;
} & Partial<ToModelConfig<ColorPickerState, ColorPickerEvents, typeof colorPickerEventMap>>;

export const useColorPickerModel = <T extends unknown>(
  config: ColorPickerModelConfig = {}
): ColorPickerModel => {
  const model = useSelectionModel(config as SelectionModelConfig<T>);
  const [columnCount, setColumnCount] = React.useState(config.columnCount || 8);
  const [color, setColor] = React.useState(config.initialColor || '');
  const [customColor, setCustomColor] = React.useState('');
  const getId = defaultGetId;

  const state = {
    ...model.state,
    color,
    customColor,
    columnCount,
  };

  const events = useEventMap(colorPickerEventMap, state, config, {
    ...model.events,

    setCustomColor(data: {color: string}) {
      setCustomColor(data.color);
    },
    setColor(data: {color: string}) {
      setColor(data.color);
    },
  } as ColorPickerEvents<T>);

  return {
    getId: getId,
    selection: model.selection,
    state,
    events,
  };
};
