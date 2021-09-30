import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {useColorPickerModel, ColorPickerModel, ColorPickerModelConfig} from './useColorPickerModel';
import Swatch from './ColorPicker.Swatch';
import ColorInput from './ColorPicker.Input';
import CustomColorForm from './ColorPicker.Form';
import SubmitButton from './ColorPicker.SubmitButton';
import SwatchButton from './ColorPicker.SwatchButton';
import SwatchRow from './ColorPicker.SwatchRow';
import SwatchBook from './ColorPicker.SwatchBook';
import {ColorPickerContent} from './ColorPicker.Content';

export const ColorPickerModelContext = React.createContext({} as ColorPickerModel);

export interface ColorPickerProps extends ColorPickerModelConfig {
  model?: ColorPickerModel;
  children: React.ReactNode;
}

export const ColorPicker = createComponent()({
  displayName: 'ColorPicker',
  Component: ({children, model, ...config}: ColorPickerProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const value = model || useColorPickerModel(config);

    return (
      <ColorPickerModelContext.Provider value={value}>{children}</ColorPickerModelContext.Provider>
    );
  },
  subComponents: {
    SwatchBook: SwatchBook,
    SwatchRow: SwatchRow,
    SwatchButton: SwatchButton,
    SubmitButton: SubmitButton,
    CustomColorForm: CustomColorForm,
    Input: ColorInput,
    Swatch: Swatch,
    Content: ColorPickerContent,
  },
});
