import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {useColorPickerModel, ColorPickerModel, ColorPickerModelConfig} from './useColorPickerModel';
import Swatch from './ColorPicker.Swatch';
import {ColorPickerContent} from './ColorPicker.Content';

export const ColorPickerModelContext = React.createContext<ColorPickerModel>({} as any);

export interface ColorPickerProps extends ColorPickerModelConfig {
  model?: ColorPickerModel;
  children: React.ReactNode;
}

export const ColorPicker = createComponent()({
  displayName: 'ColorPicker',
  Component: ({children, model, ...config}: ColorPickerProps) => {
    const value = useDefaultModel(model, config, useColorPickerModel);

    return (
      <ColorPickerModelContext.Provider value={value}>{children}</ColorPickerModelContext.Provider>
    );
  },
  subComponents: {
    Swatch: Swatch,
    Content: ColorPickerContent,
  },
});
