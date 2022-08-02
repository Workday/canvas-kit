import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';

import {useColorPickerModel} from './useColorPickerModel';
import Swatch from './ColorPickerSwatch';
import ColorInput from './ColorPickerInput';
import CustomColorForm from './ColorPickerForm';
import SubmitButton from './ColorPickerSubmitButton';
import SwatchButton from './ColorPickerSwatchButton';
import SwatchBook from './ColorPickerSwatchBook';
// import {Menu} from '@workday/canvas-kit-react/menu';

export interface ColorPickerProps {
  children: React.ReactNode;
}

export const ColorPicker = createContainer()({
  displayName: 'ColorPicker',
  modelHook: useColorPickerModel,
  subComponents: {
    SwatchBook: SwatchBook,
    SwatchButton: SwatchButton,
    SubmitButton: SubmitButton,
    CustomColorForm: CustomColorForm,
    Input: ColorInput,
    Swatch: Swatch,
  },
})<ColorPickerProps>(({children}, _, model) => {
  return <>{children}</>;
});
