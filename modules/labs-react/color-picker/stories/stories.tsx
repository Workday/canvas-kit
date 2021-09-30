/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {ColorPicker, useColorPickerModel} from '@workday/canvas-kit-labs-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';
import README from '../README.md';

export default {
  title: 'Labs/Color Picker/React',
  decorators: [withReadme(README)],
  component: ColorPicker,
};

const defaultColorSet = [
  colors.blueberry600,
  colors.grapeSoda600,
  colors.pomegranate600,
  colors.cinnamon600,
  colors.cantaloupe600,
  colors.sourLemon600,
  colors.greenApple600,
  colors.jewel600,

  colors.blueberry500,
  colors.grapeSoda500,
  colors.pomegranate500,
  colors.cinnamon500,
  colors.cantaloupe500,
  colors.sourLemon500,
  colors.greenApple500,
  colors.jewel500,

  colors.blueberry400,
  colors.grapeSoda400,
  colors.pomegranate400,
  colors.cinnamon400,
  colors.cantaloupe400,
  colors.sourLemon400,
  colors.greenApple400,
  colors.jewel400,

  colors.blueberry300,
  colors.grapeSoda300,
  colors.pomegranate300,
  colors.cinnamon300,
  colors.cantaloupe300,
  colors.sourLemon300,
  colors.greenApple300,
  colors.jewel300,

  colors.blueberry200,
  colors.grapeSoda200,
  colors.pomegranate200,
  colors.cinnamon200,
  colors.cantaloupe200,
  colors.sourLemon200,
  colors.greenApple200,
  colors.jewel200,

  colors.blueberry100,
  colors.grapeSoda100,
  colors.pomegranate100,
  colors.cinnamon100,
  colors.cantaloupe100,
  colors.sourLemon100,
  colors.greenApple100,
  colors.jewel100,

  colors.blackPepper600,
  colors.blackPepper400,
  colors.blackPepper300,
  colors.blackPepper100,
  colors.frenchVanilla500,
  colors.frenchVanilla400,
  colors.frenchVanilla200,
  colors.frenchVanilla100,
];

export const Default = () => {
  const model = useColorPickerModel();
  return (
    <>
      <ColorPicker model={model}>
        <ColorPicker.SwatchBook
          columnCount={8}
          style={{marginBottom: '20px'}}
          colors={defaultColorSet}
        >
          {colors => {
            return colors.map(color => <ColorPicker.SwatchButton key={color} color={color} />);
          }}
        </ColorPicker.SwatchBook>
      </ColorPicker>
      <ColorPicker>
        <ColorPicker.Swatch showCheck={false} color={model.state.color} />
      </ColorPicker>
    </>
  );
};

export const WithColorInput = () => {
  const colorPickerModel = useColorPickerModel();
  return (
    <>
      <ColorPicker model={colorPickerModel}>
        <ColorPicker.SwatchBook
          columnCount={8}
          style={{marginBottom: '20px'}}
          colors={defaultColorSet}
        >
          {colors => {
            return colors.map(color => <ColorPicker.SwatchButton key={color} color={color} />);
          }}
        </ColorPicker.SwatchBook>
        <ColorPicker.CustomColorForm label="Custom Color">
          <ColorPicker.Input />
          <ColorPicker.SubmitButton aria-label="Submit Custom Color" />
        </ColorPicker.CustomColorForm>
      </ColorPicker>

      <ColorPicker>
        <ColorPicker.Swatch showCheck={false} color={colorPickerModel.state.color} />
      </ColorPicker>
    </>
  );
};
