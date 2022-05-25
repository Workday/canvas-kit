import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';

import {useColorPickerModel} from './useColorPickerModel';
import Swatch from './ColorPicker.Swatch';
import ColorInput from './ColorPicker.Input';
import CustomColorForm from './ColorPicker.Form';
import SubmitButton from './ColorPicker.SubmitButton';
import SwatchButton from './ColorPicker.SwatchButton';
import SwatchRow from './ColorPicker.SwatchRow';
import SwatchBook from './ColorPicker.SwatchBook';
// import {Menu} from '@workday/canvas-kit-react/menu';

export interface ColorPickerProps {
  children: React.ReactNode;
}

export const ColorPicker = createContainer()({
  displayName: 'ColorPicker',
  modelHook: useColorPickerModel,
  subComponents: {
    SwatchBook: SwatchBook,
    SwatchRow: SwatchRow,
    SwatchButton: SwatchButton,
    SubmitButton: SubmitButton,
    CustomColorForm: CustomColorForm,
    Input: ColorInput,
    Swatch: Swatch,
  },
})<ColorPickerProps>(({children}, _, model) => {
  return <>{children}</>;
});
